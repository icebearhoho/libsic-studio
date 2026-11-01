// Scene: Golden Hour Loft. A bright late-afternoon desk in front of a big window, drawn as many small layers so that
// the curtains can billow (and be drawn shut), the clouds drift, the cat breathe and the disc spin. Floating dust is an effect (see Effects.jsx).
// Clicking the clock switches between day and night (night = lights off: the sun goes out and the night sky layer comes in).
// Pictures: client/public/scenes/golden-loft/. Positions of layers and objects are percentages of the scene. Layers are listed
// from back to front; the layers of placeable objects (the ones with `item`) come last and are drawn where the surface says.
module.exports = {
  slug: 'golden-loft',
  name: 'Golden Hour Loft',
  description: 'A bright loft in the late afternoon: sun streaming through sheer curtains, floating dust, a sleeping cat and a portable CD player on a wooden desk.',
  layers: [
    { name: 'sky', image: '/scenes/golden-loft/l1_sky.webp', depth: 0.05 }, // 0
    { name: 'clouds', image: '/scenes/golden-loft/l2_clouds.webp', depth: 0.08, box: { x: 0.0, y: 7.78, width: 100.0, height: 42.22 }, anim: { name: 'drift', distance: 8, duration: 240 } }, // 1
    { name: 'rooftops', image: '/scenes/golden-loft/l3_roofs.webp', depth: 0.2, box: { x: 0.0, y: 44.96, width: 100.0, height: 21.7 } }, // 2
    { name: 'night sky', image: '/scenes/golden-loft/l3b_night.webp', depth: 0.2, box: { x: 0.0, y: 3.33, width: 70.0, height: 63.33 }, night: true }, // 3
    { name: 'glass sheen', image: '/scenes/golden-loft/l5_glass_sheen.webp', depth: 0.5, box: { x: 6.25, y: 7.33, width: 47.63, height: 52.44 }, blend: 'screen', light: true }, // 4
    { name: 'wall', image: '/scenes/golden-loft/l4_wall.webp', depth: 0.5 }, // 5
    { name: 'window frame', image: '/scenes/golden-loft/l6_frame.webp', depth: 0.5, box: { x: 0.0, y: 3.93, width: 69.67, height: 57.19 } }, // 6
    { name: 'shelves and print', image: '/scenes/golden-loft/c_wall_decor.webp', depth: 0.5, box: { x: 68.75, y: 12.0, width: 20.29, height: 46.44 } }, // 7
    { name: 'pothos shadow', image: '/scenes/golden-loft/pothos_shadow.webp', depth: 0.5, box: { x: 90.25, y: 19.04, width: 9.75, height: 41.56 } }, // 8
    { name: 'pothos pot', image: '/scenes/golden-loft/pothos_pot.webp', depth: 0.5, box: { x: 91.17, y: 0.0, width: 6.42, height: 26.59 } }, // 9
    { name: 'pothos vine 1', image: '/scenes/golden-loft/pothos_vine_1.webp', depth: 0.5, box: { x: 88.92, y: 21.33, width: 3.92, height: 35.11 }, anim: { name: 'sway', amplitude: 2.6, pivot: { x: 136.17, y: -3.16 }, duration: 5.7, delay: -0.9 } }, // 10
    { name: 'pothos vine 2', image: '/scenes/golden-loft/pothos_vine_2.webp', depth: 0.5, box: { x: 93.46, y: 22.0, width: 3.88, height: 36.0 }, anim: { name: 'sway', amplitude: 2.6, pivot: { x: 20.43, y: -4.94 }, duration: 6.4, delay: -1.8 } }, // 11
    { name: 'pothos vine 3', image: '/scenes/golden-loft/pothos_vine_3.webp', depth: 0.5, box: { x: 91.75, y: 22.44, width: 2.88, height: 24.44 }, anim: { name: 'sway', amplitude: 2.6, pivot: { x: 86.96, y: -9.09 }, duration: 7.1, delay: -2.7 } }, // 12
    { name: 'pothos vine 4', image: '/scenes/golden-loft/pothos_vine_4.webp', depth: 0.5, box: { x: 95.46, y: 21.33, width: 3.67, height: 22.89 }, anim: { name: 'sway', amplitude: 2.6, pivot: { x: -32.95, y: -4.85 }, duration: 7.8, delay: -3.6 } }, // 13
    { name: 'left curtain', image: '/scenes/golden-loft/l7_curtain_left.webp', depth: 0.55, box: { x: 0.0, y: 3.93, width: 15.54, height: 69.7 }, curtain: { scale: 2.3, origin: 0 }, anim: { name: 'billow', amplitude: 1.4, pivot: { x: 48.66, y: 1.06 }, duration: 7.5, delay: 0.0 } }, // 14
    { name: 'right curtain', image: '/scenes/golden-loft/l7_curtain_right.webp', depth: 0.55, box: { x: 52.63, y: 3.93, width: 16.04, height: 69.7 }, curtain: { scale: 2.3, origin: 100 }, anim: { name: 'billow', amplitude: 1.4, pivot: { x: 51.82, y: 1.06 }, duration: 5.5, delay: -1.7 } }, // 15
    { name: 'desk', image: '/scenes/golden-loft/c_desk.webp', depth: 0.9 }, // 16
    { name: 'sun on the desk', image: '/scenes/golden-loft/c_sunwash.webp', depth: 0.9, box: { x: 0.0, y: 64.0, width: 69.67, height: 26.52 }, blend: 'screen', light: true }, // 17
    { name: 'window light on the desk', image: '/scenes/golden-loft/c_sunpattern.webp', depth: 0.9, box: { x: 7.92, y: 0.0, width: 92.08, height: 100.0 }, blend: 'screen', light: true }, // 18
    { name: 'light beams', image: '/scenes/golden-loft/l8_beams.webp', depth: 0.6, box: { x: 0.0, y: 2.44, width: 100.0, height: 97.56 }, blend: 'screen', light: true }, // 19
    { name: 'bloom', image: '/scenes/golden-loft/l9_bloom.webp', depth: 0.5, box: { x: 0.0, y: 0.0, width: 69.71, height: 100.0 }, blend: 'screen', light: true }, // 20
    { name: 'vignette', image: '/scenes/golden-loft/l10_grade.webp', depth: 0 }, // 21
    { name: 'film grain', image: '/scenes/golden-loft/l11_grain.webp', depth: 0, tile: 10.67 }, // 22
    { name: 'clock shadow', image: '/scenes/golden-loft/clock_shadow.webp', depth: 0.9, box: { x: 91.21, y: 73.41, width: 8.79, height: 7.93 }, item: 'clock', mirror: false }, // 23
    { name: 'clock', image: '/scenes/golden-loft/clock.webp', depth: 0.9, box: { x: 91.21, y: 65.85, width: 4.83, height: 8.59 }, item: 'clock' }, // 24
    { name: 'plant shadow', image: '/scenes/golden-loft/plant_shadow.webp', depth: 0.9, box: { x: 55.58, y: 69.56, width: 32.75, height: 20.52 }, item: 'plant', mirror: false }, // 25
    { name: 'plant pot', image: '/scenes/golden-loft/plant_pot.webp', depth: 0.9, box: { x: 56.29, y: 57.56, width: 6.79, height: 15.63 }, item: 'plant' }, // 26
    { name: 'plant leaves 1', image: '/scenes/golden-loft/plant_leaves_1.webp', depth: 0.9, box: { x: 52.63, y: 30.59, width: 14.79, height: 33.48 }, anim: { name: 'sway', amplitude: 2.2, pivot: { x: 47.75, y: 98.72 }, duration: 5.0, delay: -0.7 }, item: 'plant' }, // 27
    { name: 'plant leaves 2', image: '/scenes/golden-loft/plant_leaves_2.webp', depth: 0.9, box: { x: 55.88, y: 38.52, width: 11.71, height: 25.56 }, anim: { name: 'sway', amplitude: 2.2, pivot: { x: 32.56, y: 98.32 }, duration: 5.8, delay: -1.4 }, item: 'plant' }, // 28
    { name: 'plant leaves 3', image: '/scenes/golden-loft/plant_leaves_3.webp', depth: 0.9, box: { x: 52.46, y: 45.63, width: 11.17, height: 18.44 }, anim: { name: 'sway', amplitude: 2.2, pivot: { x: 64.74, y: 97.67 }, duration: 6.6, delay: -2.1 }, item: 'plant' }, // 29
    { name: 'cat shadow', image: '/scenes/golden-loft/cat_shadow.webp', depth: 0.9, box: { x: 6.08, y: 80.59, width: 26.13, height: 9.48 }, item: 'cat', mirror: false }, // 30
    { name: 'cushion', image: '/scenes/golden-loft/cushion.webp', depth: 0.9, box: { x: 6.71, y: 74.89, width: 18.29, height: 7.33 }, item: 'cat' }, // 31
    { name: 'cat body', image: '/scenes/golden-loft/cat_body.webp', depth: 0.9, box: { x: 8.0, y: 66.44, width: 15.54, height: 12.74 }, item: 'cat' }, // 32
    { name: 'cat chest', image: '/scenes/golden-loft/cat_chest.webp', depth: 0.9, box: { x: 9.5, y: 66.44, width: 9.38, height: 9.78 }, anim: { name: 'breathe', pivot: { x: 50.0, y: 100.0 }, duration: 4.2 }, item: 'cat' }, // 33
    { name: 'cat tail', image: '/scenes/golden-loft/cat_tail.webp', depth: 0.9, box: { x: 8.71, y: 76.22, width: 8.83, height: 5.19 }, anim: { name: 'flick', amplitude: 5, pivot: { x: 7.55, y: 8.57 }, duration: 10 }, item: 'cat' }, // 34
    { name: 'cdplayer shadow', image: '/scenes/golden-loft/cdplayer_shadow.webp', depth: 0.9, box: { x: 63.0, y: 81.33, width: 30.75, height: 8.74 }, item: 'cdplayer', mirror: false }, // 35
    { name: 'cdplayer reflection', image: '/scenes/golden-loft/cdplayer_reflection.webp', depth: 0.9, box: { x: 63.54, y: 83.11, width: 19.79, height: 4.15 }, item: 'cdplayer' }, // 36
    { name: 'cdplayer', image: '/scenes/golden-loft/cdplayer.webp', depth: 0.9, box: { x: 63.67, y: 64.52, width: 19.5, height: 19.04 }, item: 'cdplayer' }, // 37
    { name: 'cdplayer disc flat', image: '/scenes/golden-loft/cdplayer_disc_flat.webp', depth: 0.9, box: { x: 67.44, y: 60.08, width: 12.0, height: 21.33 }, anim: { name: 'spin', squash: 0.45, duration: 4 }, item: 'cdplayer' }, // 38
    { name: 'cdplayer sheen', image: '/scenes/golden-loft/cdplayer_sheen.webp', depth: 0.9, box: { x: 67.71, y: 66.37, width: 11.38, height: 8.74 }, blend: 'screen', item: 'cdplayer' }, // 39
    { name: 'cdplayer lid', image: '/scenes/golden-loft/cdplayer_lid.webp', depth: 0.9, box: { x: 66.21, y: 64.3, width: 14.46, height: 12.59 }, item: 'cdplayer' }, // 40
    { name: 'cdplayer glow', image: '/scenes/golden-loft/cdplayer_glow.webp', depth: 0.9, box: { x: 74.92, y: 74.67, width: 10.0, height: 10.3 }, blend: 'screen', anim: { name: 'pulse', duration: 3.4 }, item: 'cdplayer' }, // 41
    { name: 'cd cases shadow', image: '/scenes/golden-loft/cd_cases_shadow.webp', depth: 0.9, box: { x: 81.96, y: 76.37, width: 18.04, height: 13.7 }, item: 'cd_cases', mirror: false }, // 42
    { name: 'cd cases', image: '/scenes/golden-loft/cd_cases.webp', depth: 0.9, box: { x: 82.96, y: 69.56, width: 12.33, height: 16.07 }, item: 'cd_cases' }, // 43
    { name: 'mug shadow', image: '/scenes/golden-loft/mug_shadow.webp', depth: 0.9, box: { x: 43.25, y: 84.0, width: 14.21, height: 6.07 }, item: 'mug', mirror: false }, // 44
    { name: 'mug', image: '/scenes/golden-loft/mug.webp', depth: 0.9, box: { x: 44.04, y: 77.78, width: 9.17, height: 10.89 }, item: 'mug' }, // 45
    { name: 'steam', image: '/scenes/golden-loft/steam.webp', depth: 0.9, box: { x: 46.13, y: 65.04, width: 4.71, height: 13.7 }, anim: { name: 'steam', duration: 5 }, item: 'mug' }, // 46
    { name: 'notebook shadow', image: '/scenes/golden-loft/notebook_shadow.webp', depth: 0.9, box: { x: 23.75, y: 72.96, width: 20.42, height: 13.78 }, item: 'notebook', mirror: false }, // 47
    { name: 'notebook', image: '/scenes/golden-loft/notebook.webp', depth: 0.9, box: { x: 24.13, y: 73.85, width: 18.17, height: 11.78 }, item: 'notebook' }, // 48
    { name: 'candle shadow', image: '/scenes/golden-loft/candle_shadow.webp', depth: 0.9, box: { x: 49.25, y: 75.26, width: 10.83, height: 7.56 }, item: 'candle', mirror: false }, // 49
    { name: 'candle', image: '/scenes/golden-loft/candle.webp', depth: 0.9, box: { x: 50.42, y: 69.11, width: 3.54, height: 8.59 }, item: 'candle' }, // 50
    { name: 'candle flame', image: '/scenes/golden-loft/candle_flame.webp', depth: 0.9, box: { x: 47.38, y: 61.11, width: 10.46, height: 18.3 }, blend: 'screen', anim: { name: 'pulse', duration: 1.7 }, item: 'candle' }, // 51
    { name: 'photo shadow', image: '/scenes/golden-loft/photo_shadow.webp', depth: 0.9, box: { x: 44.33, y: 73.93, width: 14.13, height: 10.15 }, item: 'photo', mirror: false }, // 52
    { name: 'photo', image: '/scenes/golden-loft/photo.webp', depth: 0.9, box: { x: 44.67, y: 64.0, width: 5.04, height: 11.11 }, item: 'photo' }, // 53
    { name: 'cactus shadow', image: '/scenes/golden-loft/cactus_shadow.webp', depth: 0.9, box: { x: 34.96, y: 75.48, width: 10.17, height: 7.85 }, item: 'cactus', mirror: false }, // 54
    { name: 'cactus', image: '/scenes/golden-loft/cactus.webp', depth: 0.9, box: { x: 35.17, y: 67.19, width: 3.42, height: 9.48 }, item: 'cactus' }, // 55
    { name: 'books shadow', image: '/scenes/golden-loft/books_shadow.webp', depth: 0.9, box: { x: 53.58, y: 77.19, width: 16.5, height: 8.52 }, item: 'books', mirror: false }, // 56
    { name: 'books', image: '/scenes/golden-loft/books.webp', depth: 0.9, box: { x: 53.88, y: 68.52, width: 7.83, height: 10.07 }, item: 'books' }, // 57
    { name: 'bud vase shadow', image: '/scenes/golden-loft/bud_vase_shadow.webp', depth: 0.9, box: { x: 40.46, y: 74.74, width: 16.67, height: 13.41 }, item: 'bud_vase', mirror: false }, // 58
    { name: 'bud vase', image: '/scenes/golden-loft/bud_vase.webp', depth: 0.9, box: { x: 40.67, y: 68.74, width: 2.17, height: 7.41 }, item: 'bud_vase' }, // 59
    { name: 'bud vase flowers', image: '/scenes/golden-loft/bud_vase_flowers.webp', depth: 0.9, box: { x: 39.75, y: 56.52, width: 4.0, height: 12.74 }, anim: { name: 'sway', amplitude: 1.8, pivot: { x: 50.0, y: 98.84 }, duration: 5.5, delay: 0.0 }, item: 'bud_vase' }, // 60
  ],
  objects: [
    { key: 'window', label: 'Window', layer: 6, x: 8.97, y: 5.96, width: 81.64, height: 91.71, action: { type: 'toggleEffect', effect: 'dust' } },
    { key: 'curtains', label: 'Curtains', layer: 15, x: 0, y: 0, width: 100, height: 100, action: { type: 'toggleCurtains' } },
    { key: 'curtains-left', label: 'Curtains', layer: 14, x: 0, y: 0, width: 100, height: 100, action: { type: 'toggleCurtains' } },
    { key: 'clock', label: 'Clock: day or night', layer: 24, x: 0, y: 0, width: 100, height: 100, action: { type: 'toggleLight' } },
    { key: 'cdplayer', label: 'CD player', layer: 37, x: 0, y: 0, width: 100, height: 100, action: { type: 'nextTrack' } },
  ],
  // What a visitor may put in the room. The pictures of an object are the layers with its key in `item`.
  // home: the bottom centre of the object where it stands in the picture. bounds: the area it covers there.
  catalog: [
    { key: 'plant', label: 'Rubber plant', surface: 'desk', home: { x: 59.69, y: 72.44 }, bounds: { x: 52.46, y: 30.67, width: 15.13, height: 42.52 }, thumb: '/scenes/golden-loft/plant_thumb.webp', flippable: true, unique: false, inDefault: true, scale: { min: 0.6, max: 1.8 } },
    { key: 'clock', label: 'Clock', surface: 'desk', home: { x: 93.62, y: 74.44 }, bounds: { x: 91.21, y: 65.84, width: 4.83, height: 8.59 }, thumb: '/scenes/golden-loft/clock_thumb.webp', flippable: false, unique: false, inDefault: true, scale: { min: 0.6, max: 1.6 } },
    { key: 'mug', label: 'Tea cup', surface: 'desk', home: { x: 48.44, y: 86.22 }, bounds: { x: 44.04, y: 65.33, width: 9.12, height: 23.34 }, thumb: '/scenes/golden-loft/mug_thumb.webp', flippable: true, unique: false, inDefault: true, scale: { min: 0.6, max: 2.0 } },
    { key: 'cdplayer', label: 'CD player', surface: 'desk', home: { x: 73.44, y: 83.33 }, bounds: { x: 63.62, y: 64.3, width: 20.67, height: 22.66 }, thumb: '/scenes/golden-loft/cdplayer_thumb.webp', flippable: false, unique: true, inDefault: true, scale: { min: 0.7, max: 1.4 } },
    { key: 'notebook', label: 'Notebook', surface: 'desk', home: { x: 33.25, y: 85.73 }, bounds: { x: 24.17, y: 73.84, width: 18.12, height: 11.78 }, thumb: '/scenes/golden-loft/notebook_thumb.webp', flippable: false, unique: false, inDefault: true, scale: { min: 0.6, max: 2.0 } },
    { key: 'cd_cases', label: 'CD cases', surface: 'desk', home: { x: 89.5, y: 84.22 }, bounds: { x: 82.96, y: 69.56, width: 12.33, height: 16.07 }, thumb: '/scenes/golden-loft/cd_cases_thumb.webp', flippable: true, unique: false, inDefault: true, scale: { min: 0.6, max: 2.0 } },
    { key: 'cat', label: 'Sleeping cat', surface: 'desk', home: { x: 15.75, y: 82.0 }, bounds: { x: 6.71, y: 66.59, width: 18.29, height: 15.56 }, thumb: '/scenes/golden-loft/cat_thumb.webp', flippable: true, unique: false, inDefault: true, scale: { min: 0.6, max: 1.6 } },
    { key: 'candle', label: 'Candle', surface: 'desk', home: { x: 52.19, y: 77.33 }, bounds: { x: 50.42, y: 69.11, width: 3.54, height: 8.59 }, thumb: '/scenes/golden-loft/candle_thumb.webp', flippable: true, unique: false, inDefault: false, scale: { min: 0.6, max: 2.0 } },
    { key: 'photo', label: 'Framed photo', surface: 'desk', home: { x: 47.19, y: 75.33 }, bounds: { x: 44.67, y: 64.0, width: 5.04, height: 11.11 }, thumb: '/scenes/golden-loft/photo_thumb.webp', flippable: false, unique: false, inDefault: false, scale: { min: 0.6, max: 2.0 } },
    { key: 'cactus', label: 'Cactus', surface: 'desk', home: { x: 36.88, y: 76.89 }, bounds: { x: 35.17, y: 67.19, width: 3.42, height: 9.48 }, thumb: '/scenes/golden-loft/cactus_thumb.webp', flippable: true, unique: false, inDefault: false, scale: { min: 0.6, max: 2.0 } },
    { key: 'books', label: 'Books', surface: 'desk', home: { x: 57.81, y: 78.67 }, bounds: { x: 53.87, y: 68.52, width: 7.83, height: 10.07 }, thumb: '/scenes/golden-loft/books_thumb.webp', flippable: true, unique: false, inDefault: false, scale: { min: 0.6, max: 2.0 } },
    { key: 'bud_vase', label: 'Bud vase', surface: 'desk', home: { x: 41.75, y: 76.22 }, bounds: { x: 39.75, y: 56.52, width: 4.0, height: 19.63 }, thumb: '/scenes/golden-loft/bud_vase_thumb.webp', flippable: true, unique: false, inDefault: false, scale: { min: 0.6, max: 2.0 } },
  ],
  // desk: things further down look closer (bigger, in front). drawAt: the layer its objects are drawn in front of (the light beams).
  surfaces: [
    { key: 'desk', area: { x: 2, y: 64, width: 96, height: 27 }, drawAt: 19, perspective: { farY: 64, nearY: 90, farScale: 0.65, nearScale: 1.2 } },
  ],
  effects: ['dust'],
  defaultEffect: 'dust', // dust floats in the sunbeams from the start; clicking the window switches it off
  effectLayer: 19, // the light beams, so the dust drifts in front of the objects and inside the beams
};
