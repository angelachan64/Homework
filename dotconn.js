console.log("Begin");

var clear = document.getElementById("clear");
var playground = document.getElementById("playground");
var canvas = playground.getContext("2d");

clear.addEventListener("click", function(){

    console.log("click!")
});

playground.addEventListener("click", function(){
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    console.log(x + "," + y)

    canvas.fillStyle = "#FFD1DC";
    canvas.strokeStyle = "#000000";
    canvas.beginPath();
    canvas.moveTo(x, y);
    canvas.arc(x, y, 2, 0, 2*Math.PI);
    canvas.stroke();
    canvas.fill();
    canvas.closePath();
    console.log("dot!")
});

console.log("End");
