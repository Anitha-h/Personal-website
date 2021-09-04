var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

let drawLine = (startX, startY, endX, endY) => {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
};

let drawCircle = (
  centerX,
  centerY,
  radius,
  StartingAngle,
  EndingAngle,
  color
) => {
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, StartingAngle, EndingAngle);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.stroke();
};
//head

drawCircle(250, 250, 150, 0, 2 * Math.PI, "transparent");

//eyes

let drawEyes = (radius, color) => {
  //left eyes
  drawCircle(300, 200, radius, 0, 2 * Math.PI, color);
  //right eyes
  drawCircle(200, 200, radius, 0, 2 * Math.PI, color);
};
//nose
let drawNose = (type) => {
  //nose type is either crooked or button
  if (type === "crooked") {
    drawLine(250, 225, 200, 275);
    drawLine(200, 275, 250, 275);
  } else {
    drawCircle(250, 250, 20, 0, Math.PI, "transparent");
    drawLine(230, 250, 250, 225);
    drawLine(270, 250, 250, 225);
  }
};

//mouth

let drawMouth = (expression) => {
  //expression either an  surprise,happy or flat
  if (expression === "surprise") {
    drawCircle(250, 325, 40, 0, 2 * Math.PI, "transparent");
  } else if (expression === "happy") {
    drawCircle(250, 300, 40, 0, Math.PI, "transparent");
  } else {
    drawLine(200, 325, 300, 325);
  }
};
let getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let drawRandomFace = () => {
  let eyeradius = getRndInteger(1, 20);
  let eyeColor = ["brown", "blue", "green"][getRndInteger(0, 2)];
  let noseType = ["crooked", "button"][getRndInteger(0, 1)];
  let expression = ["surprise", "happy", "flat"][getRndInteger(0, 2)];
  drawEyes(eyeradius, eyeColor);
  drawNose(noseType);
  drawMouth(expression);
};
drawRandomFace();
