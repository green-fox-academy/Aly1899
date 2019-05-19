const imageList=[
  {
    src:'img1',
    title:'First pic',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste labore neque cum natus amet reiciendis modi obcaecati nulla ullam aperiam velit, quis ipsam unde eum eaque ex possimus perferendis aspernatur!' ,
    caption:'image1'
  },
  {
    src:'img2',
    title:'Second pic',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste labore neque cum natus amet reiciendis modi obcaecati nulla ullam aperiam velit, quis ipsam unde eum eaque ex possimus perferendis aspernatur!' ,
    caption:'image2'
  },
  {
    src:'img3',
    title:'Third pic',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste labore neque cum natus amet reiciendis modi obcaecati nulla ullam aperiam velit, quis ipsam unde eum eaque ex possimus perferendis aspernatur!' ,
    caption:'image3'
  }
]
let image=document.getElementById('image')
let thumbnail=document.getElementById('thumbnail')
let imageIndex=0;

function populateImage(arr){
  arr.forEach(element => {
    let newImage=document.createElement('img')
    let newDiv=document.createElement('div')
    let newH1=document.createElement('h1')
    newH1.innerText=element.title
    let newP=document.createElement('p')
    newP.innerText=element.description
    newImage.src='./images/'+element.src+'.jpg'
    newImage.setAttribute('style','display:none')
    image.appendChild(newImage)
    image.appendChild(newDiv)
    newDiv.appendChild(newH1)
    newDiv.appendChild(newP)
  });
}

function populateThumbnail(arr){
  arr.forEach(element => {
    let newImage=document.createElement('img')
    newImage.src='./images/'+element.src+'.jpg'
    // newImage.classList.add('unselected')
    let newImageTitle=document.createElement('p')
    newImageTitle.innerText=element.caption
    newImageTitle.classList.add('title')
    // newImage.setAttribute('style','opacity:0.5')
    thumbnail.appendChild(newImage)
    newImage.appendChild(newImageTitle)
  });
}

function showImage(index){
  let imgList=document.querySelectorAll('.image img')
  let divList=document.querySelectorAll('.image div')
  console.log(imgList.length);
  if (index>imgList.length-1){
    imageIndex=0
    index=0}
  if (index<0){
    imageIndex=imgList.length-1
    index=imgList.length-1}
  imgList.forEach(element=>{
    element.setAttribute('style','display:none')
  })
  divList.forEach(element=>{
    element.setAttribute('style','display:none')
  })
  console.log(index)
  imgList[index].setAttribute('style','display:static')
  divList[index].setAttribute('style','display:absolute')
  showThumbnail(index)
}

function showThumbnail(index){
  let imgList=document.querySelectorAll('#thumbnail img')
  imgList.forEach(element=>{
    if (element.className==='selected'){
      element.classList.toggle('selected')
    }
  })
  console.log(imageList)
  // imgList[index].classList.toggle('unselected')
  imgList[index].classList.toggle('selected')
  // imgList[index].setAttribute('style','opacity:1') 
}


function moveSlide(n){
  imageIndex+=n
  console.log(imageIndex)
  showImage(imageIndex)
  
}

populateImage(imageList)
populateThumbnail(imageList)
showImage(1)
// showImage(imageIndex)

const thumbnailList=document.querySelectorAll('#thumbnail img')

for (let i=0;i<thumbnailList.length;i++){
  thumbnailList[i].addEventListener("click",function(){
    console.log(i)
    showImage(i)
    showThumbnail(i)
  })
}