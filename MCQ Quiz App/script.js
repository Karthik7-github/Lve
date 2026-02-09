// // ================= REFERENCES =================
// let timeLeft = document.querySelector(".time-left");
// let quizContainer = document.getElementById("container");
// let nextBtn = document.getElementById("next-button");
// let countOfQuestion = document.querySelector(".number-of-question");
// let displayContainer = document.getElementById("display-container");
// let scoreContainer = document.querySelector(".score-container");
// let userScore = document.getElementById("user-score");
// let startScreen = document.querySelector(".start-screen");
// let startButton = document.getElementById("start-button");

// let questionCount = 0;
// let scoreCount = 0;
// let count = 11;
// let countdown;
// let quizPlayed = false;

// // ================= ALL 100 QUESTIONS =================
// const allQuestions = [
//   {//1
//     question: "𝑴𝒚 𝒇𝒂𝒗𝒐𝒓𝒊𝒕𝒆 𝒕𝒚𝒑𝒆 𝒐𝒇 𝒎𝒐𝒗𝒊𝒆 𝒊𝒔... ",
//     options: ["Action", "Romance", "Comedy", "Horror"],
//     correct: "Romance",
//   },
//   {//2
//     question: "𝙒𝙝𝙖𝙩 𝙖𝙣𝙣𝙤𝙮𝙨 𝙢𝙚 𝙩𝙝𝙚 𝙢𝙤𝙨𝙩?",
//     options: ["𝙇𝙞𝙚𝙨", "𝘿𝙞𝙨𝙧𝙚𝙨𝙥𝙚𝙘𝙩", "𝙉𝙤𝙞𝙨𝙚", "Waiting"],
//     correct: "𝘿𝙞𝙨𝙧𝙚𝙨𝙥𝙚𝙘𝙩",
//   },
//   {//3
//     question: "𝑴𝒚 𝒇𝒂𝒗𝒐𝒓𝒊𝒕𝒆 𝒘𝒂𝒚 𝒕𝒐 𝒓𝒆𝒍𝒂𝒙 𝒊𝒔...",
//     options: ["Watching Tv", "Reading a Book", "Talking a Walk", "Sleep"],
//     correct: "Watching Tv",
//   },
//   {//4
//     question: "𝑰'𝒅 𝒅𝒆𝒔𝒄𝒓𝒊𝒃𝒆 𝒎𝒚 𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒍𝒊𝒕𝒚 𝒂𝒔...",
//     options: ["Outgoing", "Introvert", "Extrovert", "Ambitious"],
//     correct: "Introvert",
//   },
//   {//5
//     question: "𝑴𝒚 𝒇𝒂𝒗𝒐𝒓𝒊𝒕𝒆 𝒕𝒚𝒑𝒆 𝒐𝒇 𝒂𝒓𝒕 𝒊𝒔...",
//     options: ["Painting", "Music", "Dance", "All 😅"],
//     correct: "Painting",
//   },
//   {//6
//     question: "𝑾𝒉𝒂𝒕'𝒔 𝒕𝒉𝒆 𝒐𝒏𝒆 𝒕𝒉𝒊𝒏𝒈 𝑰 𝒅𝒐 𝒕𝒉𝒂𝒕 𝒎𝒂𝒌𝒆𝒔 𝒚𝒐𝒖 𝒇𝒆𝒆𝒍 𝒍𝒐𝒗𝒆𝒅 𝒊𝒏𝒔𝒕𝒂𝒏𝒕𝒍𝒚?",
//     options: ["Listening to you", " Planning dates", "Supporting your dreams ❤️","All of these"],
//     correct: "All of these",
//   },
//   {//7
//     question: "𝑴𝒚 𝒇𝒂𝒗𝒐𝒓𝒊𝒕𝒆 𝒕𝒚𝒑𝒆 𝒐𝒇 𝒈𝒂𝒎𝒆 𝒊𝒔...",
//     options: ["Video Games", "Board Games", "Outdoor Games", "Card Games"],
//     correct: "Outdoor Games",
//   },
//   {//8
//     question: "𝑰'𝒅 𝒓𝒂𝒕𝒉𝒆𝒓 𝒕𝒓𝒂𝒗𝒆𝒍...",
//     options: ["Solo", "With Family", "With Patner", "With Friends"],
//     correct: "With Patner",
//   },
//   {//9
//     question: "𝑴𝒚 𝒇𝒂𝒗𝒐𝒓𝒊𝒕𝒆 𝒕𝒚𝒑𝒆 𝒐𝒇 𝒂𝒏𝒊𝒎𝒂𝒍 𝒊𝒔...",
//     options: ["Dog", "Cat", "Fish", "All 💙"],
//     correct: "Dog",
//   },
//   {//10
//     question: "𝑰𝒇 𝑰 𝒉𝒂𝒅 𝒂 𝒔𝒖𝒑𝒆𝒓𝒉𝒆𝒓𝒐 𝒑𝒐𝒘𝒆𝒓, 𝒊𝒕 𝒘𝒐𝒖𝒍𝒅 𝒃𝒆...",
//     options: ["Flying", "Invisibility", "Super strength", "Making you laugh 💫"],
//     correct: "Invisibility",
//   }
// ];

