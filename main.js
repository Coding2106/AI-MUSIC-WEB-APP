song="";
leftWrist=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload()
{
   song1=loadSound("harry_potter.mp3"); 
   song2=loadSound("peter_pan.mp3"); 
}

function setup(){
    canvas=createCanvas(600, 500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function Play()
{
    song1.play();
    song1.setVolume(1);
    song1.rate(1);
    song2.stop();
}

function Stay()
{
    song2.play();
    song2.setVolume(1);
    song2.rate(1);
    song1.stop();
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX="+ leftWristX+"leftWristY="+ leftWristY);

        leftWristX=results[0].pose.leftWrist.x;
        righttWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX="+ rightWristX+"righttWristY="+ rightWristY);
    }
}