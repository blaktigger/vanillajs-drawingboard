const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

ctx.strockeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;


function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    }
}

function onMouseDown(event){
    painting = true;
}

function onMouseUp(event){
    stopPainting();
}

function stopPainting(event){
    painting = false;
}

function startPainting(){
    painting= true
}


if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}



























