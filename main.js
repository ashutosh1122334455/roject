function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_color);

    fill(0,128,0);
  stroke(0,128,0);
  circle(40,70,70);
  circle(500,70,70);
  circle(500,370,70);
  circle(40,370,70);
  rect(70,40,400,55);
  rect(70,345,400,55);
  rect(10,90,55,270);
  rect(480,90,55,270)
}

function take_snapshot(){
    save('student_name.png');
}

