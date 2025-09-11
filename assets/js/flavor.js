
const questions = [
  {
    question: "How do you usually start your morning?",
    options: [
      { text: "Strong kick of energy", points: 4 },
      { text: "Smooth and relaxed", points: 2 },
      { text: "Light and refreshing", points: 1 },
      { text: "Sweet and cozy", points: 3 }
    ]
  },
  {
    question: "Pick your favorite flavor profile:",
    options: [
      { text: "Bold and bitter", points: 4 },
      { text: "Creamy and mild", points: 2 },
      { text: "Icy and refreshing", points: 1 },
      { text: "Sweet and chocolatey", points: 3 }
    ]
  },
  {
    question: "What’s your go-to café vibe?",
    options: [
      { text: "Quick stop, grab and go", points: 4 },
      { text: "Cozy corner, soft music", points: 2 },
      { text: "Cool and trendy, modern design", points: 1 },
      { text: "Chatting with friends, lively", points: 3 }
    ]
  },
  {
    question: "Pick a snack to go with your drink:",
    options: [
      { text: "Croissant", points: 2 },
      { text: "Chocolate cake", points: 3 },
      { text: "No snack, just coffee", points: 4 },
      { text: "Fruit salad", points: 1 }
    ]
  },
  {
    question: "How adventurous are you with drinks?",
    options: [
      { text: "Classic all the way", points: 4 },
      { text: "A bit experimental", points: 2 },
      { text: "I love seasonal specials", points: 3 },
      { text: "Always iced, no matter what", points: 1 }
    ]
  }
];

const coffeeBuckets = [
  { min: 0, max: 7, coffees: ["Iced Latte", "Iced Americano", "Iced Mocha"] },
  { min: 8, max: 11, coffees: ["Cappuccino", "Flat White", "Macchiato"] },
  { min: 12, max: 15, coffees: ["Caffè Latte", "Mocha", "Cortado"] },
  { min: 16, max: 20, coffees: ["Espresso", "Americano", "Ristretto"] }
];

let currentQuestion = 0;
let totalScore = 0;

const quizContainer = document.getElementById("quiz-container");
const progressCircle = document.querySelector(".circle-progress .fill");
const progressText = document.getElementById("progressText");

function updateProgress() {
  const percent = Math.floor((currentQuestion / questions.length) * 100);
  const circumference = 2 * Math.PI * 50; // r=50
  const offset = circumference - (percent / 100) * circumference;
  progressCircle.style.strokeDashoffset = offset;
  progressText.textContent = percent + "%";
}

function showQuestion() {
  updateProgress();
  const q = questions[currentQuestion];
  quizContainer.innerHTML = `
    <div class="question">${q.question}</div>
    <div class="options">
      ${q.options.map(opt => 
        `<button onclick="selectOption(${opt.points})">${opt.text}</button>`
      ).join("")}
    </div>
  `;
}

function selectOption(points) {
  totalScore += points;
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  updateProgress();
  const matched = coffeeBuckets.find(bucket =>
    totalScore >= bucket.min && totalScore <= bucket.max
  );

  const coffee = matched ?
    matched.coffees[Math.floor(Math.random() * matched.coffees.length)] :
    "Surprise Brew ☕";

  quizContainer.innerHTML = `
    <div class="result">
      <h2>Your Coffee Match</h2>
      <div class="coffee-icon">☕</div>
      <p>You got: <strong>${coffee}</strong></p>
      <button class="restart-button" onclick="restartQuiz()">Restart Flavor Finder</button>
    </div>
  `;
}

function restartQuiz() {
  currentQuestion = 0;
  totalScore = 0;
  showQuestion();
}

showQuestion();
