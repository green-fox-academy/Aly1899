'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

function square(size:number,col:string){
    ctx.fillStyle=col;
    ctx.fillRect(canvas.width/2-size/2,canvas.height/2-size/2,size,size)
}
let colors:string[]=['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
for (let i=7;i>0;i--){
    square(i*40,colors[7-i])
}