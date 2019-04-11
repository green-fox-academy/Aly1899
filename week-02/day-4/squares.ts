'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawLine(x,y,size){
    
}

function squares(x: number, y: number, size: number) {
    if (size<1){
        return
    }
    ctx.beginPath();
    ctx.moveTo(x +size/3, y);
    ctx.lineTo(x +size/3, y + size);
    ctx.moveTo(x +size*2/3, y);
    ctx.lineTo(x +size*2/3, y + size);
    ctx.moveTo(x , y+size/3);
    ctx.lineTo(x+size, y + size/3);
    ctx.moveTo(x , y+size*2/3);
    ctx.lineTo(x +size, y + size*2/3);
    ctx.stroke();
    squares(x+size/3,y,size/3)
    squares(x+size/3,y+size*2/3,size/3)
    squares(x,y+size/3,size/3)
    squares(x+size*2/3,y+size/3,size/3)
}


squares(0, 0, 600);