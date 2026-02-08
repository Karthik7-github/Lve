
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const navbar = document.querySelector('.navbar');

let scale = 1;

noBtn.addEventListener("click", () => {
    scale += 0.4;
    yesBtn.style.transform = `scale(${scale})`;
});

const thanks = document.querySelector(".thanks");
yesBtn.addEventListener("click", () => {
  navbar.classList.add("active");   // hide first card
  thanks.classList.add("active");   // show next card
});

const letter = document.querySelector('.letter');
const check = document.querySelector('.check');

check.addEventListener("click",()=>{
    letter.style.display="flex";
})

const seeurmem = document.querySelector('.seeurmemories');
const memories = document.querySelector('.memories');
// const letter = document.querySelector('.letter');

seeurmem.addEventListener("click", () => {
    
    memories.classList.add('active');
});


const dates = document.querySelector('.dates');
const showdate = document.querySelector('.show-date');

showdate.addEventListener("click",()=>{
    dates.classList.add('active');
})

document.querySelector('.play-quiz-btn').addEventListener('click', () => {
  document.querySelector('.quiz').classList.add('active');
  document.querySelector('.quiz').classList.remove('hide')
});

const wishes = document.querySelector('.wishes');
const wishbtn = document.querySelector('.wishbutton');

wishbtn.addEventListener("click", () => {
  document.querySelector('.quiz').classList.add('hide');
  wishes.classList.add('active');       // show wishes
});

