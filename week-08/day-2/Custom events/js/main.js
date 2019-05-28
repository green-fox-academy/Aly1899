'use strict';

const myDiv = document.querySelector('div');

let bkgColor=function (elem){
  elem.classList.add('new-color')
  var event= new CustomEvent('left-side-click')
  elem.dispatchEvent(event)
}

myDiv.addEventListener('left-side-click', (ev) => {
  ev.target.style.backgroundColor = 'yellow';
});

myDiv.addEventListener('right-side-click', (ev) => {
  ev.target.style.backgroundColor = 'blue';
});