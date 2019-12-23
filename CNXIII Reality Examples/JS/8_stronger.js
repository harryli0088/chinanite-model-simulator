video_src="https://www.youtube.com/embed/UzXuQbcp8Yc";

pre_sections = [
  [4,6,"Duet Intro"],
  [4,8,"Intro"],
  [4,8,"Verse 1"],
  [4,8,"Pre Chorus 1"],
  [1,4,"Pause"],
  [8,8,"Chorus 1"],
  [4,8,"Verse 2"],
  [4,8,"Pre Chorus 2"],
  [1,4,"Pause"],
  [4,8,"Chorus 2"],
  [4,8,"Bridge 1"],
  [4,8,"Bridge 2"],
  [4,8,"Bridge 2 Repeat"],
  [4,8,"Chorus 3"],
  [4,8,"Chorus 3 Repeat"],
  [4,8,"Ending"],
];

pre_comments = [
  [1,24,"Beat can be hard to discern"],
  [25,188,"Dance; walk starts ~1:45"],
  [253,257,"Freeze 4cts"],
  [318,328,"Don't collide plz ty"],
  [329,336,"Make a semicircle"],
  [337,338,"Chris Y switch pose"],
  [339,340,"John switch pose"],
  [341,342,"June (J) switch pose"],
  [343,344,"Julia switch pose"],
  [345,346,"Jenett switch pose"],
  [347,348,"Jeremy G switch pose"],
  [349,350,"Allysa switch pose"],
  [351,352,"Michelle F switch pose"],
  [377,384,"Seizure warning"],
  [385,400,"Order doesn't matter, line up with your color"],
  [401,448,"Do a final group pose at the bottom of the T"],
];

