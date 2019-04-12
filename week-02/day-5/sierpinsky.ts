'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function carpet(x: number, y: number, size: number) {
    let colors:string[]=['yellow','pink','red','purple']
    if (size<1){
        return
    }
    ctx.beginPath();
    ctx.fillStyle=colors[Math.floor(Math.random()*3.99)]
    ctx.fillRect(x+size/3,y+size/3,size/3,size/3)
    carpet(x,y,size/3)
    carpet(x,y+size/3,size/3)
    carpet(x,y+size*2/3,size/3)
    carpet(x+size/3,y,size/3)
    carpet(x+size*2/3,y,size/3)
    carpet(x+size*2/3,y+size/3,size/3)
    carpet(x+size*2/3,y+size*2/3,size/3)
    carpet(x+size/3,y+size*2/3,size/3)
}
carpet(0, 0, 600);