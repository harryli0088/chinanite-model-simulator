video_src="https://www.youtube.com/embed/n_zgqlUutvM";

pre_sections = [
  {"measures":4, "counts":8, "text":"Intro"},
  {"measures":6, "counts":8, "text":"Verse 1"},
  {"measures":6, "counts":8, "text":"Chorus 1"},
  {"measures":6, "counts":8, "text":"Verse 2"},
  {"measures":6, "counts":8, "text":"Chorus 2"},
  {"measures":6, "counts":8, "text":"Bridge"},
  {"measures":6, "counts":8, "text":"Chorus 3"}
];

pre_comments = [
  {"startCount":9, "endCount":32, "text":"Blue models interact! Positions don't matter"},
  {"startCount":65, "endCount":68, "text":"Leave your luggage"},
  {"startCount":75, "endCount":78, "text":"Pick up luggage"},
  {"startCount":93, "endCount":108, "text":"Groups 1 and 2 sit down"},
  {"startCount":117, "endCount":120, "text":"Groups 1 and 2 stand back up"},
  {"startCount":137, "endCount":168, "text":"Blue models ignore each other"},
  {"startCount":193, "endCount":212, "text":"Groups 1 and 2 face inwards, looking at the other model"},
  {"startCount":241, "endCount":256, "text":"Make quarter circles"}
];

