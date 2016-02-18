/* The following Flower data structure is inspired from the HTML5 Canvas Cookbook */

// define Flower constructor
function Flower(context, centerX, centerY, radius, numPetals, color){
  this.context = context;
  this.centerX = centerX;
  this.centerY = centerY;
  this.radius = radius;
  this.numPetals = numPetals;
  this.color = color;

  var context = this.context;

  this.drawPost = function(){
    context.beginPath();
    // draw petals
    for (var n = 0; n < this.numPetals; n++) {
      var theta1 = ((Math.PI * 2) / this.numPetals) * (n + 1);
      var theta2 = ((Math.PI * 2) / this.numPetals) * (n);
      var x1 = (this.radius * Math.sin(theta1)) + this.centerX;
      var y1 = (this.radius * Math.cos(theta1)) + this.centerY;
      var x2 = (this.radius * Math.sin(theta2)) + this.centerX;
      var y2 = (this.radius * Math.cos(theta2)) + this.centerY;
      context.moveTo(this.centerX, this.centerY);
      context.bezierCurveTo(x1, y1, x2, y2, this.centerX, this.centerY);
    }
    context.closePath();
    context.fillStyle = this.color;
    context.fill();
    // draw yellow center
    context.beginPath();
    context.arc(this.centerX, this.centerY, this.radius / 5, 0, 2 * Math.PI, false);
    context.fillStyle = "yellow";
    context.fill();
  };

  this.drawPre = function(){
    // draw colored center of unopened flower
    context.beginPath();
    context.arc(this.centerX, this.centerY, this.radius / 5, 0, 2 * Math.PI, false);
    context.fillStyle = this.color;
    context.fill();
  };

  return this;
}

window.Flower = Flower;