models = [
  {
    "name":"Derrick",
    "start":
      {
        "x":280,
        "y":60
      },
    "pre_moves":[
      {"count":6, "type":"pose"},
      {"count":6, "type":"pose"},
      {"count":5, "type":"down"},
      {"count":1, "type":"diag sw"},
      {"count":6, "type":"pose"}
    ],
    "color":"green"
  },
  {
    "name":"Tim",
    "start":"middle",
    "pre_moves":[
      {"count":6, "type":"delay"},
      {"count":6, "type":"pose"},
      {"count":5, "type":"up"},
      {"count":1, "type":"diag ne"},
      {"count":6, "type":"pose"},
      {"count":6, "type":"down"}
    ],
    "color":"red"
  },
  {
    "name":"Sam",
    "start":"middle left",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":8, "type":"up"},
      {"count":4, "type":"pose"},
      {"count":1, "type":"diag sw"},
      {"count":3, "type":"down"},
      {"count":4, "type":"left"},
      {"count":20, "type":"pose"},
      {"count":6, "dx":4, "dy":4, "type":""}
    ],
    "color":"green"
  },
  {
    "name":"Eurie",
    "start":"middle left",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":8, "type":"delay"},
      {"count":8, "type":"up"},
      {"count":4, "type":"pose"},
      {"count":1, "type":"diag sw"},
      {"count":3, "type":"down"},
      {"count":2, "type":"left"},
      {"count":14, "type":"pose"},
      {"count":5, "dx":2, "dy":4, "type":""}
    ],
    "color":"green"
  },
  {
    "name":"Brandon",
    "start":"middle left",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":16, "type":"delay"},
      {"count":8, "type":"up"},
      {"count":4, "type":"pose"},
      {"count":1, "type":"diag sw"},
      {"count":3, "type":"down"},
      {"count":8, "type":"pose"},
      {"count":4, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"Nick P",
    "start":"middle left",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":24, "type":"delay"},
      {"count":8, "type":"up"},
      {"count":8, "type":"pose"},
      {"count":1, "type":"diag sw"},
      {"count":7, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"Julianne",
    "start":"middle right",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":8, "type":"up"},
      {"count":4, "type":"pose"},
      {"count":1, "type":"diag se"},
      {"count":3, "type":"down"},
      {"count":4, "type":"right"},
      {"count":20, "type":"pose"},
      {"count":6, "dx":-4, "dy":4, "type":""}
    ],
    "color":"orange"
  },
  {
    "name":"Briana",
    "start":"middle right",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":8, "type":"delay"},
      {"count":8, "type":"up"},
      {"count":4, "type":"pose"},
      {"count":1, "type":"diag se"},
      {"count":3, "type":"down"},
      {"count":2, "type":"right"},
      {"count":14, "type":"pose"},
      {"count":5, "dx":-2, "dy":4, "type":""}
    ],
    "color":"orange"
  },
  {
    "name":"Michele T",
    "start":"middle right",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":16, "type":"delay"},
      {"count":8, "type":"up"},
      {"count":4, "type":"pose"},
      {"count":1, "type":"diag se"},
      {"count":3, "type":"down"},
      {"count":8, "type":"pose"},
      {"count":4, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"Shyam",
    "start":"middle right",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":24, "type":"delay"},
      {"count":8, "type":"up"},
      {"count":8, "type":"pose"},
      {"count":1, "type":"diag se"},
      {"count":7, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"Maggie",
    "start":"middle",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":32, "type":"delay"},
      {"count":8, "type":"up"},
      {"count":4, "dx":1, "dy":-4, "type":""},
      {"count":4, "type":"pose"},
      {"count":1, "type":"diag se"},
      {"count":3, "type":"down"},
      {"count":4, "type":"down pivot"},
      {"count":4, "type":"right"},
      {"count":4, "type":"pose"},
      {"count":4, "type":"pose"},
      {"count":4, "type":"diag sw"}
    ],
    "color":"orange"
  },
  {
    "name":"ChaoLi",
    "start":"middle",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":32, "type":"delay"},
      {"count":8, "type":"delay"},
      {"count":8, "type":"up"},
      {"count":4, "dx":1, "dy":-4, "type":""},
      {"count":4, "type":"pose"},
      {"count":1, "type":"diag se"},
      {"count":3, "type":"down"},
      {"count":4, "type":"down pivot"},
      {"count":4, "type":"pose"},
      {"count":4, "type":"right"},
      {"count":4, "type":"pose"},
      {"count":4, "type":"diag sw"}
    ],
    "color":"orange"
  },
  {
    "name":"Alvin",
    "start":"middle",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":32, "type":"delay"},
      {"count":16, "type":"delay"},
      {"count":8, "type":"up"},
      {"count":4, "dx":1, "dy":-4, "type":""},
      {"count":4, "type":"pose"},
      {"count":4, "type":"pose"},
      {"count":1, "type":"diag se"},
      {"count":3, "type":"down"},
      {"count":4, "type":"down pivot"},
      {"count":4, "type":"right"},
      {"count":4, "type":"pose"},
      {"count":4, "type":"diag sw"}
    ],
    "color":"orange"
  },
  {
    "name":"Nick L",
    "start":"middle",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":32, "type":"delay"},
      {"count":24, "type":"delay"},
      {"count":8, "type":"up"},
      {"count":4, "type":"pose"},
      {"count":4, "dx":1, "dy":-4, "type":""},
      {"count":4, "type":"pose"},
      {"count":1, "type":"diag se"},
      {"count":3, "type":"down"},
      {"count":4, "type":"down pivot"},
      {"count":4, "type":"right"},
      {"count":4, "type":"pose"},
      {"count":4, "type":"diag sw"}
    ],
    "color":"orange"
  },
  {
    "name":"Christine",
    "start":"middle",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":32, "type":"delay"},
      {"count":4, "type":"delay"},
      {"count":8, "type":"up"},
      {"count":4, "dx":-1, "dy":-4, "type":""},
      {"count":4, "type":"pose"},
      {"count":1, "type":"diag sw"},
      {"count":3, "type":"down"},
      {"count":4, "type":"down pivot"},
      {"count":4, "type":"left"},
      {"count":4, "type":"pose"},
      {"count":4, "type":"pose"},
      {"count":4, "type":"diag se"}
    ],
    "color":"green"
  },
  {
    "name":"Joe",
    "start":"middle",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":32, "type":"delay"},
      {"count":8, "type":"delay"},
      {"count":4, "type":"delay"},
      {"count":8, "type":"up"},
      {"count":4, "dx":-1, "dy":-4, "type":""},
      {"count":4, "type":"pose"},
      {"count":1, "type":"diag sw"},
      {"count":3, "type":"down"},
      {"count":4, "type":"pose"},
      {"count":4, "type":"down pivot"},
      {"count":4, "type":"left"},
      {"count":4, "type":"pose"},
      {"count":4, "type":"diag se"}
    ],
    "color":"green"
  },
  {
    "name":"Rebecca",
    "start":"middle",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":32, "type":"delay"},
      {"count":16, "type":"delay"},
      {"count":4, "type":"delay"},
      {"count":8, "type":"up"},
      {"count":4, "dx":-1, "dy":-4, "type":""},
      {"count":4, "type":"pose"},
      {"count":4, "type":"pose"},
      {"count":1, "type":"diag sw"},
      {"count":3, "type":"down"},
      {"count":4, "type":"down pivot"},
      {"count":4, "type":"left"},
      {"count":4, "type":"pose"},
      {"count":4, "type":"diag se"}
    ],
    "color":"green"
  },
  {
    "name":"Shawn",
    "start":"middle",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":32, "type":"delay"},
      {"count":24, "type":"delay"},
      {"count":4, "type":"delay"},
      {"count":4, "type":"up"},
      {"count":4, "type":"pose"},
      {"count":4, "type":"up"},
      {"count":4, "dx":-1, "dy":-4, "type":""},
      {"count":4, "type":"pose"},
      {"count":1, "type":"diag sw"},
      {"count":3, "type":"down"},
      {"count":4, "type":"down pivot"},
      {"count":4, "type":"left"},
      {"count":4, "type":"pose"},
      {"count":4, "type":"diag se"}
    ],
    "color":"green"
  },
  {
    "name":"Chris M",
    "start":"middle",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":64, "type":"delay"},
      {"count":4, "type":"delay"},
      {"count":8, "type":"up"},
      {"count":4, "dx":1, "dy":-4, "type":""},
      {"count":4, "type":"pose"},
      {"count":1, "type":"diag se"},
      {"count":3, "type":"down"},
      {"count":4, "type":"down pivot"},
      {"count":4, "type":"right"},
      {"count":4, "type":"pose"},
      {"count":4, "type":"diag sw"}
    ],
    "color":"orange"
  },
  {
    "name":"Josh",
    "start":"middle",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":64, "type":"delay"},
      {"count":4, "type":"delay"},
      {"count":8, "type":"delay"},
      {"count":8, "type":"up"},
      {"count":4, "dx":1, "dy":-4, "type":""},
      {"count":4, "type":"pose"},
      {"count":1, "type":"diag se"},
      {"count":3, "type":"down"},
      {"count":4, "type":"down pivot"},
      {"count":4, "type":"right"},
      {"count":4, "type":"pose"},
      {"count":4, "type":"diag sw"}
    ],
    "color":"orange"
  },
  {
    "name":"Jeff",
    "start":"middle",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":64, "type":"delay"},
      {"count":4, "type":"delay"},
      {"count":4, "type":"delay"},
      {"count":8, "type":"up"},
      {"count":4, "dx":-1, "dy":-4, "type":""},
      {"count":4, "type":"pose"},
      {"count":1, "type":"diag sw"},
      {"count":3, "type":"down"},
      {"count":4, "type":"down pivot"},
      {"count":4, "type":"left"},
      {"count":4, "type":"pose"},
      {"count":4, "type":"diag se"}
    ],
    "color":"green"
  },
  {
    "name":"Patrick",
    "start":"middle",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":64, "type":"delay"},
      {"count":4, "type":"delay"},
      {"count":8, "type":"delay"},
      {"count":4, "type":"delay"},
      {"count":8, "type":"up"},
      {"count":4, "dx":-1, "dy":-4, "type":""},
      {"count":4, "type":"pose"},
      {"count":1, "type":"diag sw"},
      {"count":3, "type":"down"},
      {"count":4, "type":"down pivot"},
      {"count":4, "type":"left"},
      {"count":4, "type":"pose"},
      {"count":4, "type":"diag se"}
    ],
    "color":"green"
  },
  {
    "name":"Elizabeth",
    "start":"middle right",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":64, "type":"delay"},
      {"count":4, "type":"delay"},
      {"count":16, "type":"delay"},
      {"count":4, "type":"delay"},
      {"count":8, "type":"up"},
      {"count":4, "dx":-2, "dy":-4, "type":""},
      {"count":4, "type":"pose"},
      {"count":1, "type":"diag sw"},
      {"count":3, "type":"down"},
      {"count":4, "type":"down pivot"},
      {"count":4, "type":"left"},
      {"count":4, "type":"pose"},
      {"count":4, "type":"diag se"}
    ],
    "color":"orange"
  },
  {
    "name":"Christina",
    "start":"middle right",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":64, "type":"delay"},
      {"count":4, "type":"delay"},
      {"count":16, "type":"delay"},
      {"count":4, "type":"delay"},
      {"count":8, "type":"delay"},
      {"count":8, "type":"up"},
      {"count":4, "dx":-2, "dy":-4, "type":""},
      {"count":4, "type":"pose"},
      {"count":1, "type":"diag sw"},
      {"count":3, "type":"down"},
      {"count":4, "type":"down pivot"},
      {"count":4, "type":"left"},
      {"count":4, "type":"pose"},
      {"count":4, "type":"diag se"}
    ],
    "color":"orange"
  },
  {
    "name":"Melody W",
    "start":"middle right",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":64, "type":"delay"},
      {"count":4, "type":"delay"},
      {"count":16, "type":"delay"},
      {"count":4, "type":"delay"},
      {"count":16, "type":"delay"},
      {"count":8, "type":"up"},
      {"count":4, "dx":-2, "dy":-4, "type":""},
      {"count":4, "type":"pose"},
      {"count":1, "type":"diag sw"},
      {"count":3, "type":"down"},
      {"count":4, "type":"down pivot"},
      {"count":4, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"Kevin",
    "start":"middle right",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":64, "type":"delay"},
      {"count":4, "type":"delay"},
      {"count":16, "type":"delay"},
      {"count":4, "type":"delay"},
      {"count":24, "type":"delay"},
      {"count":8, "type":"up"},
      {"count":4, "dx":-2, "dy":-4, "type":""},
      {"count":4, "type":"pose"},
      {"count":1, "type":"diag sw"},
      {"count":3, "type":"down"},
      {"count":4, "type":"down pivot"},
      {"count":4, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"Isabelle",
    "start":"middle left",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":64, "type":"delay"},
      {"count":4, "type":"delay"},
      {"count":16, "type":"delay"},
      {"count":4, "type":"delay"},
      {"count":8, "type":"up"},
      {"count":4, "dx":2, "dy":-4, "type":""},
      {"count":4, "type":"pose"},
      {"count":1, "type":"diag se"},
      {"count":3, "type":"down"},
      {"count":4, "type":"down pivot"},
      {"count":4, "type":"right"},
      {"count":4, "type":"pose"},
      {"count":4, "type":"diag sw"}
    ],
    "color":"green"
  },
  {
    "name":"Michael",
    "start":"middle left",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":64, "type":"delay"},
      {"count":4, "type":"delay"},
      {"count":16, "type":"delay"},
      {"count":4, "type":"delay"},
      {"count":8, "type":"delay"},
      {"count":8, "type":"up"},
      {"count":4, "dx":2, "dy":-4, "type":""},
      {"count":4, "type":"pose"},
      {"count":1, "type":"diag se"},
      {"count":3, "type":"down"},
      {"count":4, "type":"down pivot"},
      {"count":4, "type":"right"},
      {"count":4, "type":"pose"},
      {"count":4, "type":"diag sw"}
    ],
    "color":"green"
  },
  {
    "name":"Cynthia",
    "start":"middle left",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":64, "type":"delay"},
      {"count":4, "type":"delay"},
      {"count":16, "type":"delay"},
      {"count":4, "type":"delay"},
      {"count":16, "type":"delay"},
      {"count":8, "type":"up"},
      {"count":4, "dx":2, "dy":-4, "type":""},
      {"count":4, "type":"pose"},
      {"count":1, "type":"diag se"},
      {"count":3, "type":"down"},
      {"count":4, "type":"down pivot"},
      {"count":4, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"Elaine",
    "start":"middle left",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":64, "type":"delay"},
      {"count":4, "type":"delay"},
      {"count":16, "type":"delay"},
      {"count":4, "type":"delay"},
      {"count":24, "type":"delay"},
      {"count":8, "type":"up"},
      {"count":4, "dx":2, "dy":-4, "type":""},
      {"count":4, "type":"pose"},
      {"count":1, "type":"diag se"},
      {"count":3, "type":"down"},
      {"count":4, "type":"down pivot"},
      {"count":4, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"Julia",
    "start":"middle right",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":128, "type":"delay"},
      {"count":4, "type":"delay"},
      {"count":6, "type":"delay"},
      {"count":8, "dx":0, "dy":-4, "type":"half speed"},
      {"count":18, "type":"pose"},
      {"count":2, "dx":1.75, "dy":0.75, "type":""},
      {"count":2, "dx":1.5, "dy":1.5, "type":""},
      {"count":2, "dx":0.75, "dy":1.75, "type":""},
      {"count":3, "type":"left"}
    ],
    "color":"orange"
  },
  {
    "name":"June (J)",
    "start":"middle right",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":128, "type":"delay"},
      {"count":4, "type":"delay"},
      {"count":4, "type":"delay"},
      {"count":8, "dx":1.75, "dy":-3.25, "type":"half speed"},
      {"count":20, "type":"pose"},
      {"count":2, "dx":1.5, "dy":1.5, "type":""},
      {"count":2, "dx":0.75, "dy":1.75, "type":""},
      {"count":3, "type":"left"}
    ],
    "color":"orange"
  },
  {
    "name":"John",
    "start":"middle right",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":128, "type":"delay"},
      {"count":4, "type":"delay"},
      {"count":2, "type":"delay"},
      {"count":8, "dx":3.25, "dy":-1.75, "type":"half speed"},
      {"count":22, "type":"pose"},
      {"count":2, "dx":0.75, "dy":1.75, "type":""},
      {"count":3, "type":"left"}
    ],
    "color":"orange"
  },
  {
    "name":"Chris Y",
    "start":"middle right",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":128, "type":"delay"},
      {"count":4, "type":"delay"},
      {"count":8, "dx":4, "dy":0, "type":"half speed"},
      {"count":24, "type":"pose"},
      {"count":3, "type":"left"}
    ],
    "color":"orange"
  },
  {
    "name":"Jenett",
    "start":"middle left",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":128, "type":"delay"},
      {"count":4, "type":"delay"},
      {"count":6, "type":"delay"},
      {"count":8, "dx":0, "dy":-4, "type":"half speed"},
      {"count":18, "type":"pose"},
      {"count":2, "dx":-1.75, "dy":0.75, "type":""},
      {"count":2, "dx":-1.5, "dy":1.5, "type":""},
      {"count":2, "dx":-0.75, "dy":1.75, "type":""},
      {"count":3, "type":"right"}
    ],
    "color":"green"
  },
  {
    "name":"Jereny G",
    "start":"middle left",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":128, "type":"delay"},
      {"count":4, "type":"delay"},
      {"count":4, "type":"delay"},
      {"count":8, "dx":-1.75, "dy":-3.25, "type":"half speed"},
      {"count":20, "type":"pose"},
      {"count":2, "dx":-1.5, "dy":1.5, "type":""},
      {"count":2, "dx":-0.75, "dy":1.75, "type":""},
      {"count":3, "type":"right"}
    ],
    "color":"green"
  },
  {
    "name":"Allysa",
    "start":"middle left",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":128, "type":"delay"},
      {"count":4, "type":"delay"},
      {"count":2, "type":"delay"},
      {"count":8, "dx":-3.25, "dy":-1.75, "type":"half speed"},
      {"count":22, "type":"pose"},
      {"count":2, "dx":-0.75, "dy":1.75, "type":""},
      {"count":3, "type":"right"}
    ],
    "color":"green"
  },
  {
    "name":"Michelle F",
    "start":"middle left",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":128, "type":"delay"},
      {"count":4, "type":"delay"},
      {"count":8, "dx":-4, "dy":0, "type":"half speed"},
      {"count":24, "type":"pose"},
      {"count":3, "type":"right"}
    ],
    "color":"green"
  },
  {
    "name":"Sabrina",
    "start":"middle right",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":160, "type":"delay"},
      {"count":4, "type":"delay"},
      {"count":24, "type":"up half speed"},
      {"count":8, "type":"pose"},
      {"count":10, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"Iris",
    "start":"middle right",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":160, "type":"delay"},
      {"count":8, "type":"delay"},
      {"count":16, "dx":1, "dy":-8, "type":"half speed"},
      {"count":12, "type":"pose"},
      {"count":4, "type":"up"},
      {"count":1, "type":"diag sw"},
      {"count":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"Jen",
    "start":"middle right",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":160, "type":"delay"},
      {"count":12, "type":"delay"},
      {"count":8, "dx":1, "dy":-4, "type":"half speed"},
      {"count":16, "type":"pose"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag sw"},
      {"count":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"Jeremy R",
    "start":"middle right",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":160, "type":"delay"},
      {"count":16, "type":"delay"},
      {"count":12, "dx":5, "dy":-4, "type":"half speed"},
      {"count":8, "type":"pose"},
      {"count":4, "type":"left"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag sw"},
      {"count":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"Cynthia",
    "start":"middle right",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":160, "type":"delay"},
      {"count":20, "type":"delay"},
      {"count":8, "dx":5, "dy":0, "type":"half speed"},
      {"count":8, "type":"pose"},
      {"count":4, "type":"up"},
      {"count":4, "type":"left"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag sw"},
      {"count":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"Eric",
    "start":"middle left",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":160, "type":"delay"},
      {"count":4, "type":"delay"},
      {"count":24, "type":"up half speed"},
      {"count":8, "type":"pose"},
      {"count":10, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"June (S)",
    "start":"middle left",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":160, "type":"delay"},
      {"count":8, "type":"delay"},
      {"count":16, "dx":-1, "dy":-8, "type":"half speed"},
      {"count":12, "type":"pose"},
      {"count":4, "type":"up"},
      {"count":1, "type":"diag se"},
      {"count":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"Peter",
    "start":"middle left",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":160, "type":"delay"},
      {"count":12, "type":"delay"},
      {"count":8, "dx":-1, "dy":-4, "type":"up half speed"},
      {"count":16, "type":"pose"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag se"},
      {"count":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"Dom",
    "start":"middle left",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":160, "type":"delay"},
      {"count":16, "type":"delay"},
      {"count":12, "dx":-5, "dy":-4, "type":"half speed"},
      {"count":8, "type":"pose"},
      {"count":4, "type":"right"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag se"},
      {"count":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"Michele T",
    "start":"middle left",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":160, "type":"delay"},
      {"count":20, "type":"delay"},
      {"count":8, "dx":-5, "dy":0, "type":"half speed"},
      {"count":8, "type":"pose"},
      {"count":4, "type":"up"},
      {"count":4, "type":"right"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag se"},
      {"count":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"C3O1",
    "start":"right",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":192, "type":"delay"},
      {"count":4, "type":"delay"},
      {"count":4, "type":"right"},
      {"count":4, "type":"up"},
      {"count":4, "type":"left"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag sw"},
      {"count":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"C3O2",
    "start":"right",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":192, "type":"delay"},
      {"count":6, "type":"delay"},
      {"count":4, "type":"right"},
      {"count":4, "type":"up"},
      {"count":4, "type":"left"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag sw"},
      {"count":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"C3O3",
    "start":"right",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":192, "type":"delay"},
      {"count":8, "type":"delay"},
      {"count":4, "type":"right"},
      {"count":4, "type":"up"},
      {"count":4, "type":"left"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag sw"},
      {"count":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"C3O4",
    "start":"right",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":192, "type":"delay"},
      {"count":10, "type":"delay"},
      {"count":4, "type":"right"},
      {"count":4, "type":"up"},
      {"count":4, "type":"left"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag sw"},
      {"count":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"C3O5",
    "start":"right",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":192, "type":"delay"},
      {"count":12, "type":"delay"},
      {"count":4, "type":"right"},
      {"count":4, "type":"up"},
      {"count":4, "type":"left"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag sw"},
      {"count":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"C3O6",
    "start":"right",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":192, "type":"delay"},
      {"count":14, "type":"delay"},
      {"count":4, "type":"right"},
      {"count":4, "type":"up"},
      {"count":4, "type":"left"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag sw"},
      {"count":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"C3O7",
    "start":"right",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":192, "type":"delay"},
      {"count":16, "type":"delay"},
      {"count":4, "type":"right"},
      {"count":4, "type":"up"},
      {"count":4, "type":"left"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag sw"},
      {"count":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"C3O8",
    "start":"right",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":192, "type":"delay"},
      {"count":18, "type":"delay"},
      {"count":4, "type":"right"},
      {"count":4, "type":"up"},
      {"count":4, "type":"left"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag sw"},
      {"count":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"C3O9",
    "start":"right",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":192, "type":"delay"},
      {"count":20, "type":"delay"},
      {"count":4, "type":"right"},
      {"count":4, "type":"up"},
      {"count":4, "type":"left"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag sw"},
      {"count":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"C3O10",
    "start":"right",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":192, "type":"delay"},
      {"count":22, "type":"delay"},
      {"count":4, "type":"right"},
      {"count":4, "type":"up"},
      {"count":4, "type":"left"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag sw"},
      {"count":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"C3O11",
    "start":"right",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":192, "type":"delay"},
      {"count":24, "type":"delay"},
      {"count":4, "type":"right"},
      {"count":4, "type":"up"},
      {"count":4, "type":"left"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag sw"},
      {"count":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"C3O12",
    "start":"right",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":192, "type":"delay"},
      {"count":26, "type":"delay"},
      {"count":4, "type":"right"},
      {"count":4, "type":"up"},
      {"count":4, "type":"left"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag sw"},
      {"count":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"C3O13",
    "start":"right",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":192, "type":"delay"},
      {"count":28, "type":"delay"},
      {"count":4, "type":"right"},
      {"count":4, "type":"up"},
      {"count":4, "type":"left"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag sw"},
      {"count":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"C3O14",
    "start":"right",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":192, "type":"delay"},
      {"count":30, "type":"delay"},
      {"count":4, "type":"right"},
      {"count":4, "type":"up"},
      {"count":4, "type":"left"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag sw"},
      {"count":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"C3O15",
    "start":"right",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":192, "type":"delay"},
      {"count":32, "type":"delay"},
      {"count":4, "type":"right"},
      {"count":4, "type":"up"},
      {"count":4, "type":"left"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag sw"},
      {"count":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"C3O16",
    "start":"right",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":192, "type":"delay"},
      {"count":34, "type":"delay"},
      {"count":4, "type":"right"},
      {"count":4, "type":"up"},
      {"count":4, "type":"left"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag sw"},
      {"count":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"C3O17",
    "start":"right",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":192, "type":"delay"},
      {"count":36, "type":"delay"},
      {"count":4, "type":"right"},
      {"count":4, "type":"up"},
      {"count":4, "type":"left"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag sw"},
      {"count":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"C3O18",
    "start":"right",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":192, "type":"delay"},
      {"count":38, "type":"delay"},
      {"count":4, "type":"right"},
      {"count":4, "type":"up"},
      {"count":4, "type":"left"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag sw"},
      {"count":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"C3O19",
    "start":"right",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":192, "type":"delay"},
      {"count":40, "type":"delay"},
      {"count":4, "type":"right"},
      {"count":4, "type":"up"},
      {"count":4, "type":"left"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag sw"},
      {"count":9, "type":"down"}
    ],
    "color":"orange"
  },
  {
    "name":"Derrick",
    "start":"right",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":192, "type":"delay"},
      {"count":42, "type":"delay"},
      {"count":4, "type":"right"},
      {"count":4, "type":"up"},
      {"count":4, "type":"left"},
      {"count":7, "type":"up"},
      {"count":1, "type":"diag nw"},
      {"count":32, "type":"pose"}
    ],
    "color":"orange"
  },
  {
    "name":"C3G1",
    "start":"left",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":192, "type":"delay"},
      {"count":4, "type":"delay"},
      {"count":4, "type":"left"},
      {"count":4, "type":"up"},
      {"count":4, "type":"right"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag se"},
      {"count":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"C3G2",
    "start":"left",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":192, "type":"delay"},
      {"count":6, "type":"delay"},
      {"count":4, "type":"left"},
      {"count":4, "type":"up"},
      {"count":4, "type":"right"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag se"},
      {"count":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"C3G3",
    "start":"left",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":192, "type":"delay"},
      {"count":8, "type":"delay"},
      {"count":4, "type":"left"},
      {"count":4, "type":"up"},
      {"count":4, "type":"right"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag se"},
      {"count":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"C3G4",
    "start":"left",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":192, "type":"delay"},
      {"count":10, "type":"delay"},
      {"count":4, "type":"left"},
      {"count":4, "type":"up"},
      {"count":4, "type":"right"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag se"},
      {"count":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"C3G5",
    "start":"left",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":192, "type":"delay"},
      {"count":12, "type":"delay"},
      {"count":4, "type":"left"},
      {"count":4, "type":"up"},
      {"count":4, "type":"right"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag se"},
      {"count":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"C3G6",
    "start":"left",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":192, "type":"delay"},
      {"count":14, "type":"delay"},
      {"count":4, "type":"left"},
      {"count":4, "type":"up"},
      {"count":4, "type":"right"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag se"},
      {"count":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"C3G7",
    "start":"left",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":192, "type":"delay"},
      {"count":16, "type":"delay"},
      {"count":4, "type":"left"},
      {"count":4, "type":"up"},
      {"count":4, "type":"right"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag se"},
      {"count":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"C3G8",
    "start":"left",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":192, "type":"delay"},
      {"count":18, "type":"delay"},
      {"count":4, "type":"left"},
      {"count":4, "type":"up"},
      {"count":4, "type":"right"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag se"},
      {"count":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"C3G9",
    "start":"left",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":192, "type":"delay"},
      {"count":20, "type":"delay"},
      {"count":4, "type":"left"},
      {"count":4, "type":"up"},
      {"count":4, "type":"right"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag se"},
      {"count":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"C3G10",
    "start":"left",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":192, "type":"delay"},
      {"count":22, "type":"delay"},
      {"count":4, "type":"left"},
      {"count":4, "type":"up"},
      {"count":4, "type":"right"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag se"},
      {"count":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"C3G11",
    "start":"left",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":192, "type":"delay"},
      {"count":24, "type":"delay"},
      {"count":4, "type":"left"},
      {"count":4, "type":"up"},
      {"count":4, "type":"right"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag se"},
      {"count":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"C3G12",
    "start":"left",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":192, "type":"delay"},
      {"count":26, "type":"delay"},
      {"count":4, "type":"left"},
      {"count":4, "type":"up"},
      {"count":4, "type":"right"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag se"},
      {"count":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"C3G13",
    "start":"left",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":192, "type":"delay"},
      {"count":28, "type":"delay"},
      {"count":4, "type":"left"},
      {"count":4, "type":"up"},
      {"count":4, "type":"right"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag se"},
      {"count":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"C3G14",
    "start":"left",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":192, "type":"delay"},
      {"count":30, "type":"delay"},
      {"count":4, "type":"left"},
      {"count":4, "type":"up"},
      {"count":4, "type":"right"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag se"},
      {"count":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"C3G15",
    "start":"left",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":192, "type":"delay"},
      {"count":32, "type":"delay"},
      {"count":4, "type":"left"},
      {"count":4, "type":"up"},
      {"count":4, "type":"right"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag se"},
      {"count":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"C3G16",
    "start":"left",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":192, "type":"delay"},
      {"count":34, "type":"delay"},
      {"count":4, "type":"left"},
      {"count":4, "type":"up"},
      {"count":4, "type":"right"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag se"},
      {"count":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"C3G17",
    "start":"left",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":192, "type":"delay"},
      {"count":36, "type":"delay"},
      {"count":4, "type":"left"},
      {"count":4, "type":"up"},
      {"count":4, "type":"right"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag se"},
      {"count":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"C3G18",
    "start":"left",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":192, "type":"delay"},
      {"count":38, "type":"delay"},
      {"count":4, "type":"left"},
      {"count":4, "type":"up"},
      {"count":4, "type":"right"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag se"},
      {"count":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"C3G19",
    "start":"left",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":192, "type":"delay"},
      {"count":40, "type":"delay"},
      {"count":4, "type":"left"},
      {"count":4, "type":"up"},
      {"count":4, "type":"right"},
      {"count":8, "type":"up"},
      {"count":1, "type":"diag se"},
      {"count":9, "type":"down"}
    ],
    "color":"green"
  },
  {
    "name":"Melody T",
    "start":"left",
    "pre_moves":[
      {"count":188, "type":"delay"},
      {"count":192, "type":"delay"},
      {"count":42, "type":"delay"},
      {"count":4, "type":"left"},
      {"count":4, "type":"up"},
      {"count":4, "type":"right"},
      {"count":7, "type":"up"},
      {"count":1, "type":"diag ne"},
      {"count":32, "type":"pose"}
    ],
    "color":"green"
  }
]
