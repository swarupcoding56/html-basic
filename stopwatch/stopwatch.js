let watch=document.getElementById("display")
let start=document.getElementById("start")
let pause=document.getElementById("pause")
let reset=document.getElementById("reset")

 start.addEventListener("click",function(){
    let sec=0
    let min=0
    let hr=0
    let interval=setInterval(function(){
        sec++   
        if(sec==60){
            sec=0
            min++   
            if(min==60){
                min=0
                hr++   
            }
        }
        let secString=sec<10?"0"+sec:sec
        let minString=min<10?"0"+min:min
        let hrString=hr<10?"0"+hr:hr
        watch.innerText=`${hrString}:${minString}:${secString}`
    },1000)
    pause.addEventListener("click",function(){
        clearInterval(interval)

    })
    reset.addEventListener("click",function(){
        clearInterval(interval)
        sec=0   
        min=0
        hr=0
        watch.innerText="00:00:00"
    })
})
