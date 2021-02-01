canvas = document.getElementById("myCanvas");
crx = canvas.getContext("2d");

crx.beginPath();
crx.strokeStyle= "color";
crx.lineWidth="2";
crx.arc(200,100,50,0,Math.PI*2);
crx.stroke();

canvas.addEventListener("mousedown", my_mousedown)

function my_mousedown(e){
var x=e.clientX - canvas.offsetLeft;
var y=e.clientY - canvas.offsetTop;
console.log(x + "" + y);

crx.beginPath();
crx.strokeStyle= "color";
crx.lineWidth="2";
crx.arc(x,y,50,0,Math.PI*2);
crx.stroke();
}

