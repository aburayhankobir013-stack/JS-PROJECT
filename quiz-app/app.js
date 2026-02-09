// ALL DOM ELEMENTS SELECTION
const startQuizContainer=document.querySelector('.start-quiz-container');
const quizQuestionContainer=document.querySelector('.quiz-question-container');
const quizResultContainer=document.querySelector('.quiz-result-container');
const startQuizBtn=document.querySelector('.start-quiz-btn');
const questionContainer=document.querySelector('.question-container h1');
const questionFinished=document.querySelector('.question-finished');
const questionTotal=document.querySelector('.question-total');
const scoreBox=document.querySelector('.score');
const optionBtns=document.querySelectorAll('.option button');
const progress=document.querySelector('.progress');
console.log(progress);
const achieved=document.querySelector('.achieved');
const totalAttemed=document.querySelector('.total-attemed');
const resetBtn=document.querySelector('.reset-btn button');
const comment=document.querySelector('.comment');

// ALL QUIZ QUESTIONS
const quizAllQuestions=[
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false }
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false }
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true }
    ],
  },
  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Banana", correct: true },
      { text: "JavaScript", correct: false }                                                      
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false }
    ]
  }
];

let currentQuestionIndex=0;
let totalQuestions=quizAllQuestions.length;
startQuizBtn.addEventListener('click',startQuiz,false);

function startQuiz(){
  let score=0;
  scoreBox.textContent=score;
  questionFinished.textContent=currentQuestionIndex+1;
  questionTotal.textContent=totalQuestions;
  startQuizContainer.classList.add('start-quiz-screen');
  quizQuestionContainer.classList.remove('quiz-question-screen');
  loadQuestion();
}

function loadQuestion(){
  let currentQuestion=quizAllQuestions[currentQuestionIndex];
  questionContainer.textContent=currentQuestion.question;
  let optionIndex=0;
  optionBtns.forEach(function(optionBtn){
    optionBtn.textContent=currentQuestion.answers[optionIndex].text;
    optionIndex++;
  });
  findAnswer();
}

function findAnswer(){
  
}