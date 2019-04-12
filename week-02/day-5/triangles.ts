'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function triangles(x: number, y: number, size: number) {
    let colors:string[]=['yellow','pink','red','purple']
    if (size<1){
        return
    }
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x +size/2, y+size);
    ctx.lineTo(x +size, y);
    ctx.lineTo(x , y);
    ctx.moveTo(x+size/4, y+size/2);
    ctx.lineTo(x +size*3/4, y+size/2);
    ctx.lineTo(x +size/2, y);
    ctx.lineTo(x+size/4 , y+size/2);
    ctx.strokeStyle=colors[Math.floor(Math.random()*3.99)]
    ctx.stroke();
    triangles(x,y,size/2)
    triangles(x+size/4,y+size/2,size/2)
    triangles(x+size/2,y,size/2)
}
triangles(0, 0, 600);