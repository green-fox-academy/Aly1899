
// r0miNotWY9VrOHykGFIYW1ymHbMcnCPF

const giphyRequest = new XMLHttpRequest();
const url = 'http://api.giphy.com/v1/stickers/trending?api_key=r0miNotWY9VrOHykGFIYW1ymHbMcnCPF'
giphyRequest.open('GET', url)
giphyRequest.send()

const body=document.getElementsByTagName('body')[0]
giphyRequest.onload = function (data) {
  const gifObject=Array.from(JSON.parse(data.target.response).data)
  for (let i=0;i<gifObject.length;i++){
    let img=document.createElement('img')
    img.classList.add('jpg')
    img.src=gifObject[i].images['480w_still'].url;
    body.appendChild(img)
  }
  // console.log(gifObject)
}
const imgs=document.getElementsByClassName('jpg')
console.log(imgs)

for (let i=0;i<imgs.length;i++){
    imgs[i].addEventListener("click",function(){
    console.log(imgs[i])
    changeGif(gifObject.images['480w_still'])
  })
}


function changeGif(string){
  const gif=document.querySelector('.gif img');
  gif.src=string;
}