'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function circle(x: number, y: number, rad: number) {
    let colors:string[]=['green','blue','orange','purple']
    if (rad<10){
        return
    }
    ctx.beginPath()
    ctx.strokeStyle=colors[Math.floor(Math.random()*3.99)]
    ctx.arc(x+rad,y+rad,rad,0,Math.PI*2)
    ctx.stroke();
    circle(x+rad/2+rad/2*Math.cos(Math.PI/6),y+rad/2+rad/2*Math.sin(Math.PI/6),rad/2)
    circle(x+rad/2-rad/2*Math.cos(Math.PI/6),y+rad/2+rad/2*Math.sin(Math.PI/6),rad/2,)
    circle(x+rad/2,y+rad/2-rad*Math.sin(Math.PI/6),rad/2)
    
}
circle(0, 0, 300);