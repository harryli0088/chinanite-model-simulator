//T squares are 60px
/************************Data************************/
rect_width = 560; //width the T occupies
rect_height = 560; //height the T occupies
radius = 10; //pixel size of model radius
step = 40; //pixel size of model step
move_index = -1; //which move to load first
sections = []; //empty array to store song sections
comments = []; // empty array to store comments


/*******************Initialization*******************/
canvas = document.getElementById('canvas'); //get the canvas
canvas_context = canvas.getContext('2d');
canvas_context.font = "15px Arial"; //font size and type



// /***********************iframe video************************/
// //many youtube music videos are blocked from being embeded, so this is often useless :/
// var iframe = document.createElement('iframe');
// iframe.width = 600;
// iframe.height = 400;
// iframe.frameBorder = "0";
// iframe.src = video_src;
// document.body.appendChild(iframe);


/***********************Convert model preMoves to moves************************/
var model_names = [];
//for each model
for(var i=0; i<models.length; ++i) {
  //set starting positions
  //left - middle left - middle - middle right - right
  if(typeof models[i].start == "string") {
    //if the starting position includes the word middle
    if(models[i].start == "middle") {
      //if starting middle left
      if(models[i].start.indexOf("left") !== -1) {
        models[i].x = rect_width/2 - step;
      }
      //if starting middle right
      else if(models[i].start.indexOf("right") !== -1) {
        models[i].x = rect_width/2 + step;
      }
      //else just middle
      else {
        models[i].x = rect_width/2;
      }
    }
    else if(models[i].start.indexOf("left") !== -1) {
      models[i].x = rect_width/2 - 2*step;
    }
    else if(models[i].start.indexOf("right") !== -1) {
      models[i].x = rect_width/2 + 2*step;
    }
    models[i].y = rect_height-20; //all set starting positions start at bottom of T
  }
  //custom starting position
  else {
    models[i].x = models[i].start[0];
    models[i].y = models[i].start[1];
  }

  //for each of this model's pre moves
  for(var j=0; j<models[i].preMoves.length; ++j) {
    var count = 0;
    //while we are below the count length
    while(count < models[i].preMoves[j][0]) {
      //if the move is a string
      if(typeof models[i].preMoves[j][1] == "string") {
        var move = models[i].preMoves[j][1];
        if(move.indexOf("up") !== -1) {
          models[i].moves.push({dx:0,dy:-1,move:move});
        }
        else if(move.indexOf("down") !== -1) {
          models[i].moves.push({dx:0,dy:1,move:move});
        }
        else if(move=="pose" || move=="delay" || move=="kneel" || move=="pause") {
          models[i].moves.push({dx:0,dy:0,move:move});
        }
        else if(move.indexOf("right") !== -1) {
          models[i].moves.push({dx:1,dy:0,move:move});
        }
        else if(move.indexOf("left") !== -1) {
          models[i].moves.push({dx:-1,dy:0,move:move});
        }
        else if(move.indexOf("diag ne") !== -1) {
          models[i].moves.push({dx:1,dy:-1,move:move});
        }
        else if(move.indexOf("diag se") !== -1) {
          models[i].moves.push({dx:1,dy:1,move:move});
        }
        else if(move.indexOf("diag sw") !== -1) {
          models[i].moves.push({dx:-1,dy:1,move:move});
        }
        else if(move.indexOf("diag nw") !== -1) {
          models[i].moves.push({dx:-1,dy:-1,move:move});
        }

        //if the model is moving at half speed
        if(move.indexOf("half speed") !== -1) {
          recordModelNewPosition(i)

          //push half speed delay
          models[i].moves.push({dx:0,dy:0,move:"pause"});
          ++count;
        }
      }
      //otherwise the move is custom
      else {
        //manually calculate move
        var duration = models[i].preMoves[j][0];
        var dx = models[i].preMoves[j][1] / duration;
        var dy = models[i].preMoves[j][2] / duration;

        //check if there is a custom move description
        var move = "walk";
        if(models[i].preMoves[j][3]) {
          move = models[i].preMoves[j][3];
        }

        //if the model is moving at half speed
        if(move.indexOf("half speed") !== -1) {
          //record double the half step to make a regular step
          models[i].moves.push({dx:2*dx,dy:2*dy,move:move});

          recordModelNewPosition(i)

          //push half speed delay
          models[i].moves.push({dx:0,dy:0,move:"pause"});
          ++count;
        }
        else {
          models[i].moves.push({dx:dx,dy:dy,move:move});
        }
      }

      recordModelNewPosition(i)

      //increase count
      ++count;
    }
  }

  binary_insert(models[i].name,model_names);
}
//binary insert function taken from https://gist.github.com/eloone/11342252
function binary_insert(value, array, startVal, endVal){
	var length = array.length;
	var start = typeof(startVal) != 'undefined' ? startVal : 0;
	var end = typeof(endVal) != 'undefined' ? endVal : length - 1;//!! endVal could be 0 don't use || syntax
	var m = start + Math.floor((end - start)/2);
	if(length == 0){
		array.push(value);
		return;
	}
	if(value > array[end]){
		array.splice(end + 1, 0, value);
		return;
	}
	if(value < array[start]){//!!
		array.splice(start, 0, value);
		return;
	}
	if(start >= end){
		return;
	}
	if(value < array[m]){
		binary_insert(value, array, start, m - 1);
		return;
	}
	if(value > array[m]){
		binary_insert(value, array, m + 1, end);
		return;
	}
	//we don't insert duplicates
}

