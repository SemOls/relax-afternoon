const button = document.querySelector("#myButton");
button.addEventListener("click", start);
function start () {
document.querySelector("#player").play();
document.querySelector("myVideo").play();
}


const timer = 3;
let amounTaimer= timer*60;

function calculateTime () {
    const countdown=document.querySelector("#countdown");
    console.log (countdown)

    let minutes = Math.floor(amounTaimer/60);
    let seconds = amounTaimer%60;
    amounTaimer--;

    if (seconds<10) {
        seconds="0"+seconds;
    }

    countdown.textContent=`${minutes} : ${seconds}`;

if (amounTaimer<0){
    stopTimer ()
    amounTaimer=0;
}
function stopTimer () {
    clearInterval(timerId);
}
   
}
let timerId = setInterval (calculateTime,1000);