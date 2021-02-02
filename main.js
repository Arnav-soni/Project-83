canvas =document.getElementById("myCanvas");
ctx =canvas.getContext("2d");

color = "black";
widthofline = 2;

var lastx,lasty;

var width=screen.width;
new_width=screen.width - 92;
new_heigth=screen.height -300;

if(width < 992){
 canvas.width = new_width;
 canvas.height = new_heigth;
document.body.style.overflow = "hidden";
};

canvas.addEventListener("tocuhstart",mytouchstart);

function mytouchstart(e){
    
    console.log("my touch start ");
     lastx=e.touches[0].clientX-canvas.offsetLeft;
     lasty=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove",mytouchmove);

function mytouchmove(e){
    console.log("my Touch Move")

    currentX=e.touches[0].clientX-canvas.offsetLeft;
    currentY=e.touches[0].clientY-canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=widthofline;

    console.log("last position of x and y coordinates = ");
    console.log("x = "+lastx+"y = "+lasty);
    ctx.moveTo(lastx,lasty);
    
    console.log("current position of x and y coordinates = ");
    console.log("x = "+currentX+"y = "+currentY);
    ctx.lineTo(currentX,currentY);

    ctx.stroke();

    lastx=currentX;
    lasty=currentY;

}
function clear_canvas(){
    ctx.clearRect(0,0,ctx.canvas.width,canvas.height);
}