//function used to get and record the new model position
function recordModelNewPosition(i) {
  //get new model position
  models[i].x += step * models[i].moves[models[i].moves.length-1].dx;
  models[i].y += step * models[i].moves[models[i].moves.length-1].dy;
  //record new model position
  models[i].moves[models[i].moves.length-1].x = models[i].x;
  models[i].moves[models[i].moves.length-1].y = models[i].y;
}



/***********************Convert pre_sections************************/
var sections_delay = 0;
//for all pre sections
for(var i=0; i<pre_sections.length; ++i) {
  var section_cnt = 0;
  for(var j=0; j<pre_sections[i][0]; ++j) {
    //multiply by specified cts
    for(var k=0; k<pre_sections[i][1]; ++k) {
      sections.push({measure_size:pre_sections[i][1],measure_cnt:k,section_cnt:section_cnt,title:pre_sections[i][2],delay:sections_delay});
      ++section_cnt;
    }
  }
  sections_delay += pre_sections[i][0]*8;
}



/***********************Convert pre_comments************************/
//for all pre sections
var comments_delay = 0;
for(var i=0; i<pre_comments.length; ++i) {
  //push empty comment while advancing to next comment
  while(comments_delay+1 < pre_comments[i][0]) {
    comments.push("");
    ++comments_delay;
  }
  while(comments_delay < pre_comments[i][1]) {
    comments.push(pre_comments[i][2]);
    ++comments_delay;
  }
}





// /***********************Process lights************************/
// //for each light
// for(var i=0; i<lights.length; ++i) {
//   //for each of this lights's pre moves
//   for(var j=0; j<lights[i].preMoves.length; ++j) {
//     var count = 0;
//     //while we are below the count length
//     while(count < models[i].preMoves[j][0]) {
//       var move = models[i].preMoves[j][1];
//
//       if(move.indexOf("off") !== -1) {
//         models[i].moves.push({dx:0,dy:-1});
//       }
//       else if(move.indexOf("on") !== -1) {
//         models[i].moves.push({dx:0,dy:1});
//       }
//       else if(move=="pose" || move=="delay" || move=="kneel" || move=="pause") {
//         models[i].moves.push({dx:0,dy:0});
//       }
//       else if(move.indexOf("right") !== -1) {
//         models[i].moves.push({dx:1,dy:0});
//       }
//       else if(move.indexOf("left") !== -1) {
//         models[i].moves.push({dx:-1,dy:0});
//       }
//       else if(move.indexOf("diag ne") !== -1) {
//         models[i].moves.push({dx:1,dy:-1});
//       }
//       else if(move.indexOf("diag se") !== -1) {
//         models[i].moves.push({dx:1,dy:1});
//       }
//       else if(move.indexOf("diag sw") !== -1) {
//         models[i].moves.push({dx:-1,dy:1});
//       }
//       else if(move.indexOf("diag nw") !== -1) {
//         models[i].moves.push({dx:-1,dy:-1});
//       }
//
//       //record move
//       models[i].moves[models[i].moves.length-1].move = move;
//
//
//
//       //get new model position
//       models[i].x += step * models[i].moves[models[i].moves.length-1].dx;
//       models[i].y += step * models[i].moves[models[i].moves.length-1].dy;
//
//       //record new model position
//       models[i].moves[models[i].moves.length-1].x = models[i].x;
//       models[i].moves[models[i].moves.length-1].y = models[i].y;
//
//       //increase count
//       ++count;
//     }
//   }
// }

