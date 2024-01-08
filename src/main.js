const canvas =document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const w_width = canvas.width = window.innerWidth;
const w_height = canvas.height =  window.innerHeight;

//road
ctx.beginPath();
ctx.fillStyle = "black";
ctx.fillRect(w_width/2-200,0,400,w_height);
ctx.fill();
ctx.closePath();

//road_stript
ctx.beginPath();
ctx.fillStyle = "white";
ctx.fillRect(w_width/2-5,0,6,w_height);
ctx.closePath();

//vehicle
ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.fillRect(w_width/2-100,w_height/2+200,80,120);
ctx.closePath();

//vehicle_tyre
ctx.beginPath();
ctx.fillStyle = "gray";
ctx.fillRect(w_width/2-20,w_height/2+215,10,20);//right_1
ctx.fillRect(w_width/2-20,w_height/2+285,10,20);//right_2
ctx.fillRect(w_width/2-110,w_height/2+215,10,20);//left_1
ctx.fillRect(w_width/2-110,w_height/2+285,10,20);//left_2
ctx.closePath();


//first_Enemy_vehicle
ctx.beginPath();
ctx.fillStyle = "red";
ctx.fillRect(w_width/2-100,w_height/2-300,80,120);
ctx.closePath();


//Enemy_vehicle_tyre
ctx.beginPath();
ctx.fillStyle = "gray";
ctx.fillRect(w_width/2-20,w_height/2-285,10,20);//right_1
ctx.fillRect(w_width/2-20,w_height/2-215,10,20);//right_2
ctx.fillRect(w_width/2-110,w_height/2-285,10,20);//left_1
ctx.fillRect(w_width/2-110,w_height/2-215,10,20);//left_2
ctx.closePath();

//Second_Enemy_vehicle
ctx.beginPath();
ctx.fillStyle = "red";
ctx.fillRect(w_width/2+100,w_height/2-50,80,120);
ctx.closePath();


//Enemy_vehicle_tyre
ctx.beginPath();
ctx.fillStyle = "gray";
ctx.fillRect(w_width/2+180,w_height/2-30,10,20);//right_1
ctx.fillRect(w_width/2+90,w_height/2-30,10,20);//left_1
ctx.fillRect(w_width/2+180,w_height/2+30,10,20);//right_2
ctx.fillRect(w_width/2+90,w_height/2+30,10,20);//left_2
ctx.closePath();




