'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function hexagon(x: number, y: number, size: number) {
    let colors:string[]=['yellow','pink','red','purple']
    if (size<1){
        return
    }
    ctx.beginPath();
    ctx.moveTo(x, y+size);
    ctx.lineTo(x +size/2, y+size*2);
    ctx.lineTo(x +size*3/2, y+size*2);
    ctx.lineTo(x +size*2, y+size);
    ctx.lineTo(x +size*3/2, y);
    ctx.lineTo(x +size/2, y);
    ctx.lineTo(x , y+size);
    ctx.strokeStyle=colors[Math.floor(Math.random()*3.99)]
    ctx.stroke();
    hexagon(x,y+size*2/3,size/3)
    hexagon(x+size/3,y,size/3)
    hexagon(x+size/3,y+size*4/3,size/3)
    hexagon(x+size,y,size/3)
    hexagon(x+size*4/3,y+size*2/3,size/3)
    hexagon(x+size,y+size*4/3,size/3)
}
hexagon(0, 0, 300);