draw_light = function(light) {
  //is move index is in range
  if(move_index>=0 && move_index<light.moves.length) {
    //update model position
    model.x = model.moves[move_index].x;
    model.y = model.moves[move_index].y;

    //draw if model is not delaying
    if(model.moves[move_index].move != "delay") {
      //models are translucent
      canvas_context.globalAlpha = 0.8;

      //switch to model color
      canvas_context.fillStyle = model.color;
      //pose
      if(model.moves[move_index].move == "pose") {
        drawStar(model.x, model.y, 5, 1.5*radius, 3*radius/4);
      }
      //pivot
      else if(model.moves[move_index].move.indexOf("pivot") !== -1) {
        drawTriangle(model.x, model.y);
      }
      //kneel
      else if(model.moves[move_index].move.indexOf("kneel") !== -1) {
        canvas_context.fillRect(model.x-radius, model.y-radius,2*radius,2*radius);
      }
      //twirl
      else if(model.moves[move_index].move.indexOf("twirl") !== -1) {
        drawCircle(model.x, model.y, radius);
        canvas_context.fillStyle = 'white';
        canvas_context.globalAlpha = 1;
        drawCircle(model.x, model.y, radius/2);
      }
      //regularly walking
      else {
        drawCircle(model.x, model.y, radius);
      }

      //model label
      canvas_context.globalAlpha = 1;
      canvas_context.fillStyle = "black";
      canvas_context.fillText(model.name,model.x-model.name.length*4,model.y-radius-10);
    }
  }
}



/***********************Draw functions************************/
drawT = function() {
  //clear entire canvas
  canvas_context.fillStyle = 'white';
  canvas_context.fillRect(0,0,canvas.width,canvas.height);
  //gray boxes
  canvas_context.fillStyle = '#bbbbbb';
  canvas_context.fillRect(160,0,240,340);
  canvas_context.fillRect(0,rect_height-220,rect_width,220);
  //white T
  canvas_context.fillStyle = 'white';
  canvas_context.fillRect(180,20,200,340);
  canvas_context.fillRect(20,rect_height-200,rect_width-40,180);

  //key
  canvas_context.fillStyle = 'black';
  canvas_context.fillText("Key:",20,50);

  //walk
  drawCircle(20, 100, radius);
  canvas_context.fillText("Walk",50,110);
  //pose
  drawStar(20, 150, 5, 1.5*radius, 3*radius/4);
  canvas_context.fillText("Pose",50,160);
  //pivot
  drawTriangle(20, 200);
  canvas_context.fillText("Pivot",50,210);
  //kneel
  canvas_context.fillRect(20-radius, 250-radius,2*radius,2*radius);
  canvas_context.fillText("Kneel",50,260);
  //twirl
  drawCircle(20, 300, radius);
  canvas_context.fillText("Twirl",50,310);
  canvas_context.fillStyle = 'white';
  drawCircle(20, 300, radius/2);


  //model names in this walk
  canvas_context.fillStyle = 'black';
  canvas_context.fillText("Models in this walk:",600,300);
  for(var i=0; i<model_names.length; ++i) {
    //draw columns with names
    var max_rows = 10;
    canvas_context.fillText(model_names[i],600 + 100*(Math.floor(i/max_rows)),320 + 20*i - 200*Math.floor(i/max_rows));
  }

}
drawT();

