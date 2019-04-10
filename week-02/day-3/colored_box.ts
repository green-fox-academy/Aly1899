'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.

ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(300,100);
ctx.strokeStyle='red'
ctx.stroke()
// ctx.moveTo(300,100);
ctx.lineTo(300,200);
ctx.strokeStyle='yellow'
ctx.stroke()
ctx.lineTo(100,200);
ctx.strokeStyle='pink'
ctx.stroke()
ctx.beginPath()
ctx.moveTo(100,200);
ctx.lineTo(100,100);
ctx.strokeStyle='green'
ctx.stroke()