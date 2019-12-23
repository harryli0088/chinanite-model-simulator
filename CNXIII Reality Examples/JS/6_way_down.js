video_src="https://www.youtube.com/embed/UzXuQbcp8Yc";

pre_sections = [
  {"measures":4, "counts":8, "text":"Intro"},
  {"measures":4, "counts":8, "text":"Chorus 1"},
  {"measures":4, "counts":8, "text":"Verse 1"},
  {"measures":4, "counts":8, "text":"Pre Chorus"},
  {"measures":4, "counts":8, "text":"Chorus 2"},
  {"measures":6, "counts":8, "text":"Light Bridge"},
  {"measures":6, "counts":8, "text":"Heavy Bridge"},
  {"measures":4, "counts":8, "text":"Ending"}
];

pre_comments = [
  {"startCount":33, "endCount":112, "text":"Dance, skip to ~1:20 for walks"},
  {"startCount":113, "endCount":133, "text":"Dancer order doesn't matter"},
  {"startCount":134, "endCount":144, "text":"Don't actually collide xP"},
  {"startCount":161, "endCount":240, "text":"Orange cross and pivot stare down"}
];

models = [
  {
    "name":"Derrick",
    "start":
      {
        "x":280,
        "y":220
      },
    "pre_moves":[
      {"counts":14, "type":"kneel"},
      {"counts":4, "type":"pose"},
      {"counts":8, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"Tim",
    "start":
      {
        "x":280,
        "y":260
      },
    "pre_moves":[
      {"counts":18, "type":"pose"},
      {"counts":8, "type":"down"}
    ],
    "color":"red"
  },
  {
    "name":"Jeff",
    "start":
      {
        "x":240,
        "y":220
      },
    "pre_moves":[
      {"counts":18, "type":"pose"},
      {"counts":8, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"Melody W",
    "start":
      {
        "x":320,
        "y":220
      },
    "pre_moves":[
      {"counts":18, "type":"pose"},
      {"counts":8, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"Alvin",
    "start":"left",
    "pre_moves":[
      {"counts":112, "type":"delay"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"left"},
      {"counts":12, "dx":3, "dy":0, "type":""},
      {"counts":4, "dx":5, "dy":0, "type":""},
      {"counts":8, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":1, "type":"diag sw"},
      {"counts":11, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"ChaoLi",
    "start":"left",
    "pre_moves":[
      {"counts":112, "type":"delay"},
      {"counts":1, "type":"delay"},
      {"counts":4, "type":"up"},
      {"counts":3, "type":"left"},
      {"counts":8, "dx":2, "dy":0, "type":""},
      {"counts":4, "dx":5, "dy":0, "type":""},
      {"counts":8, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":1, "type":"diag sw"},
      {"counts":11, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"Sabrina",
    "start":"left",
    "pre_moves":[
      {"counts":112, "type":"delay"},
      {"counts":2, "type":"delay"},
      {"counts":4, "type":"up"},
      {"counts":2, "type":"left"},
      {"counts":4, "dx":1, "dy":0, "type":""},
      {"counts":4, "dx":5, "dy":0, "type":""},
      {"counts":8, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":1, "type":"diag sw"},
      {"counts":11, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"Melody T",
    "start":"left",
    "pre_moves":[
      {"counts":112, "type":"delay"},
      {"counts":3, "type":"delay"},
      {"counts":4, "type":"up"},
      {"counts":1, "type":"left"},
      {"counts":4, "dx":5, "dy":0, "type":""},
      {"counts":8, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":1, "type":"diag sw"},
      {"counts":11, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"Brandon",
    "start":"right",
    "pre_moves":[
      {"counts":112, "type":"delay"},
      {"counts":4, "type":"up"},
      {"counts":4, "type":"right"},
      {"counts":12, "dx":-3, "dy":0, "type":""},
      {"counts":4, "dx":-5, "dy":0, "type":""},
      {"counts":8, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":1, "type":"diag se"},
      {"counts":11, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"Cynthia",
    "start":"right",
    "pre_moves":[
      {"counts":112, "type":"delay"},
      {"counts":1, "type":"delay"},
      {"counts":4, "type":"up"},
      {"counts":3, "type":"right"},
      {"counts":8, "dx":-2, "dy":0, "type":""},
      {"counts":4, "dx":-5, "dy":0, "type":""},
      {"counts":8, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":1, "type":"diag se"},
      {"counts":11, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"Michele T",
    "start":"right",
    "pre_moves":[
      {"counts":112, "type":"delay"},
      {"counts":2, "type":"delay"},
      {"counts":4, "type":"up"},
      {"counts":2, "type":"right"},
      {"counts":4, "dx":-1, "dy":0, "type":""},
      {"counts":4, "dx":-5, "dy":0, "type":""},
      {"counts":8, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":1, "type":"diag se"},
      {"counts":11, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"June (J)",
    "start":"right",
    "pre_moves":[
      {"counts":112, "type":"delay"},
      {"counts":3, "type":"delay"},
      {"counts":4, "type":"up"},
      {"counts":1, "type":"right"},
      {"counts":4, "dx":-5, "dy":0, "type":""},
      {"counts":8, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":1, "type":"diag se"},
      {"counts":11, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"Lex",
    "start":
      {
        "x":280,
        "y":340
      },
    "pre_moves":[
      {"counts":112, "type":"delay"},
      {"counts":8, "type":"pose"},
      {"counts":8, "type":"down"}
    ],
    "color":"blue"
  },
  {
    "name":"Chris M",
    "start":
      {
        "x":280,
        "y":280
      },
    "pre_moves":[
      {"counts":112, "type":"delay"},
      {"counts":8, "type":"pose"},
      {"counts":4, "dx":0, "dy":1.5, "type":""},
      {"counts":4, "type":"down"}
    ],
    "color":"blue"
  },
  {
    "name":"Jen",
    "start":
      {
        "x":280,
        "y":220
      },
    "pre_moves":[
      {"counts":112, "type":"delay"},
      {"counts":8, "type":"pose"},
      {"counts":8, "dx":0, "dy":3, "type":""},
      {"counts":4, "type":"down"}
    ],
    "color":"blue"
  },
  {
    "name":"Julia",
    "start":
      {
        "x":280,
        "y":160
      },
    "pre_moves":[
      {"counts":112, "type":"delay"},
      {"counts":8, "type":"pose"},
      {"counts":12, "dx":0, "dy":4.5, "type":""},
      {"counts":4, "type":"down"}
    ],
    "color":"blue"
  },
  {
    "name":"Julianne",
    "start":
      {
        "x":280,
        "y":100
      },
    "pre_moves":[
      {"counts":112, "type":"delay"},
      {"counts":8, "type":"pose"},
      {"counts":16, "dx":0, "dy":6, "type":""},
      {"counts":4, "type":"down"}
    ],
    "color":"blue"
  },
  {
    "name":"Nick P",
    "start":"left",
    "pre_moves":[
      {"counts":160, "type":"delay"},
      {"counts":8, "dx":7, "dy":-4, "type":""},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"left"},
      {"counts":8, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":2, "type":"up"}
    ],
    "color":"orange"
  },
  {
    "name":"Rebecca",
    "start":"left",
    "pre_moves":[
      {"counts":160, "type":"delay"},
      {"counts":16, "type":"delay"},
      {"counts":8, "dx":7, "dy":-4, "type":""},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"left"},
      {"counts":8, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":2, "type":"up"}
    ],
    "color":"orange"
  },
  {
    "name":"Kevin",
    "start":"left",
    "pre_moves":[
      {"counts":160, "type":"delay"},
      {"counts":32, "type":"delay"},
      {"counts":8, "dx":7, "dy":-4, "type":""},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"left"},
      {"counts":8, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":2, "type":"up"}
    ],
    "color":"orange"
  },
  {
    "name":"Michael",
    "start":"left",
    "pre_moves":[
      {"counts":160, "type":"delay"},
      {"counts":48, "type":"delay"},
      {"counts":8, "dx":7, "dy":-4, "type":""},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"left"},
      {"counts":8, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":2, "type":"up"}
    ],
    "color":"orange"
  },
  {
    "name":"Josh",
    "start":"left",
    "pre_moves":[
      {"counts":160, "type":"delay"},
      {"counts":64, "type":"delay"},
      {"counts":8, "dx":7, "dy":-4, "type":""},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"left"},
      {"counts":8, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":2, "type":"up"}
    ],
    "color":"orange"
  },
  {
    "name":"Jeremy R",
    "start":"left",
    "pre_moves":[
      {"counts":160, "type":"delay"},
      {"counts":80, "type":"delay"},
      {"counts":8, "dx":7, "dy":-4, "type":""},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"left"},
      {"counts":8, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":2, "type":"up"}
    ],
    "color":"orange"
  },
  {
    "name":"Nick L",
    "start":"right",
    "pre_moves":[
      {"counts":160, "type":"delay"},
      {"counts":8, "dx":-7, "dy":-4, "type":""},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"right"},
      {"counts":8, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":2, "type":"up"}
    ],
    "color":"orange"
  },
  {
    "name":"Sam",
    "start":"right",
    "pre_moves":[
      {"counts":160, "type":"delay"},
      {"counts":16, "type":"delay"},
      {"counts":8, "dx":-7, "dy":-4, "type":""},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"right"},
      {"counts":8, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":2, "type":"up"}
    ],
    "color":"orange"
  },
  {
    "name":"Shyam",
    "start":"right",
    "pre_moves":[
      {"counts":160, "type":"delay"},
      {"counts":32, "type":"delay"},
      {"counts":8, "dx":-7, "dy":-4, "type":""},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"right"},
      {"counts":8, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":2, "type":"up"}
    ],
    "color":"orange"
  },
  {
    "name":"Jenett",
    "start":"right",
    "pre_moves":[
      {"counts":160, "type":"delay"},
      {"counts":48, "type":"delay"},
      {"counts":8, "dx":-7, "dy":-4, "type":""},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"right"},
      {"counts":8, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":2, "type":"up"}
    ],
    "color":"orange"
  },
  {
    "name":"Christine",
    "start":"right",
    "pre_moves":[
      {"counts":160, "type":"delay"},
      {"counts":64, "type":"delay"},
      {"counts":8, "dx":-7, "dy":-4, "type":""},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"right"},
      {"counts":8, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":2, "type":"up"}
    ],
    "color":"orange"
  },
  {
    "name":"Chris Y",
    "start":"right",
    "pre_moves":[
      {"counts":160, "type":"delay"},
      {"counts":80, "type":"delay"},
      {"counts":8, "dx":-7, "dy":-4, "type":""},
      {"counts":4, "type":"pose"},
      {"counts":4, "type":"right"},
      {"counts":8, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":2, "type":"up"}
    ],
    "color":"orange"
  },
  {
    "name":"Isabelle",
    "start":"middle left",
    "pre_moves":[
      {"counts":160, "type":"delay"},
      {"counts":48, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":12, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":2, "type":"up"}
    ],
    "color":"green"
  },
  {
    "name":"Eurie",
    "start":"middle left",
    "pre_moves":[
      {"counts":160, "type":"delay"},
      {"counts":64, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":12, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":2, "type":"up"}
    ],
    "color":"green"
  },
  {
    "name":"Christina",
    "start":"middle left",
    "pre_moves":[
      {"counts":160, "type":"delay"},
      {"counts":80, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":12, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":2, "type":"up"}
    ],
    "color":"green"
  },
  {
    "name":"Iris",
    "start":"middle right",
    "pre_moves":[
      {"counts":160, "type":"delay"},
      {"counts":48, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":12, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":2, "type":"up"}
    ],
    "color":"green"
  },
  {
    "name":"Allysa",
    "start":"middle right",
    "pre_moves":[
      {"counts":160, "type":"delay"},
      {"counts":64, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":12, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":2, "type":"up"}
    ],
    "color":"green"
  },
  {
    "name":"Dom",
    "start":"middle right",
    "pre_moves":[
      {"counts":160, "type":"delay"},
      {"counts":80, "type":"delay"},
      {"counts":4, "type":"delay"},
      {"counts":12, "type":"up"},
      {"counts":4, "type":"pose"},
      {"counts":2, "type":"up"}
    ],
    "color":"green"
  },
  {
    "name":"Derrick",
    "start":"middle",
    "pre_moves":[
      {"counts":160, "type":"delay"},
      {"counts":48, "type":"delay"},
      {"counts":8, "type":"up"},
      {"counts":72, "type":"pose"}
    ],
    "color":"green"
  },
  {
    "name":"Melody T",
    "start":"middle",
    "pre_moves":[
      {"counts":256, "type":"delay"},
      {"counts":8, "type":"up"},
      {"counts":24, "type":"pose"}
    ],
    "color":"purple"
  }
]
