difference = 0;
rightWristX = 0;
leftWristX = 0;

function preload()
{

}

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background("#FFAB40");
    textSize("difference");
    fill("#651FFF");
    text("DHRUV", 10, 100);
    document.getElementById("span").innerHTML = "Size of text" + difference+"px";
}
function modelLoaded()
{
    console.log("PoseNet is initialized!");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX" + rightWristX + "Difference" + difference);
    }
}