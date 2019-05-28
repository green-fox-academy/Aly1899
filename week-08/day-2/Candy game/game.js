const createCandyBtn=document.querySelector('.create-candies')
const buyLollypopBtn=document.querySelector('.buy-lollypops')
const candyMachineBtn=document.querySelector('.candy-machine')
const candyStat=document.querySelectorAll('.stats dd')
let startCandy
let generateSpeed=1

let numberOfCandy=0
let numberOfLollypop=0
let lollypopPrice=2
let lollypopLimit=3
let time


const generateCandy=()=>{
  console.log(numberOfCandy);
  numberOfCandy+=1
  candyStat[0].innerHTML=numberOfCandy
}

createCandyBtn.addEventListener('click',generateCandy)

candyMachineBtn.addEventListener('click',()=>{
  generateSpeed*=0.8
  if (time){clearInterval(time)}
  time = setInterval(generateCandy,Math.floor(1000/(numberOfLollypop/lollypopLimit)*generateSpeed))
  console.log('GP: '+ generateSpeed)
})

buyLollypopBtn.addEventListener('click',()=>{
  if (numberOfCandy>=lollypopPrice){ 
    numberOfCandy-=lollypopPrice
    candyStat[1].innerHTML+='🍭'
    numberOfLollypop++
    candyStat[0].innerHTML=numberOfCandy
    if (numberOfLollypop>=3 && numberOfLollypop % lollypopLimit ===0){
      if (time){clearInterval(time)}
      time = setInterval(generateCandy,Math.floor(1000/(numberOfLollypop/lollypopLimit)*generateSpeed))
    }
  }
})


setInterval(()=>{
  if (numberOfLollypop===0){candyStat[2].innerHTML=0}
  else {
  candyStat[2].innerHTML=Math.floor(numberOfLollypop/lollypopLimit*generateSpeed)}
},1000)

