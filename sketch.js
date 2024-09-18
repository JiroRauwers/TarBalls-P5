// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
var balls = []

function setup() {
  createCanvas(200, 400);
  console.log(width, height);
  colorMode(HSB);
  loadPixels();
  for (let i = 0; i < 8; i++) {
    balls.push(new Ball(random(width), random(height), random(50, 150)));
  }
  frameRate(30);
}

let frameCount = 0;
function draw() {
  for (x = 0; x < width; x++) {
    for (y = 0; y < height; y++) {
      let sum = 0;
      for (i = 0; i < balls.length; i++) {
        let ball = balls[i];
        let xdif = x - ball.x;
        let ydif = y - ball.y;
        // https://matiaslavik.wordpress.com/computer-graphics/metaball-rendering/
        let d = sqrt((xdif * xdif) + (ydif * ydif));
        sum += (10 * ball.r / d)
      }

      set(x, y, color(sum, 255, 255));
    }
  }
  updatePixels();

  for (i = 0; i < balls.length; i++) {
    balls[i].update();
  }
}
