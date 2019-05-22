// 29m3FM1kqxtI7ssg8NqR6ZAAMPg1cgxW


const nytRequest = new XMLHttpRequest();
const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=moon%20landing%20by%20Appolo%2011&api-key=29m3FM1kqxtI7ssg8NqR6ZAAMPg1cgxW'
nytRequest.open('GET', url)
nytRequest.send()
nytRequest.onload = function (data) {
const dataObj = JSON.parse(data.target.response).response.docs
console.log(dataObj);
const body=document.querySelector('body')
for (let i=0;i<dataObj.length;i++){
  let h1=document.createElement('a')
  h1.innerHTML=dataObj[i].headline.main
  h1.setAttribute('href',dataObj[i].web_url)
  let snipet=document.createElement('p')
  snipet.innerHTML=dataObj[i].snippet
  let postDate=document.createElement('p')
  postDate.innerHTML=dataObj[i].pub_date
  body.appendChild(h1)
  body.appendChild(snipet)
  body.appendChild(postDate)
};
}