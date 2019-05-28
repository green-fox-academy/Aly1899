const body=document.querySelector('body')
const scrollThreshold=300

function randomColorGenerate(){
  return Math.floor(Math.random()*255)
}
// function randomDivNumber(){
//   return randomDivNumber=Math.floor(Math.random()*20)
// }

function generateDivsAfter(){
  let randomDivNumber=Math.floor(Math.random()*20)
  for (let i=0;i<randomDivNumber;i++){
    let div = document.createElement('div')
    div.style.backgroundColor=`rgb(${randomColorGenerate()},${randomColorGenerate()},${randomColorGenerate()}`
    body.appendChild(div)
  }
}

function generateDivsBefore(){
  let randomDivNumber=Math.floor(Math.random()*20)
  for (let i=0;i<randomDivNumber;i++){
    let div = document.createElement('div')
    div.style.backgroundColor=`rgb(${randomColorGenerate()},${randomColorGenerate()},${randomColorGenerate()}`
    body.insertBefore(div,body.firstChild)
  }
}
generateDivsAfter()
console.log(document.querySelector('body').offsetHeight)

window.addEventListener('scroll',()=>{
  console.log(window.scrollY+ ' : ' + body.offsetHeight)

  if (window.scrollY+1000>=body.offsetHeight-300){
    generateDivsAfter()
  }

  if (window.scrollY<=300){
    generateDivsBefore()
  }
})