// // (You can safely add up to 100 here)

// // ================= RANDOM PICK FUNCTION =================
// function getRandomQuestions(all, count) {
//   return [...all].sort(() => Math.random() - 0.5).slice(0, count);
// }

// // ================= QUIZ ARRAY (ONLY 10) =================
// let quizArray = [];

// // ================= TIMER =================
// const timerDisplay = () => {
//   countdown = setInterval(() => {
//     count--;
//     timeLeft.innerText = `${count}s`;
//     if (count === 0) {
//       clearInterval(countdown);
//       displayNext();
//     }
//   }, 1000);
// };

// // ================= DISPLAY QUIZ =================
// const quizDisplay = (index) => {
//   let cards = document.querySelectorAll(".container-mid");
//   cards.forEach((card) => card.classList.add("hide"));
//   cards[index].classList.remove("hide");
// };

// // ================= CREATE QUIZ =================
// function quizCreator() {
//   quizContainer.innerHTML = "";
//   quizArray.forEach((q) => {
//     q.options.sort(() => Math.random() - 0.5);

//     let div = document.createElement("div");
//     div.classList.add("container-mid", "hide");

//     let p = document.createElement("p");
//     p.classList.add("question");
//     p.innerText = q.question;

//     div.appendChild(p);

//     q.options.forEach((opt) => {
//       let btn = document.createElement("button");
//       btn.classList.add("option-div");
//       btn.innerText = opt;
//       btn.onclick = () => checker(btn);
//       div.appendChild(btn);
//     });

//     quizContainer.appendChild(div);
//   });

//   countOfQuestion.innerText = `1 of ${quizArray.length} Question`;
// }

// // ================= CHECK ANSWER =================
// function checker(userOption) {
//   let userAnswer = userOption.innerText;
//   let question =
//     document.getElementsByClassName("container-mid")[questionCount];
//   let options = question.querySelectorAll(".option-div");

//   if (userAnswer === quizArray[questionCount].correct) {
//     userOption.classList.add("correct");
//     scoreCount++;
//   } else {
//     userOption.classList.add("incorrect");
//     options.forEach((btn) => {
//       if (btn.innerText === quizArray[questionCount].correct) {
//         btn.classList.add("correct");
//       }
//     });
//   }

//   clearInterval(countdown);
//   options.forEach((btn) => (btn.disabled = true));
// }

// // ================= NEXT BUTTON =================
// const displayNext = () => {
//   questionCount++;

//   if (questionCount === quizArray.length) {
//     displayContainer.classList.add("hide");
//     scoreContainer.classList.remove("hide");
//     nextBtn.style.display = "none";

//     let finalText = "";

//     if (scoreCount <= 3) {
//       finalText = "😅 You don’t know me that well yet";
//     } else if (scoreCount <= 6) {
//       finalText = "🙂 You know me pretty well";
//     } else if (scoreCount <= 8) {
//       finalText = "😎 You REALLY know me";
//     } else {
//       finalText = "😊 You know me better than anyone";
//     }

//     userScore.innerHTML = `
//       <strong>Your score:</strong> ${scoreCount} / ${quizArray.length}<br><br>
//       ${finalText}
//     `;
//     return;
//   }

//   countOfQuestion.innerText =
//     questionCount + 1 + " of " + quizArray.length + " Question";

