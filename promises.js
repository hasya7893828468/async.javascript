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
function addpost(c){
  return new Promise((hasya,ram)=>{
    setTimeout(()=>{
      posts.push(c)
      const error=true;
      if(error){
        hasya()
      }else{
        ram('error: something went error')
      }
    },2000)
})
}
async function fetchusers(){
  const a = await fetch('https://jsonplaceholder.typicode.com/users')
  const data=await a.json()
  console.log(data)
}
fetchusers()
// async function ram(){
//   await addpost({title:"third post",body:'this is third post'})
//   getpost()
// }
// ram()
// }
// const promise1=Promise.resolve('hello world')
// const promise2=10
// const promise3=new Promise((resolve,reject)=>{
//   setTimeout(resolve,2000,'good bye')
// })
// const promise4=fetch('https://jsonplaceholder.typicode.com/users')
// .then(ret=>ret.json())
// Promise.all([promise1,promise2,promise3,promise4]).then(value=>console.log(value))