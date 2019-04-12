'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function square_grid(x: number, y: number, size: number,lWith:number) {
    let colors:string[]=['green','blue','red','purple']
    if (size<50){
        return
    }
    ctx.beginPath();
    ctx.strokeStyle=colors[Math.floor(Math.random()*3.99)]
    ctx.lineWidth=lWith
    ctx.strokeRect(x+size/4,y+size/4,size/2,size/2)
    square_grid(x,y,size/2,lWith/2)
    square_grid(x+size/2,y,size/2,lWith/2)
    square_grid(x,y+size/2,size/2,lWith/2)
    square_grid(x+size/2,y+size/2,size/2,lWith/2)
    // carpet(x,y+size/3,size/3)
    // carpet(x,y+size*2/3,size/3)
    // carpet(x+size/3,y,size/3)
    // carpet(x+size*2/3,y,size/3)
    // carpet(x+size*2/3,y+size/3,size/3)
    // carpet(x+size*2/3,y+size*2/3,size/3)
    // carpet(x+size/3,y+size*2/3,size/3)
}
square_grid(0, 0, 600,20);