//   quizDisplay(questionCount);
//   count = 11;
//   clearInterval(countdown);
//   timerDisplay();
// };

// nextBtn.addEventListener("click", displayNext);

// // ================= INITIAL SETUP =================
// function initial() {
//   quizContainer.innerHTML = "";
//   questionCount = 0;
//   scoreCount = 0;
//   count = 11;
//   clearInterval(countdown);

//   quizArray = getRandomQuestions(allQuestions, 10);

//   quizCreator();
//   quizDisplay(0);
//   timerDisplay();
// }

// // ================= START BUTTON =================
// startButton.addEventListener("click", () => {
//   if (quizPlayed) return;
//   quizPlayed = true;

//   startScreen.classList.add("hide");
//   displayContainer.classList.remove("hide");

//   initial();
// });

// // NEXT PAGE BUTTON
// const nextBt = document.getElementById("nextBtn");

// // CALL THIS WHEN QUIZ IS FINISHED
// function quizCompleted() {
//   nextBtn.style.display = "block";
// }

// // REDIRECT TO NEXT PAGE
// nextBt.addEventListener("click", () => {
//   window.location.href = "nextpage.html"; // change if needed
// });


// ================= REFERENCES =================
document.addEventListener("DOMContentLoaded", () => {

let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextQuestionBtn = document.getElementById("next-button");
let nextPageBtn = document.getElementById("next-page-btn");

let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");

let questionCount = 0;
let scoreCount = 0;
let count = 11;
let countdown;
let quizPlayed = false;

// ================= QUESTIONS =================
const allQuestions = [
  {
    question: "𝑴𝒚 𝒇𝒂𝒗𝒐𝒓𝒊𝒕𝒆 𝒕𝒚𝒑𝒆 𝒐𝒇 𝒎𝒐𝒗𝒊𝒆 𝒊𝒔...",
    options: ["Action", "Romance", "Comedy", "Horror"],
    correct: "Romance",
  },
  {
    question: "𝙒𝙝𝙖𝙩 𝙖𝙣𝙣𝙤𝙮𝙨 𝙢𝙚 𝙩𝙝𝙚 𝙢𝙤𝙨𝙩?",
    options: ["𝙇𝙞𝙚𝙨", "𝘿𝙞𝙨𝙧𝙚𝙨𝙥𝙚𝙘𝙩", "𝙉𝙤𝙞𝙨𝙚", "Waiting"],
    correct: "𝘿𝙞𝙨𝙧𝙚𝙨𝙥𝙚𝙘𝙩",
  },
  {
    question: "𝑴𝒚 𝒇𝒂𝒗𝒐𝒓𝒊𝒕𝒆 𝒘𝒂𝒚 𝒕𝒐 𝒓𝒆𝒍𝒂𝒙 𝒊𝒔...",
    options: ["Watching Tv", "Reading a Book", "Talking a Walk", "Sleep"],
    correct: "Watching Tv",
  },
  {
    question: "𝑰'𝒅 𝒅𝒆𝒔𝒄𝒓𝒊𝒃𝒆 𝒎𝒚 𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒍𝒊𝒕𝒚 𝒂𝒔...",
    options: ["Outgoing", "Introvert", "Extrovert", "Ambitious"],
    correct: "Introvert",
  },
  {
    question: "𝑴𝒚 𝒇𝒂𝒗𝒐𝒓𝒊𝒕𝒆 𝒕𝒚𝒑𝒆 𝒐𝒇 𝒂𝒓𝒕 𝒊𝒔...",
    options: ["Painting", "Music", "Dance", "All 😅"],
    correct: "Painting",
  },
  {
    question: "𝑾𝒉𝒂𝒕'𝒔 𝒕𝒉𝒆 𝒐𝒏𝒆 𝒕𝒉𝒊𝒏𝒈 𝑰 𝒅𝒐 𝒕𝒉𝒂𝒕 𝒎𝒂𝒌𝒆𝒔 𝒚𝒐𝒖 𝒇𝒆𝒆𝒍 𝒍𝒐𝒗𝒆𝒅?",
    options: ["Listening to you", "Planning dates", "Supporting your dreams ❤️", "All of these"],
    correct: "All of these",
  },
  {
    question: "𝑴𝒚 𝒇𝒂𝒗𝒐𝒓𝒊𝒕𝒆 𝒕𝒚𝒑𝒆 𝒐𝒇 𝒈𝒂𝒎𝒆 𝒊𝒔...",
    options: ["Video Games", "Board Games", "Outdoor Games", "Card Games"],
    correct: "Outdoor Games",
  },
  {
    question: "𝑰'𝒅 𝒓𝒂𝒕𝒉𝒆𝒓 𝒕𝒓𝒂𝒗𝒆𝒍...",
    options: ["Solo", "With Family", "With Partner", "With Friends"],
    correct: "With Partner",
  },
  {
    question: "𝑴𝒚 𝒇𝒂𝒗𝒐𝒓𝒊𝒕𝒆 𝒂𝒏𝒊𝒎𝒂𝒍 𝒊𝒔...",
    options: ["Dog", "Cat", "Fish", "All 💙"],
    correct: "Dog",
  },
  {
    question: "𝑰𝒇 𝑰 𝒉𝒂𝒅 𝒂 𝒔𝒖𝒑𝒆𝒓𝒉𝒆𝒓𝒐 𝒑𝒐𝒘𝒆𝒓...",
    options: ["Flying", "Invisibility", "Super strength", "Making you laugh 💫"],
    correct: "Invisibility",
  }
];

// ================= RANDOM PICK =================
function getRandomQuestions(all, count) {
  return [...all].sort(() => Math.random() - 0.5).slice(0, count);
}

let quizArray = [];

// ================= TIMER =================
function timerDisplay() {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerText = `${count}s`;
    if (count === 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
}

// ================= DISPLAY QUIZ =================
function quizDisplay(index) {
  document
    .querySelectorAll(".container-mid")
    .forEach((card) => card.classList.add("hide"));

  document
    .querySelectorAll(".container-mid")[index]
    .classList.remove("hide");
}

// ================= CREATE QUIZ =================
function quizCreator() {
  quizContainer.innerHTML = "";

  quizArray.forEach((q) => {
    q.options.sort(() => Math.random() - 0.5);

    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");

    let p = document.createElement("p");
    p.classList.add("question");
    p.innerText = q.question;
    div.appendChild(p);

    q.options.forEach((opt) => {
      let btn = document.createElement("button");
      btn.classList.add("option-div");
      btn.innerText = opt;
      btn.onclick = () => checker(btn);
      div.appendChild(btn);
    });

    quizContainer.appendChild(div);
  });

  countOfQuestion.innerText = `1 of ${quizArray.length} Question`;
}

// ================= CHECK ANSWER =================
function checker(btn) {
  let question = document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  if (btn.innerText === quizArray[questionCount].correct) {
    btn.classList.add("correct");
    scoreCount++;
  } else {
    btn.classList.add("incorrect");
    options.forEach((o) => {
      if (o.innerText === quizArray[questionCount].correct) {
        o.classList.add("correct");
      }
    });
  }

  clearInterval(countdown);
  options.forEach((o) => (o.disabled = true));
}

// ================= NEXT QUESTION =================
function displayNext() {
  questionCount++;

  if (questionCount === quizArray.length) {
    displayContainer.classList.add("hide");
    scoreContainer.classList.remove("hide");
    nextQuestionBtn.style.display = "none";
    nextPageBtn.style.display = "block";

    let msg =
      scoreCount <= 3
        ? "😅 You don’t know me that well yet"
        : scoreCount <= 6
        ? "🙂 You know me pretty well"
        : scoreCount <= 8
        ? "😎 You REALLY know me"
        : "😊 You know me better than anyone";

    userScore.innerHTML = `
      <strong>Your score:</strong> ${scoreCount}/${quizArray.length}<br><br>
      ${msg}
    `;
    return;
  }

  countOfQuestion.innerText = `${questionCount + 1} of ${quizArray.length} Question`;
  quizDisplay(questionCount);
  count = 11;
  timerDisplay();
}

nextQuestionBtn.addEventListener("click", displayNext);

// ================= START =================
function initial() {
  quizArray = getRandomQuestions(allQuestions, 10);
  quizCreator();
  quizDisplay(0);
  timerDisplay();
}

startButton.addEventListener("click", () => {
  if (quizPlayed) return;
  quizPlayed = true;
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

  });
