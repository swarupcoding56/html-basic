 var time=new Date();

const hour=String(time.getHours()).padStart(2,"0");
const minute=String(time.getMinutes()).padStart(2,"0");
const second=String(time.getSeconds()).padStart(2,"0");
const webtime=document.getElementById("clock");
webtime.textContent=hour+":"+minute+":"+second;
setInterval(() => {
    var time1=new Date();
var hournew=String(time1.getHours()).padStart(2,"0");
var minutenew=String(time1.getMinutes()).padStart(2,"0");
var secondnew=String(time1.getSeconds()).padStart(2,"0");
webtime.textContent=hournew+":"+minutenew+":"+secondnew;
}, 1000);