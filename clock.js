const clock = document.querySelector('#digital-clock');


 let timer= setInterval(() => {
    let date = new Date();
    let currentTime = date.toLocaleTimeString();
    clock.innerHTML=currentTime;

},1000);

const stop = document.querySelector('#stopButton')
stop.addEventListener('click',() =>{
    clearInterval(timer);
})



const start= document.querySelector('#startButton')
start.addEventListener('click',() =>{
    setInterval(() => {
        let date = new Date();
        let currentTime = date.toLocaleTimeString();
        clock.innerHTML=currentTime;
    
    },1000);

    

})

//reset timer
// const reset = document.querySelector('#reset');
const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
    clock.textContent = '00:00:00';
    isTimerRunning = false;

})