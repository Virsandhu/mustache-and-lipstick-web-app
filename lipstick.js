noseX=0;
noseY=0;

function preload(){
    img = loadImage('https://i.postimg.cc/g0J0XMfG/lipstick.png')
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide()

    posNet= ml5.poseNet(video, modelLoaded)
    posNet.on('pose',gotPoses)

}
function modelLoaded(){
    console.log("Posnet is ready");
}

function draw(){
    image(video,0,0,300,300)
    
    image(img,noseX,noseY,50,30)

}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x -22 ;
        noseY=results[0].pose.nose.y +11;
        console.log("nose x =" + noseX);
        console.log("nose y =" + noseY);
        
    }
    
}


function take_snapshot(){
    save('my-lipstick-filter')
}
