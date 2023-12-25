let date=new Date()
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let dates=document.getElementById('date');
dates.innerHTML=`${day}/${month}/${year}`;


let time=document.getElementById('time');

setInterval(()=>{
    let date=new Date();
   let times=date.toLocaleTimeString();
    time.innerHTML= times
},1000)