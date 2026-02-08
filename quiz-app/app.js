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
    question: 'What is the capital of France?',
    answers: [
      {text: 'London', correct: false},
      {text: 'Berlin', correct: false},
      {text: 'Paris', correct: true},
      {text: 'Madrid', correct: false}
    ]
  },
  {
    question: 'Which planet is known as the Red Planet?',
    answers: [
      {text: 'Venus', correct: false},
      {text: 'Mars', correct: true},
      {text: 'Jupiter', correct: false},
      {text: 'Seturn', correct: false}
    ]
  },
  {
    question: 'What is the largest ocean on Earth?',
    answers: [
      {text: 'Atlantic Ocean', correct: false},
      {text: 'Indian Ocean', correct: false},
      {text: 'Arctic Ocean', correct: false},
      {text: 'Pacifi Ocean', correct: true}
    ]
  }
];
// QUIZ STATE VARIABLES
let currentQuestionIndex=0;
let score=0;
let answersDisabled=false;

questionTotal.textContent=quizAllQuestions.length;
totalAttemed.textContent=quizAllQuestions.length;

startQuizBtn.addEventListener('click',startQuiz,false);
resetBtn.addEventListener('click',restartQuiz,false);

function startQuiz(){
  currentQuestionIndex=0;
  scoreBox.textContent=0;
  startQuizContainer.classList.add('start-quiz-screen');
  quizQuestionContainer.classList.remove('quiz-question-screen');
  showQuestion();
  console.log('Start Quiz now!');
}

function showQuestion(){
  answersDisabled=false;
  const currentQuestion=quizAllQuestions[currentQuestionIndex];
  questionFinished.textContent=currentQuestionIndex+1;
  const progressPercentage=(currentQuestionIndex/quizAllQuestions.length)*100;
  progress.style.width=`${progressPercentage}%`;
  questionContainer.textContent=currentQuestion.question;
  optionBtns.forEach(function(optionBtn){
    currentQuestion.answers.forEach(function(answer){
      optionBtn.textContent=answer.text;
    });
  });
}

function restartQuiz(){
  console.log('Restart Quiz now!');
}