var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

let drawLine = (startX, startY, endX, endY) => {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
};
//head
ctx.beginPath();
ctx.arc(250, 100, 50, 0, 2 * Math.PI);
ctx.stroke();

drawLine(250, 150, 250, 350);
drawLine(250, 200, 150, 150);
drawLine(250, 200, 350, 150);
drawLine(250, 350, 225, 450);
drawLine(250, 350, 275, 450);
