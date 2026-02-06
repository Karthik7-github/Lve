
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