let hours=document.getElementById("hrs"); 
let minutes=document.getElementById("min");
let secs=document.getElementById("sec");
setInterval(()=>{
    let currentTime= new Date();
    hours.innerHTML = (currentTime.getHours()<10?"0":"")+currentTime.getHours();
    minutes.innerHTML = (currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes();
    secs.innerHTML =( currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds();
},1000)


