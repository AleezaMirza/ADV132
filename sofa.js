sofa="";
status="";

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    // objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    // document.getElementById("status").innerHTML = "Staus: detecting objects";
}

function draw(){
    image(ac, 0, 0, 640, 420);

     fill("#FF0000");
     text("Sofa", 70, 190);

     noFill();
     stroke("#FF0000");
     rect(65, 170, 500, 200);

}


function preload(){
    ac = loadImage('sofa.jpeg');
}

function modelLoaded(){
    console.log("Model Loaded!");
    status=true;
    objectDetector.detect(ac, gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
}