'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]
let increment:number=10;
let size:number=10;
for (let i=10;i<=70;i+=10){
    ctx.fillStyle='purple'
    ctx.fillRect(increment,increment,i,i)
    ctx.lineWidth=2;
    ctx.strokeStyle='black'
    ctx.strokeRect(increment,increment,i,i)
    increment=increment+i;
    console.log(i,increment);
}