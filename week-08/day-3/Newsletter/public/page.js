const xhr=new XMLHttpRequest();
xhr.open('GET','http://localhost/signup')
xhr.send();
xhr.onload=()=>{
  console.log(xhr.responseText)
}