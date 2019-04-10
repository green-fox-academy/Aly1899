'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.


for (let i=0;i<30;i++){
    for (let j=0;j<20;j++){
        // let check:boolean=true
        if ((i+j)%2===0){
            ctx.fillStyle='black'
        }else{
            ctx.fillStyle='white'
        }
        ctx.fillRect(i*20,j*20,20,20)
    }
}