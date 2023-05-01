img = "";
status = "";

function preload() {
    img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(480, 360);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}

function draw() {
    image(img, 0, 0, 480, 360);
    fill("#FF0000");
    text("Dog", 33.75, 56.25);
    noFill();
    stroke("#FF0000");
    rect(22.5, 45, 337.5, 262.5);

    fill("#FF0000");
    text("Cat", 240, 90);
    noFill();
    stroke("#FF0000");
    rect(225, 67.5, 202.5, 240);
}