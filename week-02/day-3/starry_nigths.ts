'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

ctx.fillStyle='black'
ctx.fillRect(0,0,canvas.width,canvas.height)

function star(x:number,y:number,col:string){
    ctx.fillStyle=col;
    ctx.fillRect(x,y,Math.random()*2,Math.random()*2)
}
let colors:string[]=['gainsboro','white','lightgrey','silver','grey','dimgrey']
for (let i=0;i<1000;i++){
    star(Math.random()*600,Math.random()*400,colors[Math.floor(Math.random()*5.9)])
}