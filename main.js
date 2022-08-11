noseX=0;
noseY=0;
difference=0;
wristleftx=0;
wristrightx=0;


function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,100);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function gotPoses(results){
  if(results.length>0){
     console.log(results);
     noseX = results[0].pose.nose.x;
     noseY = results[0].pose.nose.y;
     console.log(noseX);
     console.log(noseY);
     wristleftx = results[0].pose.leftWrist.x;
     wristrightx = results[0].pose.rightWrist.x;
     console.log(wristleftx);
     console.log(wristrightx);
    difference = floor(wristleftx-wristrightx);
    console.log(difference);
      

  }
}
function modelLoaded(){
    console.log('posenet is loaded');
}
function draw(){
   background('#FFFFFF');
   document.getElementById("square_side").innerHTML="width and the height is " + difference + "px";
   fill ('blue');
   stroke('black');

   square(noseX,noseY,difference);
}