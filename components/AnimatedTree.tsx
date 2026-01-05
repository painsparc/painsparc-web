"use client";

import Lottie from "lottie-react";

// This is the animation data for a stylized tree with birds
const treeAnimationData = {
  "v": "5.7.4",
  "fr": 60,
  "ip": 0,
  "op": 180,
  "w": 800,
  "h": 800,
  "nm": "Tree and Birds",
  "ddd": 0,
  "assets": [],
  "layers": [
    {
      "ddd": 0,
      "ind": 1,
      "ty": 4,
      "nm": "Bird 2",
      "sr": 1,
      "ks": {
        "o": { "a": 0, "k": 100, "ix": 11 },
        "r": { "a": 0, "k": 0, "ix": 10 },
        "p": {
          "a": 1,
          "k": [
            { "i": { "x": 0.833, "y": 0.833 }, "o": { "x": 0.167, "y": 0.167 }, "t": 0, "s": [680, 350, 0], "to": [-100, 50, 0], "ti": [100, -50, 0] },
            { "t": 180, "s": [120, 450, 0] }
          ],
          "ix": 2
        },
        "a": { "a": 0, "k": [0, 0, 0], "ix": 1 },
        "s": { "a": 0, "k": [40, 40, 100], "ix": 6 }
      },
      "ao": 0,
      "shapes": [
        {
          "ty": "gr",
          "it": [
            {
              "ty": "sh",
              "ks": {
                "a": 1,
                "k": [
                  { "i": { "x": 0.667, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 0, "s": [{ "i": [[0, 0], [10, 5], [0, 0]], "o": [[0, 0], [-10, 5], [0, 0]], "v": [[-20, 0], [0, -10], [20, 0]], "c": false }] },
                  { "i": { "x": 0.667, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 15, "s": [{ "i": [[0, 0], [10, -2], [0, 0]], "o": [[0, 0], [-10, -2], [0, 0]], "v": [[-20, 0], [0, 10], [20, 0]], "c": false }] },
                  { "t": 30, "s": [{ "i": [[0, 0], [10, 5], [0, 0]], "o": [[0, 0], [-10, 5], [0, 0]], "v": [[-20, 0], [0, -10], [20, 0]], "c": false }] }
                ],
                "ix": 2
              },
              "nm": "Path 1",
              "mn": "ADBE Vector Shape - Group",
              "hd": false
            },
            { "ty": "st", "c": { "a": 0, "k": [0.4, 0.4, 0.4, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 4, "ix": 5 }, "lc": 2, "lj": 2, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }
          ],
          "nm": "Shape 1",
          "np": 2,
          "cix": 2,
          "ix": 1,
          "mn": "ADBE Vector Group",
          "hd": false
        }
      ],
      "ip": 0,
      "op": 180,
      "st": 0,
      "bm": 0
    },
    {
      "ddd": 0,
      "ind": 2,
      "ty": 4,
      "nm": "Bird 1",
      "sr": 1,
      "ks": {
        "o": { "a": 0, "k": 100, "ix": 11 },
        "r": { "a": 0, "k": 15, "ix": 10 },
        "p": {
          "a": 1,
          "k": [
            { "i": { "x": 0.833, "y": 0.833 }, "o": { "x": 0.167, "y": 0.167 }, "t": 0, "s": [100, 200, 0], "to": [150, -20, 0], "ti": [-150, 20, 0] },
            { "t": 180, "s": [700, 150, 0] }
          ],
          "ix": 2
        },
        "a": { "a": 0, "k": [0, 0, 0], "ix": 1 },
        "s": { "a": 0, "k": [50, 50, 100], "ix": 6 }
      },
      "ao": 0,
      "shapes": [
        {
          "ty": "gr",
          "it": [
            {
              "ty": "sh",
              "ks": {
                "a": 1,
                "k": [
                  { "i": { "x": 0.667, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 0, "s": [{ "i": [[0, 0], [10, 5], [0, 0]], "o": [[0, 0], [-10, 5], [0, 0]], "v": [[-20, 0], [0, -10], [20, 0]], "c": false }] },
                  { "i": { "x": 0.667, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 10, "s": [{ "i": [[0, 0], [10, -2], [0, 0]], "o": [[0, 0], [-10, -2], [0, 0]], "v": [[-20, 0], [0, 10], [20, 0]], "c": false }] },
                  { "t": 20, "s": [{ "i": [[0, 0], [10, 5], [0, 0]], "o": [[0, 0], [-10, 5], [0, 0]], "v": [[-20, 0], [0, -10], [20, 0]], "c": false }] }
                ],
                "ix": 2
              },
              "nm": "Path 1",
              "mn": "ADBE Vector Shape - Group",
              "hd": false
            },
            { "ty": "st", "c": { "a": 0, "k": [0.2, 0.2, 0.2, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 4, "ix": 5 }, "lc": 2, "lj": 2, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }
          ],
          "nm": "Shape 1",
          "np": 2,
          "cix": 2,
          "ix": 1,
          "mn": "ADBE Vector Group",
          "hd": false
        }
      ],
      "ip": 0,
      "op": 180,
      "st": 0,
      "bm": 0
    },
    {
      "ddd": 0,
      "ind": 3,
      "ty": 4,
      "nm": "Tree Trunk",
      "sr": 1,
      "ks": {
        "o": { "a": 0, "k": 100, "ix": 11 },
        "r": { "a": 0, "k": 0, "ix": 10 },
        "p": { "a": 0, "k": [400, 600, 0], "ix": 2 },
        "a": { "a": 0, "k": [0, 0, 0], "ix": 1 },
        "s": { "a": 0, "k": [100, 100, 100], "ix": 6 }
      },
      "ao": 0,
      "shapes": [
        {
          "ty": "gr",
          "it": [
            { "ty": "rc", "d": 1, "s": { "a": 0, "k": [40, 400], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 4 }, "nm": "Rect Path 1", "mn": "ADBE Vector Shape - Rect", "hd": false },
            { "ty": "fl", "c": { "a": 0, "k": [0.4, 0.26, 0.13, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }
          ],
          "nm": "Rectangle 1",
          "np": 2,
          "cix": 2,
          "ix": 1,
          "mn": "ADBE Vector Group",
          "hd": false
        }
      ],
      "ip": 0,
      "op": 180,
      "st": 0,
      "bm": 0
    },
    {
      "ddd": 0,
      "ind": 4,
      "ty": 4,
      "nm": "Tree Leaves circle",
      "sr": 1,
      "ks": {
        "o": { "a": 0, "k": 100, "ix": 11 },
        "r": { "a": 0, "k": 0, "ix": 10 },
        "p": { "a": 0, "k": [400, 350, 0], "ix": 2 },
        "a": { "a": 0, "k": [0, 0, 0], "ix": 1 },
        "s": { "a": 1, "k": [{ "i": { "x": [0.833, 0.833, 0.833], "y": [0.833, 0.833, 0.833] }, "o": { "x": [0.167, 0.167, 0.167], "y": [0.167, 0.167, 0.167] }, "t": 0, "s": [100, 100, 100] }, { "i": { "x": [0.833, 0.833, 0.833], "y": [0.833, 0.833, 0.833] }, "o": { "x": [0.167, 0.167, 0.167], "y": [0.167, 0.167, 0.167] }, "t": 90, "s": [105, 105, 100] }, { "t": 180, "s": [100, 100, 100] }], "ix": 6 }
      },
      "ao": 0,
      "shapes": [
        {
          "ty": "gr",
          "it": [
            { "ty": "el", "s": { "a": 0, "k": [300, 300], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "nm": "Ellipse Path 1", "mn": "ADBE Vector Shape - Ellipse", "hd": false },
            { "ty": "fl", "c": { "a": 0, "k": [0.2, 0.6, 0.2, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }
          ],
          "nm": "Ellipse 1",
          "np": 2,
          "cix": 2,
          "ix": 1,
          "mn": "ADBE Vector Group",
          "hd": false
        }
      ],
      "ip": 0,
      "op": 180,
      "st": 0,
      "bm": 0
    },
    {
      "ddd": 0,
      "ind": 5,
      "ty": 4,
      "nm": "Tree Leaves circle 2",
      "sr": 1,
      "ks": {
        "o": { "a": 0, "k": 80, "ix": 11 },
        "r": { "a": 0, "k": 0, "ix": 10 },
        "p": { "a": 0, "k": [320, 420, 0], "ix": 2 },
        "a": { "a": 0, "k": [0, 0, 0], "ix": 1 },
        "s": { "a": 1, "k": [{ "i": { "x": [0.833, 0.833, 0.833], "y": [0.833, 0.833, 0.833] }, "o": { "x": [0.167, 0.167, 0.167], "y": [0.167, 0.167, 0.167] }, "t": 0, "s": [100, 100, 100] }, { "i": { "x": [0.833, 0.833, 0.833], "y": [0.833, 0.833, 0.833] }, "o": { "x": [0.167, 0.167, 0.167], "y": [0.167, 0.167, 0.167] }, "t": 70, "s": [108, 108, 100] }, { "t": 140, "s": [100, 100, 100] }], "ix": 6 }
      },
      "ao": 0,
      "shapes": [
        {
          "ty": "gr",
          "it": [
            { "ty": "el", "s": { "a": 0, "k": [200, 200], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "nm": "Ellipse Path 1", "mn": "ADBE Vector Shape - Ellipse", "hd": false },
            { "ty": "fl", "c": { "a": 0, "k": [0.25, 0.65, 0.25, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }
          ],
          "nm": "Ellipse 1",
          "np": 2,
          "cix": 2,
          "ix": 1,
          "mn": "ADBE Vector Group",
          "hd": false
        }
      ],
      "ip": 0,
      "op": 180,
      "st": 0,
      "bm": 0
    },
    {
      "ddd": 0,
      "ind": 6,
      "ty": 4,
      "nm": "Tree Leaves circle 3",
      "sr": 1,
      "ks": {
        "o": { "a": 0, "k": 80, "ix": 11 },
        "r": { "a": 0, "k": 0, "ix": 10 },
        "p": { "a": 0, "k": [480, 420, 0], "ix": 2 },
        "a": { "a": 0, "k": [0, 0, 0], "ix": 1 },
        "s": { "a": 1, "k": [{ "i": { "x": [0.833, 0.833, 0.833], "y": [0.833, 0.833, 0.833] }, "o": { "x": [0.167, 0.167, 0.167], "y": [0.167, 0.167, 0.167] }, "t": 40, "s": [100, 100, 100] }, { "i": { "x": [0.833, 0.833, 0.833], "y": [0.833, 0.833, 0.833] }, "o": { "x": [0.167, 0.167, 0.167], "y": [0.167, 0.167, 0.167] }, "t": 110, "s": [108, 108, 100] }, { "t": 180, "s": [100, 100, 100] }], "ix": 6 }
      },
      "ao": 0,
      "shapes": [
        {
          "ty": "gr",
          "it": [
            { "ty": "el", "s": { "a": 0, "k": [200, 200], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "nm": "Ellipse Path 1", "mn": "ADBE Vector Shape - Ellipse", "hd": false },
            { "ty": "fl", "c": { "a": 0, "k": [0.25, 0.65, 0.25, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }
          ],
          "nm": "Ellipse 1",
          "np": 2,
          "cix": 2,
          "ix": 1,
          "mn": "ADBE Vector Group",
          "hd": false
        }
      ],
      "ip": 0,
      "op": 180,
      "st": 0,
      "bm": 0
    }
  ]
};

export default function AnimatedTree() {
  return (
    <div className="w-full h-full flex items-center justify-center pointer-events-none opacity-80 dark:opacity-70 mix-blend-multiply dark:mix-blend-normal">
      <Lottie 
        animationData={treeAnimationData} 
        loop={true} 
        autoplay={true}
        style={{ width: '100%', height: '100%', maxWidth: '600px', maxHeight: '600px' }}
      />
    </div>
  );
}