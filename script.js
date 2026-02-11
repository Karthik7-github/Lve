
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

check.addEventListener("click", () => {
  letter.style.display = "flex";
})

const seeurmem = document.querySelector('.seeurmemories');
const memories = document.querySelector('.memories');
// const letter = document.querySelector('.letter');

seeurmem.addEventListener("click", () => {

  memories.classList.add('active');
});


const dates = document.querySelector('.dates');
const showdate = document.querySelector('.show-date');

showdate.addEventListener("click", () => {
  dates.classList.add('active');
})

document.querySelector('.play-quiz-btn').addEventListener('click', () => {
  document.querySelector('.quiz').classList.add('active');
  document.querySelector('.quiz').classList.remove('hide');
});

const wishes = document.querySelector('.spin-section');
const wishbtn = document.querySelector('.wishbutton');

wishbtn.addEventListener("click", () => {
  //document.querySelector('.quiz').classList.add('hide');
  wishes.classList.add('active');       // show wishes
});

// change

let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let resultsBox = document.getElementById("results");

let rotation = 0;
let turn = 0;
const maxTurns = 3;

// wishes list (shrinks after each spin)
let messages = [
  "You owe me a chocolate 🍫",
  "Movie date confirmed 🎬",
  "Hug me tight 🤗",
  "You are mine ❤️",
  "Coffee date ☕",
  "Surprise gift 🎁",
  "Kiss please 😘",
  "Forever together 💍"
];

btn.onclick = function () {

  if (turn >= maxTurns) return;

  turn++;

  let randomSpin = Math.floor(Math.random() * 360) + 720;
  rotation += randomSpin;
  container.style.transform = `rotate(${rotation}deg)`;

  setTimeout(() => {

    // pick random wish index
    let index = Math.floor(Math.random() * messages.length);
    let selectedWish = messages[index];

    // remove selected wish (NO REPEAT)
    messages.splice(index, 1);

    let div = document.createElement("div");
    div.className = "result-item";
    div.innerText = `Turn ${turn}: ${selectedWish}`;

    resultsBox.appendChild(div);

    if (turn === maxTurns) {
      btn.innerText = "Done";
      btn.style.cursor = "not-allowed";
      btn.style.opacity = "0.6";
    }

  }, 5000);
};

