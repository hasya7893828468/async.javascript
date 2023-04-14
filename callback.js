const posts =[
  {title: 'post one' ,body:'this is first post'},
  {title: 'post two' ,body:'this is second post'},]

function getpost(){
  setTimeout(()=>{
 let output=""
 posts.forEach((a,b)=>{
 output+=`<li>${a.title}</li>`
 })
 document.body.innerHTML=output
  },1000)
}
function addpost(c,d){
setTimeout(()=>{
  posts.push(c)
  d()
},2000)
}
addpost({title:"third post",body:'this is third post'},getpost)