'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.
function rectangles(x,y,sizeX,sizeY, col){
    ctx.beginPath()
    ctx.fillStyle=col;
    ctx.fillRect(x,y,sizeX,sizeY)
}

let colors:string[]=['green','yellow','red','pink']

for (let i=0;i<4;i++){
    rectangles(Math.random()*600,Math.random()*400,Math.random()*100,Math.random()*50,colors[i])
}