models = [
  {
    "name":"Elizabeth",
    "start":"left",
    "pre_moves":[
      {"counts":8, "type":"delay"},
      {"counts":4, "dx":-2, "dy":-2, "type":""},
      {"counts":60, "type":"pose"},
      {"counts":1, "type":"up"},
      {"counts":3, "type":"pose"},
      {"counts":4, "dx":3, "dy":0, "type":""},
      {"counts":4, "type":"up"},
      {"counts":2, "type":"diag ne"},
      {"counts":2, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":4, "dx":2, "dy":-1, "type":""},
      {"counts":20, "type":"pose"},
      {"counts":4, "dx":-1, "dy":1, "type":""},
      {"counts":11, "type":"down"}
    ],
    "color":"blue"
  },
  {
    "name":"Christine",
    "start":"left",
    "pre_moves":[
      {"counts":16, "type":"delay"},
      {"counts":4, "dx":-3, "dy":0, "type":""},
      {"counts":52, "type":"pose"},
      {"counts":1, "type":"up"},
      {"counts":3, "type":"pose"},
      {"counts":4, "dx":1, "dy":-2, "type":""},
      {"counts":8, "type":"pose"},
      {"counts":4, "dx":3, "dy":0, "type":""},
      {"counts":4, "type":"up"},
      {"counts":2, "type":"diag ne"},
      {"counts":2, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":4, "dx":2, "dy":1, "type":""},
      {"counts":8, "type":"pose"},
      {"counts":4, "dx":-1, "dy":0, "type":""},
      {"counts":11, "type":"down"}
    ],
    "color":"blue"
  },
  {
    "name":"Sam",
    "start":"left",
    "pre_moves":[
      {"counts":24, "type":"delay"},
      {"counts":4, "dx":-1, "dy":0, "type":""},
      {"counts":44, "type":"pose"},
      {"counts":1, "type":"up"},
      {"counts":3, "type":"pose"},
      {"counts":4, "dx":-2, "dy":0, "type":""},
      {"counts":8, "type":"pose"},
      {"counts":4, "dx":1, "dy":-2, "type":""},
      {"counts":8, "type":"pose"},
      {"counts":4, "dx":3, "dy":0, "type":""},
      {"counts":4, "type":"up"},
      {"counts":2, "type":"diag ne"},
      {"counts":2, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":11, "type":"down"}
    ],
    "color":"blue"
  },
  {
    "name":"Jeremy R",
    "start":"right",
    "pre_moves":[
      {"counts":8, "type":"delay"},
      {"counts":4, "dx":2, "dy":-2, "type":""},
      {"counts":60, "type":"pose"},
      {"counts":1, "type":"up"},
      {"counts":3, "type":"pose"},
      {"counts":4, "dx":-3, "dy":0, "type":""},
      {"counts":4, "type":"up"},
      {"counts":2, "type":"diag nw"},
      {"counts":2, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":4, "dx":-2, "dy":-1, "type":""},
      {"counts":20, "type":"pose"},
      {"counts":4, "dx":1, "dy":1, "type":""},
      {"counts":11, "type":"down"}
    ],
    "color":"blue"
  },
  {
    "name":"Nick P",
    "start":"right",
    "pre_moves":[
      {"counts":16, "type":"delay"},
      {"counts":4, "dx":3, "dy":0, "type":""},
      {"counts":52, "type":"pose"},
      {"counts":1, "type":"up"},
      {"counts":3, "type":"pose"},
      {"counts":4, "dx":-1, "dy":-2, "type":""},
      {"counts":8, "type":"pose"},
      {"counts":4, "dx":-3, "dy":0, "type":""},
      {"counts":4, "type":"up"},
      {"counts":2, "type":"diag nw"},
      {"counts":2, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":4, "dx":-2, "dy":1, "type":""},
      {"counts":8, "type":"pose"},
      {"counts":4, "dx":1, "dy":0, "type":""},
      {"counts":11, "type":"down"}
    ],
    "color":"blue"
  },
  {
    "name":"Michelle F",
    "start":"right",
    "pre_moves":[
      {"counts":24, "type":"delay"},
      {"counts":4, "dx":1, "dy":0, "type":""},
      {"counts":44, "type":"pose"},
      {"counts":1, "type":"up"},
      {"counts":3, "type":"pose"},
      {"counts":4, "dx":2, "dy":0, "type":""},
      {"counts":8, "type":"pose"},
      {"counts":4, "dx":-1, "dy":-2, "type":""},
      {"counts":8, "type":"pose"},
      {"counts":4, "dx":-3, "dy":0, "type":""},
      {"counts":4, "type":"up"},
      {"counts":2, "type":"diag nw"},
      {"counts":2, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":11, "type":"down"}
    ],
    "color":"blue"
  },
  {
    "name":"John",
    "start":"middle",
    "pre_moves":[
      {"counts":76, "type":"delay"},
      {"counts":12, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":4, "dx":-1, "dy":-1, "type":""},
      {"counts":20, "type":"pose"},
      {"counts":4, "dx":-1, "dy":1, "type":""},
      {"counts":11, "type":"down"}
    ],
    "color":"purple"
  },
  {
    "name":"Eurie",
    "start":"middle",
    "pre_moves":[
      {"counts":88, "type":"delay"},
      {"counts":12, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":4, "dx":1, "dy":-1, "type":""},
      {"counts":8, "type":"pose"},
      {"counts":4, "dx":1, "dy":1, "type":""},
      {"counts":11, "type":"down"}
    ],
    "color":"purple"
  },
  {
    "name":"Alvin",
    "start":"middle",
    "pre_moves":[
      {"counts":100, "type":"delay"},
      {"counts":12, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":12, "type":"down"}
    ],
    "color":"purple"
  },
  {
    "name":"Cynthia",
    "start":"left",
    "pre_moves":[
      {"counts":32, "type":"delay"},
      {"counts":8, "dx":8, "dy":-4, "type":""},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"left"},
      {"counts":8, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"down"},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"down"},
      {"counts":4, "type":"down pivot"}
    ],
    "color":"orange"
  },
  {
    "name":"June (S)",
    "start":"right",
    "pre_moves":[
      {"counts":32, "type":"delay"},
      {"counts":8, "dx":-7, "dy":-4, "type":""},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"right"},
      {"counts":8, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"down"},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"down"},
      {"counts":4, "type":"down pivot"}
    ],
    "color":"orange"
  },
  {
    "name":"Kevin",
    "start":"left",
    "pre_moves":[
      {"counts":32, "type":"delay"},
      {"counts":24, "type":"delay"},
      {"counts":8, "dx":7, "dy":-4, "type":""},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"left"},
      {"counts":8, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":1, "type":"diag se"},
      {"counts":7, "type":"down"},
      {"counts":4, "type":"down pivot"}
    ],
    "color":"green"
  },
  {
    "name":"Dom",
    "start":"right",
    "pre_moves":[
      {"counts":32, "type":"delay"},
      {"counts":24, "type":"delay"},
      {"counts":8, "dx":-8, "dy":-4, "type":""},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"right"},
      {"counts":1, "type":"diag ne"},
      {"counts":7, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":1, "type":"diag sw"},
      {"counts":7, "type":"down"},
      {"counts":4, "type":"down pivot"}
    ],
    "color":"green"
  },
  {
    "name":"Briana",
    "start":"middle left",
    "pre_moves":[
      {"counts":32, "type":"delay"},
      {"counts":96, "type":"delay"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"left"},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"right"},
      {"counts":8, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"down"},
      {"counts":4, "type":"down pivot"},
      {"counts":4, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"Michael",
    "start":"right",
    "pre_moves":[
      {"counts":32, "type":"delay"},
      {"counts":96, "type":"delay"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"right"},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"left"},
      {"counts":8, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"down"},
      {"counts":4, "type":"down pivot"},
      {"counts":4, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"Patrick",
    "start":"middle right",
    "pre_moves":[
      {"counts":32, "type":"delay"},
      {"counts":96, "type":"delay"},
      {"counts":24, "type":"delay"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"right"},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"left"},
      {"counts":8, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":1, "type":"diag se"},
      {"counts":3, "type":"down"},
      {"counts":4, "type":"down pivot"},
      {"counts":4, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"Jenett",
    "start":"left",
    "pre_moves":[
      {"counts":32, "type":"delay"},
      {"counts":96, "type":"delay"},
      {"counts":24, "type":"delay"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"left"},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"right"},
      {"counts":1, "type":"diag ne"},
      {"counts":7, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":1, "type":"diag sw"},
      {"counts":3, "type":"down"},
      {"counts":4, "type":"down pivot"},
      {"counts":4, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"Eric",
    "start":"left",
    "pre_moves":[
      {"counts":136, "type":"delay"},
      {"counts":4, "dx":-2, "dy":-2, "type":""},
      {"counts":28, "type":"pose"},
      {"counts":1, "type":"up"},
      {"counts":3, "type":"pose"},
      {"counts":4, "dx":3, "dy":0, "type":""},
      {"counts":4, "type":"up"},
      {"counts":2, "type":"diag ne"},
      {"counts":2, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":4, "dx":1, "dy":0, "type":""},
      {"counts":20, "type":"pose"},
      {"counts":11, "type":"down"}
    ],
    "color":"blue"
  },
  {
    "name":"Maggie",
    "start":"left",
    "pre_moves":[
      {"counts":144, "type":"delay"},
      {"counts":4, "dx":-3, "dy":0, "type":""},
      {"counts":20, "type":"pose"},
      {"counts":1, "type":"up"},
      {"counts":3, "type":"pose"},
      {"counts":4, "dx":1, "dy":-2, "type":""},
      {"counts":8, "type":"pose"},
      {"counts":4, "dx":3, "dy":0, "type":""},
      {"counts":4, "type":"up"},
      {"counts":2, "type":"diag ne"},
      {"counts":2, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":4, "dx":1, "dy":1, "type":""},
      {"counts":8, "type":"pose"},
      {"counts":10, "type":"down"}
    ],
    "color":"blue"
  },
  {
    "name":"Julia",
    "start":"left",
    "pre_moves":[
      {"counts":152, "type":"delay"},
      {"counts":4, "dx":-1, "dy":0, "type":""},
      {"counts":12, "type":"pose"},
      {"counts":1, "type":"up"},
      {"counts":3, "type":"pose"},
      {"counts":4, "dx":-2, "dy":0, "type":""},
      {"counts":8, "type":"pose"},
      {"counts":4, "dx":1, "dy":-2, "type":""},
      {"counts":8, "type":"pose"},
      {"counts":4, "dx":3, "dy":0, "type":""},
      {"counts":4, "type":"up"},
      {"counts":2, "type":"diag ne"},
      {"counts":2, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":1, "dx":-1, "dy":2, "type":""},
      {"counts":10, "type":"down"}
    ],
    "color":"blue"
  },
  {
    "name":"Jeremy G",
    "start":"right",
    "pre_moves":[
      {"counts":136, "type":"delay"},
      {"counts":4, "dx":2, "dy":-2, "type":""},
      {"counts":28, "type":"pose"},
      {"counts":1, "type":"up"},
      {"counts":3, "type":"pose"},
      {"counts":4, "dx":-3, "dy":0, "type":""},
      {"counts":4, "type":"up"},
      {"counts":2, "type":"diag nw"},
      {"counts":2, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":4, "dx":-1, "dy":0, "type":""},
      {"counts":20, "type":"pose"},
      {"counts":11, "type":"down"}
    ],
    "color":"blue"
  },
  {
    "name":"Brandon",
    "start":"right",
    "pre_moves":[
      {"counts":144, "type":"delay"},
      {"counts":4, "dx":3, "dy":0, "type":""},
      {"counts":20, "type":"pose"},
      {"counts":1, "type":"up"},
      {"counts":3, "type":"pose"},
      {"counts":4, "dx":-1, "dy":-2, "type":""},
      {"counts":8, "type":"pose"},
      {"counts":4, "dx":-3, "dy":0, "type":""},
      {"counts":4, "type":"up"},
      {"counts":2, "type":"diag nw"},
      {"counts":2, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":4, "dx":-1, "dy":1, "type":""},
      {"counts":8, "type":"pose"},
      {"counts":10, "type":"down"}
    ],
    "color":"blue"
  },
  {
    "name":"Joe",
    "start":"right",
    "pre_moves":[
      {"counts":152, "type":"delay"},
      {"counts":4, "dx":1, "dy":0, "type":""},
      {"counts":12, "type":"pose"},
      {"counts":1, "type":"up"},
      {"counts":3, "type":"pose"},
      {"counts":4, "dx":2, "dy":0, "type":""},
      {"counts":8, "type":"pose"},
      {"counts":4, "dx":-1, "dy":-2, "type":""},
      {"counts":8, "type":"pose"},
      {"counts":4, "dx":-3, "dy":0, "type":""},
      {"counts":4, "type":"up"},
      {"counts":2, "type":"diag nw"},
      {"counts":2, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":1, "type":"diag se"},
      {"counts":10, "type":"down"}
    ],
    "color":"blue"
  },
  {
    "name":"Jeff",
    "start":"middle",
    "pre_moves":[
      {"counts":172, "type":"delay"},
      {"counts":12, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":4, "dx":2, "dy":0, "type":""},
      {"counts":20, "type":"pose"},
      {"counts":12, "type":"down"}
    ],
    "color":"purple"
  },
  {
    "name":"Rebecca",
    "start":"middle",
    "pre_moves":[
      {"counts":184, "type":"delay"},
      {"counts":12, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":4, "dx":-2, "dy":0, "type":""},
      {"counts":8, "type":"pose"},
      {"counts":12, "type":"down"}
    ],
    "color":"purple"
  },
  {
    "name":"Iris",
    "start":"middle",
    "pre_moves":[
      {"counts":196, "type":"delay"},
      {"counts":12, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":12, "type":"down"}
    ],
    "color":"purple"
  },
  {
    "name":"Derrick",
    "start":"middle left",
    "pre_moves":[
      {"counts":32, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":8, "dx":-4, "dy":-4, "type":""},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"right"},
      {"counts":8, "type":"up"},
      {"counts":16, "type":"pose"},
      {"counts":4, "type":"down"},
      {"counts":1, "type":"diag se"},
      {"counts":7, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"Tim",
    "start":"middle right",
    "pre_moves":[
      {"counts":32, "type":"delay"},
      {"counts":192, "type":"delay"},
      {"counts":8, "dx":4, "dy":-4, "type":""},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"left"},
      {"counts":8, "type":"up"},
      {"counts":24, "type":"pose"},
      {"counts":2, "type":"diag sw half speed"},
      {"counts":14, "type":"down half speed"},
      {"counts":32, "type":"pose"},
      {"counts":4, "type":"down"}
    ],
    "color":"red"
  },
  {
    "name":"Rebecca",
    "start":"middle right",
    "pre_moves":[
      {"counts":240, "type":"delay"},
      {"counts":1, "type":"right"},
      {"counts":1, "dx":1, "dy":-0.25, "type":""},
      {"counts":1, "dx":1, "dy":-0.5, "type":""},
      {"counts":1, "dx":0.85, "dy":-0.75, "type":""},
      {"counts":1, "dx":0.65, "dy":-1, "type":""},
      {"counts":1, "dx":0.5, "dy":-1.25, "type":""},
      {"counts":2, "type":"pose"},
      {"counts":40, "type":"pose"},
      {"counts":1, "dx":-0.5, "dy":1.25, "type":""},
      {"counts":1, "type":"pose"},
      {"counts":1, "dx":-0.65, "dy":1, "type":""},
      {"counts":1, "type":"pose"},
      {"counts":1, "dx":-0.85, "dy":0.75, "type":""},
      {"counts":1, "type":"pose"},
      {"counts":1, "dx":-1, "dy":0.5, "type":""},
      {"counts":1, "type":"pose"},
      {"counts":1, "dx":-1, "dy":0.25, "type":""},
      {"counts":1, "type":"pose"},
      {"counts":1, "type":"diag nw"},
      {"counts":3, "type":"up"},
      {"counts":1, "dx":-1, "dy":-1, "type":""},
      {"counts":7, "type":"up"},
      {"counts":1, "dx":2, "dy":1, "type":""},
      {"counts":11, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"Michael",
    "start":"middle right",
    "pre_moves":[
      {"counts":240, "type":"delay"},
      {"counts":1, "type":"delay"},
      {"counts":1, "type":"right"},
      {"counts":1, "dx":1, "dy":-0.25, "type":""},
      {"counts":1, "dx":1, "dy":-0.5, "type":""},
      {"counts":1, "dx":0.85, "dy":-0.75, "type":""},
      {"counts":1, "dx":0.65, "dy":-1, "type":""},
      {"counts":2, "type":"pose"},
      {"counts":40, "type":"pose"},
      {"counts":1, "dx":-0.65, "dy":1, "type":""},
      {"counts":1, "type":"pose"},
      {"counts":1, "dx":-0.85, "dy":0.75, "type":""},
      {"counts":1, "type":"pose"},
      {"counts":1, "dx":-1, "dy":0.5, "type":""},
      {"counts":1, "type":"pose"},
      {"counts":1, "dx":-1, "dy":0.25, "type":""},
      {"counts":1, "type":"pose"},
      {"counts":1, "type":"diag nw"},
      {"counts":3, "type":"up"},
      {"counts":1, "dx":-1, "dy":-1, "type":""},
      {"counts":7, "type":"up"},
      {"counts":1, "dx":2, "dy":1, "type":""},
      {"counts":11, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"Jenett",
    "start":"middle right",
    "pre_moves":[
      {"counts":240, "type":"delay"},
      {"counts":2, "type":"delay"},
      {"counts":1, "type":"right"},
      {"counts":1, "dx":1, "dy":-0.25, "type":""},
      {"counts":1, "dx":1, "dy":-0.5, "type":""},
      {"counts":1, "dx":0.85, "dy":-0.75, "type":""},
      {"counts":2, "type":"pose"},
      {"counts":40, "type":"pose"},
      {"counts":1, "dx":-0.85, "dy":0.75, "type":""},
      {"counts":1, "type":"pose"},
      {"counts":1, "dx":-1, "dy":0.5, "type":""},
      {"counts":1, "type":"pose"},
      {"counts":1, "dx":-1, "dy":0.25, "type":""},
      {"counts":1, "type":"pose"},
      {"counts":1, "type":"diag nw"},
      {"counts":3, "type":"up"},
      {"counts":1, "dx":-1, "dy":-1, "type":""},
      {"counts":7, "type":"up"},
      {"counts":1, "dx":2, "dy":1, "type":""},
      {"counts":11, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"Patrick",
    "start":"middle right",
    "pre_moves":[
      {"counts":240, "type":"delay"},
      {"counts":3, "type":"delay"},
      {"counts":1, "type":"right"},
      {"counts":1, "dx":1, "dy":-0.25, "type":""},
      {"counts":1, "dx":1, "dy":-0.5, "type":""},
      {"counts":2, "type":"pose"},
      {"counts":40, "type":"pose"},
      {"counts":1, "dx":-1, "dy":0.5, "type":""},
      {"counts":1, "type":"pose"},
      {"counts":1, "dx":-1, "dy":0.25, "type":""},
      {"counts":1, "type":"pose"},
      {"counts":1, "type":"diag nw"},
      {"counts":3, "type":"up"},
      {"counts":1, "dx":-1, "dy":-1, "type":""},
      {"counts":7, "type":"up"},
      {"counts":1, "dx":2, "dy":1, "type":""},
      {"counts":11, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"Julia",
    "start":"middle right",
    "pre_moves":[
      {"counts":240, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":1, "type":"right"},
      {"counts":1, "dx":1, "dy":-0.25, "type":""},
      {"counts":2, "type":"pose"},
      {"counts":40, "type":"pose"},
      {"counts":1, "dx":-1, "dy":0.25, "type":""},
      {"counts":1, "type":"pose"},
      {"counts":1, "type":"diag nw"},
      {"counts":3, "type":"up"},
      {"counts":1, "dx":-1, "dy":-1, "type":""},
      {"counts":7, "type":"up"},
      {"counts":1, "dx":2, "dy":1, "type":""},
      {"counts":11, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"Joe",
    "start":"middle right",
    "pre_moves":[
      {"counts":240, "type":"delay"},
      {"counts":5, "type":"delay"},
      {"counts":1, "type":"right"},
      {"counts":2, "type":"pose"},
      {"counts":40, "type":"pose"},
      {"counts":1, "type":"diag nw"},
      {"counts":3, "type":"up"},
      {"counts":1, "dx":-1, "dy":-1, "type":""},
      {"counts":7, "type":"up"},
      {"counts":1, "dx":2, "dy":1, "type":""},
      {"counts":11, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"June (S)",
    "start":"middle left",
    "pre_moves":[
      {"counts":240, "type":"delay"},
      {"counts":1, "type":"left"},
      {"counts":1, "dx":-1, "dy":-0.25, "type":""},
      {"counts":1, "dx":-1, "dy":-0.5, "type":""},
      {"counts":1, "dx":-0.85, "dy":-0.75, "type":""},
      {"counts":1, "dx":-0.65, "dy":-1, "type":""},
      {"counts":1, "dx":-0.5, "dy":-1.25, "type":""},
      {"counts":2, "type":"pose"},
      {"counts":40, "type":"pose"},
      {"counts":1, "type":"pose"},
      {"counts":1, "dx":0.5, "dy":1.25, "type":""},
      {"counts":1, "type":"pose"},
      {"counts":1, "dx":0.65, "dy":1, "type":""},
      {"counts":1, "type":"pose"},
      {"counts":1, "dx":0.85, "dy":0.75, "type":""},
      {"counts":1, "type":"pose"},
      {"counts":1, "dx":1, "dy":0.5, "type":""},
      {"counts":1, "type":"pose"},
      {"counts":1, "dx":1, "dy":0.25, "type":""},
      {"counts":1, "type":"pose"},
      {"counts":1, "type":"diag ne"},
      {"counts":3, "type":"up"},
      {"counts":1, "dx":1, "dy":-1, "type":""},
      {"counts":7, "type":"up"},
      {"counts":1, "dx":-2, "dy":1, "type":""},
      {"counts":11, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"Kevin",
    "start":"middle left",
    "pre_moves":[
      {"counts":240, "type":"delay"},
      {"counts":1, "type":"delay"},
      {"counts":1, "type":"left"},
      {"counts":1, "dx":-1, "dy":-0.25, "type":""},
      {"counts":1, "dx":-1, "dy":-0.5, "type":""},
      {"counts":1, "dx":-0.85, "dy":-0.75, "type":""},
      {"counts":1, "dx":-0.65, "dy":-1, "type":""},
      {"counts":2, "type":"pose"},
      {"counts":40, "type":"pose"},
      {"counts":1, "type":"pose"},
      {"counts":1, "dx":0.65, "dy":1, "type":""},
      {"counts":1, "type":"pose"},
      {"counts":1, "dx":0.85, "dy":0.75, "type":""},
      {"counts":1, "type":"pose"},
      {"counts":1, "dx":1, "dy":0.5, "type":""},
      {"counts":1, "type":"pose"},
      {"counts":1, "dx":1, "dy":0.25, "type":""},
      {"counts":1, "type":"pose"},
      {"counts":1, "type":"diag ne"},
      {"counts":3, "type":"up"},
      {"counts":1, "dx":1, "dy":-1, "type":""},
      {"counts":7, "type":"up"},
      {"counts":1, "dx":-2, "dy":1, "type":""},
      {"counts":11, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"Elizabeth",
    "start":"middle left",
    "pre_moves":[
      {"counts":240, "type":"delay"},
      {"counts":2, "type":"delay"},
      {"counts":1, "type":"left"},
      {"counts":1, "dx":-1, "dy":-0.25, "type":""},
      {"counts":1, "dx":-1, "dy":-0.5, "type":""},
      {"counts":1, "dx":-0.85, "dy":-0.75, "type":""},
      {"counts":2, "type":"pose"},
      {"counts":40, "type":"pose"},
      {"counts":1, "type":"pose"},
      {"counts":1, "dx":0.85, "dy":0.75, "type":""},
      {"counts":1, "type":"pose"},
      {"counts":1, "dx":1, "dy":0.5, "type":""},
      {"counts":1, "type":"pose"},
      {"counts":1, "dx":1, "dy":0.25, "type":""},
      {"counts":1, "type":"pose"},
      {"counts":1, "type":"diag ne"},
      {"counts":3, "type":"up"},
      {"counts":1, "dx":1, "dy":-1, "type":""},
      {"counts":7, "type":"up"},
      {"counts":1, "dx":-2, "dy":1, "type":""},
      {"counts":11, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"Jeremy R",
    "start":"middle left",
    "pre_moves":[
      {"counts":240, "type":"delay"},
      {"counts":3, "type":"delay"},
      {"counts":1, "type":"left"},
      {"counts":1, "dx":-1, "dy":-0.25, "type":""},
      {"counts":1, "dx":-1, "dy":-0.5, "type":""},
      {"counts":2, "type":"pose"},
      {"counts":40, "type":"pose"},
      {"counts":1, "type":"pose"},
      {"counts":1, "dx":1, "dy":0.5, "type":""},
      {"counts":1, "type":"pose"},
      {"counts":1, "dx":1, "dy":0.25, "type":""},
      {"counts":1, "type":"pose"},
      {"counts":1, "type":"diag ne"},
      {"counts":3, "type":"up"},
      {"counts":1, "dx":1, "dy":-1, "type":""},
      {"counts":7, "type":"up"},
      {"counts":1, "dx":-2, "dy":1, "type":""},
      {"counts":11, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"Christine",
    "start":"middle left",
    "pre_moves":[
      {"counts":240, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":1, "type":"left"},
      {"counts":1, "dx":-1, "dy":-0.25, "type":""},
      {"counts":2, "type":"pose"},
      {"counts":40, "type":"pose"},
      {"counts":1, "type":"pose"},
      {"counts":1, "dx":1, "dy":0.25, "type":""},
      {"counts":1, "type":"pose"},
      {"counts":1, "type":"diag ne"},
      {"counts":3, "type":"up"},
      {"counts":1, "dx":1, "dy":-1, "type":""},
      {"counts":7, "type":"up"},
      {"counts":1, "dx":-2, "dy":1, "type":""},
      {"counts":11, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"Nick P",
    "start":"middle left",
    "pre_moves":[
      {"counts":240, "type":"delay"},
      {"counts":5, "type":"delay"},
      {"counts":1, "type":"left"},
      {"counts":2, "type":"pose"},
      {"counts":40, "type":"pose"},
      {"counts":1, "type":"pose"},
      {"counts":1, "type":"diag ne"},
      {"counts":3, "type":"up"},
      {"counts":1, "dx":1, "dy":-1, "type":""},
      {"counts":7, "type":"up"},
      {"counts":1, "dx":-2, "dy":1, "type":""},
      {"counts":11, "type":"down"}
    ],
    "color":"green"
  }
]
