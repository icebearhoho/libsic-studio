import { useMemo } from 'react';
import Clock from './Clock.jsx';
import Effect from './Effects.jsx';
import { useParallax } from './parallax.js';
import { buildDrawList, defaultItems } from './placement.js';
import { applyObjectAction } from './sceneSettings.js';
import './scene.css';

// Draws one scene: its layers stacked on top of each other (moving with the mouse),
// the effect on the right layer, and a button over each clickable object.
//   scene            the scene from the API
//   settings         { effect, lightOn, curtainsClosed }, kept by the parent so a saved room can remember them
//   onSettingsChange called with the new settings after a click
//   onNextTrack      called when the music object is clicked (the CD player will use this)
//   playing          true while music plays: the record spins and the tonearm rests on it
//   items            the objects a visitor placed (see placement.js); null shows the scene's default arrangement
//   frozen           true while decorating: the layers stay still instead of following the mouse
//   children         drawn on top of everything inside the stage (the decorate overlay)
//
// A layer is a picture with a few optional extras (all set in the scene data):
//   box     where the picture sits, in percent of the stage (default: the whole stage)
//   blend   "screen" for glows, so they add light instead of covering what is below
//   light   true for lamp light: it disappears when the lights are switched off
//   night   true for a picture that only shows at night, when the lights are off (the night sky in a window)
//   curtain a curtain: it is drawn wider while settings.curtainsClosed is true
//   anim    a small movement: spin, tonearm, sway, steam, pulse, breathe, drift, flick or billow
//   kind    "clock" draws the live clock instead of a picture
//   tile    repeats a small picture over the layer (film grain)
//   item    the layer belongs to an object a visitor can move: it is drawn once for each copy of that object
export default function SceneStage({ scene, settings, onSettingsChange, onNextTrack, playing = true, items = null, frozen = false, children }) {
  const drawList = useMemo(() => buildDrawList(scene, items ?? defaultItems(scene)), [scene, items]);
  const depths = useMemo(() => drawList.map(({ layer }) => layer.depth), [drawList]);
  const { stageRef, layerRef, handlers } = useParallax(depths, !frozen);

  function handleClick(object) {
    if (object.action.type === 'nextTrack') onNextTrack?.(object);
    else onSettingsChange(applyObjectAction(settings, object));
  }

  const isOn = (object) =>
    (object.action.type === 'toggleLight' && settings.lightOn) ||
    (object.action.type === 'toggleCurtains' && settings.curtainsClosed) ||
    (object.action.type === 'toggleEffect' && settings.effect === object.action.effect);

  const hasLights = drawList.some(({ layer }) => layer.light || layer.night);

  const content = (layer, flip) =>
    flip ? (
      <div className="flip" style={{ transform: 'scaleX(-1)' }}>
        <LayerContent layer={layer} />
      </div>
    ) : (
      <LayerContent layer={layer} />
    );

  const hotspots = (templateIndex) =>
    scene.objects
      .filter((object) => object.layer === templateIndex)
      .map((object) => (
        <button
          key={object.key}
          type="button"
          className={`hotspot${isOn(object) ? ' is-on' : ''}`}
          style={{
            left: `${object.x}%`,
            top: `${object.y}%`,
            width: `${object.width}%`,
            height: `${object.height}%`,
          }}
          aria-label={object.label}
          disabled={frozen}
          onClick={() => handleClick(object)}
        >
          <span className="hotspot-label">{object.label}</span>
        </button>
      ));

  return (
    <div
      ref={stageRef}
      className={`stage${settings.lightOn ? '' : ' lights-off'}${settings.curtainsClosed ? ' curtains-closed' : ''}${hasLights ? ' has-lights' : ''}${playing ? '' : ' paused'}`}
      data-testid="stage"
      {...handlers}
    >
      {drawList.map(({ key, layer, box, templateIndex, itemId, flip }, i) => (
        <div
          key={key}
          ref={layerRef(i)}
          className="layer"
          style={layerStyle(box)}
          data-item={itemId}
          data-light={layer.light ? 'true' : undefined}
          data-night={layer.night ? 'true' : undefined}
          data-blend={layer.blend && layer.blend !== 'normal' ? layer.blend : undefined}
        >
          {layer.curtain ? (
            <div className="curtain" style={{ transformOrigin: `${layer.curtain.origin}% 0%`, '--closed-scale': layer.curtain.scale }}>
              {content(layer, flip)}
              {hotspots(templateIndex)}
            </div>
          ) : (
            <>
              {content(layer, flip)}
              {templateIndex === scene.effectLayer && <Effect name={settings.effect} />}
              {hotspots(templateIndex)}
            </>
          )}
        </div>
      ))}
      <div className="dim" />
      {children}
    </div>
  );
}

// Position of a layer that does not cover the whole stage. The picture scales a little around the
// middle of the stage (see scene.css), so the point it scales from is worked out for this box.
export function layerStyle(box) {
  const style = {};
  if (box) {
    const { x, y, width, height } = box;
    style.inset = 'auto';
    style.left = `${x}%`;
    style.top = `${y}%`;
    style.width = `${width}%`;
    style.height = `${height}%`;
    style.transformOrigin = `${((50 - x) / width) * 100}% ${((50 - y) / height) * 100}%`;
  }
  return style;
}

function LayerContent({ layer }) {
  if (layer.kind === 'clock') {
    // The clock face in the picture is turned a little, so the digits are tilted to match.
    const skew = layer.anim?.skew ? { transform: `skewY(${layer.anim.skew}deg)`, transformOrigin: '0 0' } : undefined;
    return (
      <div className="clock" style={skew}>
        <Clock />
      </div>
    );
  }
  if (layer.tile) {
    const style = { backgroundImage: `url(${layer.image})`, backgroundSize: `${layer.tile}% auto` };
    return <div className="tiled" style={style} />;
  }
  const picture = <img src={layer.image} alt="" draggable={false} />;
  const anim = layer.anim;
  if (!anim?.name) return picture;
  const style = { '--dur': `${anim.duration ?? 6}s`, '--delay': `${anim.delay ?? 0}s` };
  if (anim.pivot) style.transformOrigin = `${anim.pivot.x}% ${anim.pivot.y}%`;
  if (anim.squash) style['--squash'] = anim.squash;
  if (anim.rest !== undefined) style['--rest'] = `${anim.rest}deg`;
  if (anim.distance !== undefined) style['--distance'] = `${anim.distance}%`;
  if (anim.amplitude !== undefined) style['--amp'] = `${anim.amplitude}deg`;
  if (anim.name === 'spin') {
    // The record turns inside a box that is squashed to match the view from above and in front.
    return (
      <div className="anim anim-spin" style={style}>
        <div className="spin">{picture}</div>
      </div>
    );
  }
  return (
    <div className={`anim anim-${anim.name}`} style={style}>
      {picture}
    </div>
  );
}
