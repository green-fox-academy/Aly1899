const swRequest = new XMLHttpRequest();
const url = 'https://swapi.co/api/people/'
swRequest.open('GET', url)
swRequest.send()
const body=document.querySelector('body')
swRequest.onload = function (data) {
  const swPeople=JSON.parse(data.target.response).results;
  for (let i=0;i<swPeople.length;i++){
    let name=document.createElement('a')
    name.innerText=swPeople[i].name
    body.appendChild(name)
  }
}
