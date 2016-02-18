$('document').ready(function(){
  var canvas = $("#myCanvas")[0];
  var context = canvas.getContext("2d");
  context.font="200px Arial";

  var colorArray = ["red", "orange", "purple", "blue", "green"];
  // make flowers
  var Flower = window.Flower;
  // define number of flowers
  var numFlowers = 29;
  var flowers = [];


  function init(){
    flowers = [];
    // draw randomly placed flowers
    for (var n = 0; n < numFlowers; n++) {
      var centerX = Math.random() * canvas.width;
      var centerY = Math.random() * canvas.height;
      var radius = (Math.random() * 50) + 25;
      var colorIndex = Math.round(Math.random() * (colorArray.length - 1));
      var thisFlower = new Flower(context, centerX, centerY, radius, 5, colorArray[colorIndex]);
      flowers.push(thisFlower);
    }
  }

  function renderFlowers(open){
    // draw randomly placed flowers
    for (var n = 0; n < numFlowers; n++) {
      if(!open){
        flowers[n].drawPre();
      }else{
        flowers[n].drawPost();
      }
    }
  }

  function renderWriting(){
    // animate writing
    var message = "الله";
    var yOffsets = [300, 325, 325, 290];
    var xOffsets = [530, 460, 378, 310];

    // render writing 
    for(var i in message){
      context.fillStyle = 'black';
      context.fillText(message[i], xOffsets[i], yOffsets[i]);
    }
  }

  function animate(){
    var defer = $.Deferred();
    context.clearRect(0, 0, canvas.width, canvas.height);
    init();
    renderFlowers(false);
    setTimeout(function(){
      renderWriting();
      $("body").css("background-color", "yellow");
    }, 1000);
    setTimeout(function(){
      renderFlowers(true);
      defer.resolve();
      $("body").css("background-color", "white");
    }, 1600);

    return defer;
  }

  $("#restart").on("click",function(){
    $(this).addClass("hide");
    reset();
  });

  function reset(){
    var ready = animate();
    $.when(ready).then(function(){
      $("#restart").removeClass("hide");
    });
  }

  reset();
  
});
