const body=document.getElementsByTagName('body')[0]

const container=document.createElement('div')
container.classList.add('container')

const listLeft=document.createElement('div')
listLeft.classList.add('leftBox')

const listButton=document.createElement('div')
listButton.classList.add('buttonBox')

const listRight=document.createElement('div')
listRight.classList.add('rightBox')

createElement('p',listLeft,itemList,true);
createElement('button',listButton,itemList,false);
createElement('p',listRight,itemList,false);

body.appendChild(container)

container.appendChild(listLeft)
container.appendChild(listButton)
container.appendChild(listRight)

const containerElements=document.querySelectorAll('.container div')

for (let i=0;i<containerElements.length;i++){
 containerElements[i].style.border= '1px solid black'
 containerElements[i].style.flex= '1'
 containerElements[i].style.height= '200px'
 containerElements[i].style.margin= '20px'
}

let itemList=['bread','milk','orange','tomato']

// for (let i=0;i<listLeft.length;i++)
container.style.display='flex'
container.style.justifyContent='space-between'


function createElement(eStr,parentObj,list,filled){
  for (let i=0;i<list.length;i++){
    let newItem=document.createElement(eStr)
    if (filled===true){
      newItem.innerText=list[i]
    }
    parentObj.appendChild(newItem) 
  }
}