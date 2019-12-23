# model-simulator
This is a bird's eye view simulator for [ChinaNite](https://www.youtube.com/watch?v=hqvDFgA9IJc), a theatrical fashion show hosted by the Rutgers Chinese Student Organization. Creating, teaching, and remembering walks are difficult; this simulator makes all three easier.

Checkout this [demo](https://harryxli.com/model_simulator_demo)!

![Example Gif](example.gif)

## Usage
### HTML User Interface
1) Download or clone this project
2) Open up the HTML file
3) Create your own data file
4) To import your data file, you can either
- a) Directly modify HTML to take a JavaScript file by changing the src attribute
```html
<script type="text/javascript" src="CNXIII Reality Examples/JS/1_motions.js"></script>
```

or

- 4b) open the HTML file in your browser and import a JSON file

### JS install
```bash
npm install --save harryli0088/model-simulator
```

```js
const ModelSimulator = require("model-simulator")

const simulator = new ModelSimulator({
  canvas: document.getElementById("canvas"),
  pre_sections: pre_sections,
  pre_comments: pre_comments,
  models: models,
})

simulator.initialize();
```

## How it works
This simulator uses HTML5 canvas to draw each frame of a walk, beat-by-beat. The HTML file loads a JS os JSON file in the same directory (without using a server). It processes the JS data to calculate at each beat:
1) Where each model will be
2) What section of the song it is
3) If there are any comments

Every time the user presses one of the arrow keys to move forward or back, the canvas is compeletely redrawn, first with the T catwalk, then the models, and finally the song section and comments.

## How to use it
To use this simulator, open "walk_simulaor.html" in a browser. If it loads a valid JS file, you can control the movements of each step with your right arrow key to proceed and your left arrow key to go back. In this way, you can step through a song beat-by-beat and see where the models will be at any time.

## How to record a walk
To record a walk, download a tool that can record your screen with audio (for example, Screencastify extension on Chrome). Play the music and manually press the right arrow key to step through the song or auto start the simulator with a provided BPM of the song.

## How to create data files
The HTML file opens JS files which contain the necessary information for each walk.

### Full JS example:
```js
pre_sections = [
  {"measures":2, "counts":8, "text":"Intro"},
  {"measures":8, "counts":8, "text":"Verse 1"},
  {"measures":4, "counts":8, "text":"Pre-Chorus 1"},
  {"measures":8, "counts":8, "text":"Chorus 1"},
  {"measures":2, "counts":8, "text":"Interlude"},
  {"measures":8, "counts":8, "text":"Verse 2"},
  {"measures":4, "counts":8, "text":"Pre-Chorus 2"},
  {"measures":8, "counts":8, "text":"Chorus 2"},
  {"measures":4, "counts":8, "text":"Repeat Chorus"},
  {"measures":7, "counts":8, "text":"Ending"}
];

pre_comments = [
  {"startCount":81, "endCount":112, "text":"Follow this video"},
  {"startCount":113, "endCount":144, "text":"New order for the 2nd grays"},
  {"startCount":145, "endCount":168, "text":"Pivot rotate"},
  {"startCount":281, "endCount":284, "text":"Get ready to stand on 5"},
  {"startCount":285, "endCount":288, "text":"STAND"},
  {"startCount":289, "endCount":352, "text":"Exact positions will vary"}
];

models = [
  {
    "name":"Derrick",
    "start":"middle",
    "pre_moves":[
      {"counts":4, "type":"delay"},
      {"counts":12, "type":"up"},
      {"counts":64, "type":"pose"},
      {"counts":32, "type":"pose"},
      {"counts":7, "type":"down"},
      {"counts":1, "type":"pose"},
      {"counts":24, "type":"pose"},
      {"counts":5, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"Melody W",
    "start":"middle left",
    "pre_moves":[
      {"counts":4, "type":"delay"},
      {"counts":4, "type":"left"},
      {"counts":16, "type":"pose"},
      {"counts":2, "dx":1, "dy":0, "type":""},
      {"counts":6, "type":"pose"},
      {"counts":8, "type":"pose"},
      {"counts":2, "dx":1, "dy":0, "type":""},
      {"counts":6, "type":"pose"},
      {"counts":8, "type":"pose"},
      {"counts":2, "dx":1, "dy":0, "type":""},
      {"counts":6, "type":"pose"},
      {"counts":4, "type":"diag nw"},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"right"},
      {"counts":4, "type":"up"},
      {"counts":8, "type":"up half speed"},
      {"counts":8, "type":"pose"},
      {"counts":16, "type":"down half speed"},
      {"counts":4, "type":"left"},
      {"counts":4, "type":"down"},
      {"counts":4, "type":"right"}
    ],
    "color":"red"
  }
]
```

### pre_sections
Pre sections allow you to break up the song into parts, so that you know which part you are in. Ex Verse 1, Chorus 1, Bridge, etc
```js
{"measures":2, "counts":8, "text":"Intro"}
```
You just have to specify how long each section is.

### pre_comments
Pre comments allow you to write comments at different parts of the song.
```js
{"startCount":33, "endCount":112, "text":"Dance, skip to ~1:20 for walks"}
```
You have to do a little math or guess-and-check to get the right counts :P

### models
You can give each model a name, starting position, color, and "pre_moves"

```js
{
  "name":"Derrick",
  "start":"middle",
  "pre_moves":[
    {"counts":4, "type":"delay"},
    {"counts":12, "type":"up"},
    {"counts":64, "type":"pose"},
    {"counts":32, "type":"pose"},
    {"counts":7, "type":"down"},
    {"counts":1, "type":"pose"},
    {"counts":24, "type":"pose"},
    {"counts":5, "type":"down"}
  ],
  "color":"green"
},
```

#### model.start
For your convenience, there are 5 built-in starting positions: "left", "middle left", "middle", "middle right", and "right". Simply pass any of these values as a string and you'll be good to go.

If you need a custom starting position, you can instead pass in an object with x and y values, for example:
```js
"start":{
  "x":280,
  "y":60
}
```

#### model.pre_moves
A model's pre moves are converted into beat-by-beat positions on the canvas. At minimum you need the specify the number of counts that the model is moving and the type of the move. There are a few built-in move types you can use:

1) up - (negative y) for a set number of beats
2) down - (positive y)
3) left - (negative x)
4) right - (positive x)
5) diag ne - (positive x, negative y)
6) diag nw - (negative x, negative y)
7) diag se - (positive x, positive y)
8) diag sw - (negative x, positive y)

For pre moves 1-8, you can add a "pivot" option to indicate that the model is pivoting while walking. Ex "down pivot"

9) delay - make the model wait before entering the walk
10) pose - stop at the current position and pose
11) pivot - do a three point turn while walking
12) kneel - kneel at the current position

13) custom - for a set number of beats, set a manual change in x and y
```js
{"counts":2, "dx":1, "dy":0, "type":""},
```
Keep in mind that right is positive x, and down is positive y.


## The T
This configuration features the T catwalk. Imagining a 3x3 grid, the T occupies squares (row col):
(1 2)
(2 2)
(3 1)
(3 2)
(3 3)
Each square is four steps wide. Models enter from the bottom middle of the T.
You can change the function "drawT" to draw whatever configuration you like.


## Further application
This lightweight simulator could be used in other applications such as for marching band formations. Feel free to take and adapt this code as you see fit!
MIT License
