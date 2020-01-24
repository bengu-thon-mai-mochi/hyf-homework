/*
const canvasEl = document.getElementById("my-canvas");
const canvasContext = canvasEl.getContext("2d");

console.log(canvasContext);

const centerX = canvasEl.width / 2;
const centerY = canvasEl.height / 2;
const radius = 70;

canvasContext.beginPath();
canvasContext.arc(centerX, centerY, radius, 0, 2 * Math.PI);
canvasContext.fillStyle = "pink";
canvasContext.fill();
canvasContext.lineWidth = 10;
canvasContext.strokeStyle = '#003300';
context.stroke();
*/

const canvasEl = document.getElementById("my-canvas");
const canvasContext = canvasEl.getContext("2d");
canvasEl.width = window.innerWidth;
canvasEl.height = window.innerHeight;

class Circle {
  constructor(centerX, centerY, radius, startAngle, endAngle, fillColor) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }

  draw() {
    canvasContext.beginPath();
    canvasContext.arc(
      this.centerX,
      this.centerY,
      this.radius,
      this.startAngle,
      this.endAngle * Math.PI
    );
    canvasContext.fillStyle = this.fillColor;
    canvasContext.fill();
  }
}

const circle1 = new Circle(50, 50, 20, 0, 2, "pink");
circle1.draw();

const circle2 = new Circle(75, 59, 10, 0, 2, "blue");
circle2.draw();

function createNewClassObj() {
  const randomX = Math.floor(Math.random() * 501);
  const randomY = Math.floor(Math.random() * 501);
  const randomColor = getRandomColor();
  const randomRadius = Math.floor(Math.random() * 31);
  const circle3 = new Circle(randomX, randomY, randomRadius, 0, 2, randomColor);
  circle3.draw();
  console.log(circle3);
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//window.setInterval(createNewClassObj, 500);

canvasEl.addEventListener("mousemove", drawCircleWhereCursorMoves);

function drawCircleWhereCursorMoves(e) {
  let xCursor = e.clientX;
  let yCursor = e.clientY;
  const randomRadius = Math.floor(Math.random() * 31);
  const randomColor = getRandomColor();
  const circle4 = new Circle(xCursor, yCursor, randomRadius, 0, 2, randomColor);
  circle4.draw();
}
