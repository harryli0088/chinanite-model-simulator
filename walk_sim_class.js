class WalkSimulator {
  constructor(canvas,pre_sections,pre_comments,models) {
    this.rect_width = 560; //width the T occupies
    this.rect_height = 560; //height the T occupies
    this.radius = 10; //pixel size of model radius
    this.step = 40; //pixel size of model step
    this.sections = []; //empty array to store song sections
    this.comments = []; // empty array to store comments
    this.comments_delay = 0;
    this.model_names = []; //array to binary insert model names

    this.canvas = canvas;
    this.canvas_context = this.canvas.getContext('2d');
    this.canvas_context.canvas.height = 600;
    this.canvas_context.canvas.width = 1000;
    this.canvas_context.font = "15px Arial"; //font size and type

    window.addEventListener('keydown',(e)=>this.key(e));

    this.move_index = -1; //which move to load first

    this.process_models();
    this.process_pre_sections();
    this.process_pre_comments();
    this.draw_everything();
  }

  text_bold(text,x,y) {
    this.canvas_context.font = "bold 15px Arial";
    this.canvas_context.fillText(text,x,y);
    this.canvas_context.font = "15px Arial";
  }

  /***********************Process Models************************/
  //convert their moves into beat by beat positions and actions
  //add models to a list of all the models in this walk
  process_models() {
    //for each model
    for(var i=0; i<models.length; ++i) {
      //pre set starting positions
      //left - middle left - middle - middle right - right
      if(typeof models[i].start == "string") {
        //if the starting position includes the word "middle"
        if(models[i].start.indexOf("middle") !== -1) {
          //if starting middle left
          if(models[i].start.indexOf("left") !== -1) {
            models[i].x = this.rect_width/2 - this.step;
          }
          //if starting middle right
          else if(models[i].start.indexOf("right") !== -1) {
            models[i].x = this.rect_width/2 + this.step;
          }
          //else just middle
          else {
            models[i].x = this.rect_width/2;
          }
        }
        //if starting left
        else if(models[i].start.indexOf("left") !== -1) {
          models[i].x = this.rect_width/2 - 2*this.step;
        }
        //if starting right
        else if(models[i].start.indexOf("right") !== -1) {
          models[i].x = this.rect_width/2 + 2*this.step;
        }
        models[i].y = this.rect_height-20; //all set starting positions start at bottom of T
      }
      //custom starting position
      else {
        models[i].x = models[i].start[0];
        models[i].y = models[i].start[1];
      }

      //for each of this model's pre moves
      for(var j=0; j<models[i].pre_moves.length; ++j) {
        var count = 0;
        //while we are below the count length
        while(count < models[i].pre_moves[j][0]) {
          //if the move is a string
          if(typeof models[i].pre_moves[j][1] == "string") {
            var move = models[i].pre_moves[j][1];
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
              this.recordModelNewPosition(i)

              //push half speed delay
              models[i].moves.push({dx:0,dy:0,move:"pause"});
              ++count;
            }
          }
          //otherwise the move is custom
          else {
            //manually calculate move
            var duration = models[i].pre_moves[j][0];
            var dx = models[i].pre_moves[j][1] / duration;
            var dy = models[i].pre_moves[j][2] / duration;

            //check if there is a custom move description
            var move = "walk";
            if(models[i].pre_moves[j][3]) {
              move = models[i].pre_moves[j][3];
            }

            //if the model is moving at half speed
            if(move.indexOf("half speed") !== -1) {
              //record double the half step to make a regular step
              models[i].moves.push({dx:2*dx,dy:2*dy,move:move});

              this.recordModelNewPosition(i)

              //push half speed delay
              models[i].moves.push({dx:0,dy:0,move:"pause"});
              ++count;
            }
            else {
              models[i].moves.push({dx:dx,dy:dy,move:move});
            }
          }

          this.recordModelNewPosition(i)

          //increase count
          ++count;
        }
      }

      this.binary_insert(models[i].name,this.model_names); //binary inser this model into the list
    }
  }

  //binary insert function taken from https://gist.github.com/eloone/11342252
  binary_insert(value, array, startVal, endVal){
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
  		this.binary_insert(value, array, start, m - 1);
  		return;
  	}
  	if(value > array[m]){
  		this.binary_insert(value, array, m + 1, end);
  		return;
  	}
  	//we don't insert duplicates
  }

  //function used to get and record the new model position
  recordModelNewPosition(i) {
    //get new model position
    models[i].x += this.step * models[i].moves[models[i].moves.length-1].dx;
    models[i].y += this.step * models[i].moves[models[i].moves.length-1].dy;
    //record new model position
    models[i].moves[models[i].moves.length-1].x = models[i].x;
    models[i].moves[models[i].moves.length-1].y = models[i].y;
  }

  /***********************Process pre_sections************************/
  //convert pre_sections into beat by beat section titles
  process_pre_sections() {
    for(var i=0; i<pre_sections.length; ++i) {
      var section_cnt = 0;
      for(var j=0; j<pre_sections[i][0]; ++j) {
        //multiply by specified cts
        for(var k=0; k<pre_sections[i][1]; ++k) {
          this.sections.push({measure_size:pre_sections[i][1],measure_cnt:k,section_cnt:section_cnt,title:pre_sections[i][2]});
          ++section_cnt;
        }
      }
    }
  }


  /***********************Process pre_comments************************/
  //convert pre_comments into beat by beat comments
  process_pre_comments() {
    for(var i=0; i<pre_comments.length; ++i) {
      //push empty comment while advancing to next comment
      while(this.comments_delay+1 < pre_comments[i][0]) {
        this.comments.push("");
        ++this.comments_delay;
      }
      //push comment
      while(this.comments_delay < pre_comments[i][1]) {
        this.comments.push(pre_comments[i][2]);
        ++this.comments_delay;
      }
    }
  }

  /***********************Draw functions************************/
  draw_t() {
    //clear entire canvas
    this.canvas_context.fillStyle = 'white';
    this.canvas_context.fillRect(0,0,canvas.width,canvas.height);
    //gray boxes
    this.canvas_context.fillStyle = '#bbbbbb';
    this.canvas_context.fillRect(160,0,240,340);
    this.canvas_context.fillRect(0,this.rect_height-220,this.rect_width,220);
    //white T
    this.canvas_context.fillStyle = 'white';
    this.canvas_context.fillRect(180,20,200,340);
    this.canvas_context.fillRect(20,this.rect_height-200,this.rect_width-40,180);
  }

  draw_key() {
    //key
    this.canvas_context.fillStyle = 'black';
    this.text_bold("Key:",20,50);

    //walk
    this.draw_circle(20, 100, this.radius);
    this.canvas_context.fillText("Walk",50,110);
    //pose
    this.draw_star(20, 150, 5, 1.5*this.radius, 3*this.radius/4);
    this.canvas_context.fillText("Pose",50,160);
    //pivot
    this.draw_triangle(20, 200);
    this.canvas_context.fillText("Pivot",50,210);
    //kneel
    this.canvas_context.fillRect(20-this.radius, 250-this.radius,2*this.radius,2*this.radius);
    this.canvas_context.fillText("Kneel",50,260);
    //twirl
    this.draw_circle(20, 300, this.radius);
    this.canvas_context.fillText("Twirl",50,310);
    this.canvas_context.fillStyle = 'white';
    this.draw_circle(20, 300, this.radius/2);


    //model names in this walk
    this.canvas_context.fillStyle = 'black';
    this.text_bold("Models in this walk:",600,300);
    for(var i=0; i<this.model_names.length; ++i) {
      //draw columns with names
      var max_rows = 13;
      this.canvas_context.fillText(this.model_names[i],600 + 100*(Math.floor(i/max_rows)),320 + 20*i - max_rows*20*Math.floor(i/max_rows));
    }
  }


  draw_model(model) {
    //is move index is in range
    if(this.move_index>=0 && this.move_index<model.moves.length) {
      //update model position
      model.x = model.moves[this.move_index].x;
      model.y = model.moves[this.move_index].y;

      //draw if model is not delaying
      if(model.moves[this.move_index].move != "delay") {
        //models are translucent
        this.canvas_context.globalAlpha = 0.8;

        //switch to model color
        this.canvas_context.fillStyle = model.color;
        //pose
        if(model.moves[this.move_index].move == "pose") {
          this.draw_star(model.x, model.y, 5, 1.5*this.radius, 3*this.radius/4);
        }
        //pivot
        else if(model.moves[this.move_index].move.indexOf("pivot") !== -1) {
          this.draw_triangle(model.x, model.y);
        }
        //kneel
        else if(model.moves[this.move_index].move.indexOf("kneel") !== -1) {
          this.canvas_context.fillRect(model.x-this.radius, model.y-this.radius,2*this.radius,2*this.radius);
        }
        //twirl
        else if(model.moves[this.move_index].move.indexOf("twirl") !== -1) {
          this.draw_circle(model.x, model.y, this.radius);
          this.canvas_context.fillStyle = 'white';
          this.canvas_context.globalAlpha = 1;
          this.draw_circle(model.x, model.y, this.radius/2);
        }
        //regularly walking
        else {
          this.draw_circle(model.x, model.y, this.radius);
        }

        //model label
        this.canvas_context.globalAlpha = 1;
        this.canvas_context.fillStyle = "black";
        this.canvas_context.fillText(model.name,model.x-model.name.length*4,model.y-this.radius-10);
      }
    }
  }
  //initial drawing of models
  initial_draw_models() {
    for(var i=0; i<models.length; ++i) {
      this.draw_model(models[i]);
    }
  }



  //draw shape functions were taken from stackoverflow
  draw_star(cx, cy, spikes, outerRadius, innerRadius) {
    var rot = Math.PI / 2 * 3;
    var x = cx;
    var y = cy;
    var step = Math.PI / spikes;

    this.canvas_context.strokeSyle = "#000";
    this.canvas_context.beginPath();
    this.canvas_context.moveTo(cx, cy - outerRadius)
    for(var i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      this.canvas_context.lineTo(x, y)
      rot += step

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      this.canvas_context.lineTo(x, y)
      rot += step
    }
    this.canvas_context.lineTo(cx, cy - outerRadius)
    this.canvas_context.closePath();
    this.canvas_context.fill();

  }

  draw_triangle(x,y) {
    this.canvas_context.beginPath();
    this.canvas_context.moveTo(x,y-this.radius);
    this.canvas_context.lineTo(x+this.radius, y+this.radius);
    this.canvas_context.lineTo(x-this.radius, y+this.radius);
    this.canvas_context.fill();
  }

  draw_count() {
    this.canvas_context.fillStyle = "black";

    if(this.move_index >= 0) {
      this.canvas_context.fillText(this.sections[this.move_index].title+"  "+this.sections[this.move_index].measure_size+"cts: "+(Math.floor(this.sections[this.move_index].section_cnt/this.sections[this.move_index].measure_size) + 1),420,150);
      this.canvas_context.fillText("Count: "+(this.sections[this.move_index].measure_cnt+1),420,200);
    }

    if(this.move_index>=0 && this.move_index<this.comments.length) {
      this.canvas_context.fillText("Comments: "+this.comments[this.move_index],420,250);
    }
  }

  draw_circle(x,y,r) {
    this.canvas_context.beginPath();
    this.canvas_context.arc(x, y, r, 0, 2 * Math.PI, 0);
    this.canvas_context.fill();
  }


  draw_everything() {
    this.draw_t();
    this.draw_key();

    //draw each model
    for(var i=0; i<models.length; ++i) {
      this.draw_model(models[i]);
    }

    this.draw_count();
  }


  /*****************Next or previous frame*****************/
  prev() {
    --this.move_index; //decrease move count
    this.draw_everything();
  }

  next() {
    ++this.move_index; //increase move count
    this.draw_everything();
  }


  //next if right arrow, previous if left arrow
  key(e) {
    if(e.keyCode == 39) {this.next();}
    else if(e.keyCode == 37) {this.prev();}
  }

  //reinitializes the simulation at the given move index if provided
  startAt(first_move) {
    this.move_index = typeof first_move=="number" ? first_move-1 : -1; //which move to load if provided, else -1

    this.draw_everything();
  }
}
