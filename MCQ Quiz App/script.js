//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Questions and Options array

const quizArray = [
  {
    id: "0",
    question: "Which is the most widely spoken language in the world?",
    options: ["Spanish", "Mandarin", "English", "German"],
    correct: "Mandarin",
  },
  {
    id: "1",
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correct: "Mars",
  },
  {
    id: "2",
    question: "Who invented the Computer?",
    options: ["Charles Babbage", "Alan Turing", "Henry Luce", "Bill Gates"],
    correct: "Charles Babbage",
  },
  {
    id: "3",
    question: "Which is the largest ocean in the world?",
    options: ["Indian", "Atlantic", "Arctic", "Pacific"],
    correct: "Pacific",
  },
  {
    id: "4",
    question: "HTML stands for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks Text Mark Language",
      "Home Tool Markup Language",
    ],
    correct: "Hyper Text Markup Language",
  },
  {
    id: "5",
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correct: "Carbon Dioxide",
  },
  {
    id: "6",
    question: "Which is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    correct: "2",
  },
  {
    id: "7",
    question: "CSS is used for?",
    options: [
      "Structuring content",
      "Styling web pages",
      "Programming logic",
      "Database management",
    ],
    correct: "Styling web pages",
  },
  {
    id: "8",
    question: "Which country invented the Internet?",
    options: ["UK", "Germany", "USA", "Japan"],
    correct: "USA",
  },
  {
    id: "9",
    question: "Which device is known as the brain of the computer?",
    options: ["RAM", "Hard Disk", "CPU", "GPU"],
    correct: "CPU",
  },
];

let quizPlayed = false;


//Next Button
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
     if (questionCount == quizArray.length) {
  displayContainer.classList.add("hide");
  scoreContainer.classList.remove("hide");
  nextBtn.style.display = "none"; // stop further actions
}
else {
      //display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Question";
      //display quiz
      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);
  //generate quiz
  for (let i of quizArray) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //if user clicked answer == correct option stored in object
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  //clear interval(stop timer)
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}

//initial setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

startButton.addEventListener("click", () => {
  if (quizPlayed) return; // STOP restart
  quizPlayed = true;

  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

let finalText = "";

if (scoreCount <= 3) {
  finalText = "😅 Keep trying! You can do better.";
} else if (scoreCount <= 6) {
  finalText = "🙂 Not bad! Decent effort.";
} else if (scoreCount <= 8) {
  finalText = "😎 Great job! You did really well.";
} else {
  finalText = "🔥 Excellent! Perfect or near-perfect score!";
}

userScore.innerHTML = `
  <strong>Your score:</strong> ${scoreCount} / ${quizArray.length}<br><br>
  ${finalText}
`;

