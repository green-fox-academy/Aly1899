// const xhr=new XMLHttpRequest();

// const urlAllBooks='http://localhost:3000/allbooks'
// let category=''
// console.log(document.getElementById('category').value)
// if (document.getElementById('category').value){
//   category=`?category=${document.getElementById('category').value}`
// }
// const urlAllBooksFull='http://localhost:3000/allbooksfull'+category
// // const urlAllBooks='http://localhost:3000/allbooks'

// xhr.open('GET',urlAllBooks)
// xhr.send()
// xhr.onload=()=>{
//   let films=JSON.parse(xhr.responseText)
//   const filmList=document.getElementById('films')
//   for (let i=0;i<films.length;i++){
//     let film=document.createElement('li')
//     film.innerHTML=films[i].book_name
//     filmList.appendChild(film)
//   }
// }
console.log('Hello')
function urlCreator(){
  urlAllBooksFull='http://localhost:3000/allbooksfull'
  let pos = window.location.href.indexOf('?')
  if (pos==-1){ let a=[]};
  let querySring=location.href.substr(pos+1)
  let queries={}
  querySring.split('&').forEach(function(part){
    let item=part.split("=");
    queries[item[0]]=decodeURIComponent(item[1]);
  })
  console.log('queries= ' + queries.category)
  console.log('aaa')
}

urlCreator()

function getAllBooksFullData(){
  let category=''
  console.log(document.getElementById('category').value)
  if (document.getElementById('category').value){
    console.log('i am here')
    category=`?category=${ document.getElementById('category').value}`
  }
  const urlAllBooksFull='http://localhost:3000/allbooksfull'+category
  
  const xhr2=new XMLHttpRequest();
  xhr2.open('GET',urlAllBooksFull)
  console.log(urlAllBooksFull)
  xhr2.send()
  xhr2.onload=()=>{
    let filmsFull=JSON.parse(xhr2.responseText)
    const table=document.getElementById('table')
    console.log(filmsFull)
    for (let i=0;i<filmsFull.length;i++){
      let line=document.createElement('tr')
      let title=document.createElement('td')
      title.innerHTML=filmsFull[i].book_name
      line.appendChild(title)
      let aut=document.createElement('td')
      aut.innerHTML=filmsFull[i].aut_name
      line.appendChild(aut)
      let cat=document.createElement('td')
      cat.innerHTML=filmsFull[i].cate_descrip
      line.appendChild(cat)
      let pub=document.createElement('td')
      pub.innerHTML=filmsFull[i].pub_name
      line.appendChild(pub)    
      let price=document.createElement('td')
      price.innerHTML=filmsFull[i].book_price
      line.appendChild(price)    
      table.appendChild(line)
    }
    console.log(filmsFull)
}
urlCreator()
}
getAllBooksFullData()
