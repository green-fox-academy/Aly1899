'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function koch(x: number, y: number, s:number,i: number) {
    let colors:string[]=['green','blue','orange','purple']
    if (i<1){
        return
    }
    ctx.beginPath()
    ctx.moveTo(x,y)
    ctx.lineTo(x+s,y)
    ctx.lineTo(x+s+s*Math.sin(Math.PI/6),y-s*Math.cos(Math.PI/6))
    ctx.lineTo(x+s+2*s*Math.sin(Math.PI/6),y)
    ctx.lineTo(x+2*s+2*s*Math.sin(Math.PI/6),y)
    // ctx.lineTo(x+s,y)
    ctx.stroke()
    koch(x+2*s+2*s*Math.sin(Math.PI/6),y,30,i-1)
}
koch(0, 100, 30,1);