let display = document.getElementById("display")
let timer=null;
let startTime = 0;
let elapsedTime=0;
let resetTime=0;
let isRunning=false;
function start(){
if(isRunning){
    startTime=Date.now()-elapsedTime;
    timer=setInterval(update,10);
    elapsedTime=
    isRunning=true;
}
}

function stop(){
if(isRunning){
    clearInterval(timer);
    isRunning=false;
}
}

function reset(){
    timer=null;
    startTime = 0;
    elapsedTime=0;
    resetTime=0;
    isRunning=false;

}
function update(){
    const currentTime=Date.now();
    elapsedTime=currentTime - startTime;
    let hours = elapsedTime/(1000*60*60);
}