draw_model = function(model) {
  //is move index is in range
  if(move_index>=0 && move_index<model.moves.length) {
    //update model position
    model.x = model.moves[move_index].x;
    model.y = model.moves[move_index].y;

    //draw if model is not delaying
    if(model.moves[move_index].move != "delay") {
      //models are translucent
      canvas_context.globalAlpha = 0.8;

      //switch to model color
      canvas_context.fillStyle = model.color;
      //pose
      if(model.moves[move_index].move == "pose") {
        drawStar(model.x, model.y, 5, 1.5*radius, 3*radius/4);
      }
      //pivot
      else if(model.moves[move_index].move.indexOf("pivot") !== -1) {
        drawTriangle(model.x, model.y);
      }
      //kneel
      else if(model.moves[move_index].move.indexOf("kneel") !== -1) {
        canvas_context.fillRect(model.x-radius, model.y-radius,2*radius,2*radius);
      }
      //twirl
      else if(model.moves[move_index].move.indexOf("twirl") !== -1) {
        drawCircle(model.x, model.y, radius);
        canvas_context.fillStyle = 'white';
        canvas_context.globalAlpha = 1;
        drawCircle(model.x, model.y, radius/2);
      }
      //regularly walking
      else {
        drawCircle(model.x, model.y, radius);
      }

      //model label
      canvas_context.globalAlpha = 1;
      canvas_context.fillStyle = "black";
      canvas_context.fillText(model.name,model.x-model.name.length*4,model.y-radius-10);
    }
  }
}
//initial drawing of models
for(var i=0; i<models.length; ++i) {
  draw_model(models[i]);
}



function drawStar(cx, cy, spikes, outerRadius, innerRadius) {
  var rot = Math.PI / 2 * 3;
  var x = cx;
  var y = cy;
  var step = Math.PI / spikes;

  canvas_context.strokeSyle = "#000";
  canvas_context.beginPath();
  canvas_context.moveTo(cx, cy - outerRadius)
  for(var i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    canvas_context.lineTo(x, y)
    rot += step

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    canvas_context.lineTo(x, y)
    rot += step
  }
  canvas_context.lineTo(cx, cy - outerRadius)
  canvas_context.closePath();
  canvas_context.fill();

}

function drawTriangle(x,y) {
  canvas_context.beginPath();
  canvas_context.moveTo(x,y-radius);
  canvas_context.lineTo(x+radius, y+radius);
  canvas_context.lineTo(x-radius, y+radius);
  canvas_context.fill();
}

function draw_count() {
  canvas_context.fillStyle = "black";

  //canvas_context.fillText("Total 8cts: "+(Math.floor(move_index/8) + 1),420,100);
  canvas_context.fillText(sections[move_index].title+"  "+sections[move_index].measure_size+"cts: "+(Math.floor(sections[move_index].section_cnt/sections[move_index].measure_size) + 1),420,150);
  canvas_context.fillText("Count: "+(sections[move_index].measure_cnt+1),420,200);

  if(move_index < comments.length) {
    canvas_context.fillText("Comments: "+comments[move_index],420,250);
  }
}

function drawCircle(x,y,r) {
  canvas_context.beginPath();
  canvas_context.arc(x, y, r, 0, 2 * Math.PI, 0);
  canvas_context.fill();
}


function draw_everything() {
  //reset T
  drawT();

  //draw each model
  for(var i=0; i<models.length; ++i) {
    draw_model(models[i]);
  }

  //draw count
  draw_count();

  console.log(move_index);
}


/*****************Next or previous frame*****************/
prev = function() {
  --move_index; //decrease move count

  draw_everything();
}

next = function() {
  ++move_index; //increase move count

  draw_everything();
}


//next if right arrow, previous if left arrow
key = function(e){
  if(e.keyCode == 39) {
    next();
  }
  else if(e.keyCode == 37) {
    prev();
  }
}
window.addEventListener('keydown',key);
