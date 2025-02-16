const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const red= document.querySelector('.red');
const random = document.querySelector('.random')
const noob = document.querySelector('.noob')

function changeColor(color){
    document.body.style.backgroundColor=color
}

function randomNumber(number){
    return Math.floor(Math.random()*(number+1));
}
random.addEventListener('click',()=>{
    document.body.style.backgroundColor =`rgb(${randomNumber(255)},${randomNumber(255)},${randomNumber(255)}`;
    
})

green.addEventListener('click',()=>{
    document.body.style.backgroundColor='green';

})
red.addEventListener('click',()=>{
    document.body.style.backgroundColor='red';

})
noob.addEventListener('click',()=>{
    document.body.style.backgroundColor='grey';
})

