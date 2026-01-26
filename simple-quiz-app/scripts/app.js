const questions=[
  {
    question: 'What does HTML stand for?',
    a: 'Hyper Trainer Marking Language',
    b: 'Hyper Text Markup Language',
    c: 'High Text Markup Language',
    d: 'Hyper Tool Multi Language',
    answer: 'b'
  },
  {
    question: 'Which tag is used to create a hyperlink in HTML?',
    a: '<link>',
    b: '<href>',
    c: '<a>',
    d: '<hyper>',
    answer: 'c'
  },
  {
    question: 'Which CSS property is used to change text color?',
    a: 'font-color',
    b: 'text-color',
    c: 'color',
    d: 'style',
    answer: 'c'
  },
  {
    question: 'Which CSS property controls the space inside an element (between content and border)?',
    a: 'margin',
    b: 'padding',
    c: 'border',
    d: 'spacing',
    answer: 'b'
  },
  {
    question: 'Which HTML tag is commonly used with CSS to create layout sections?',
    a: '<span>',
    b: '<div>',
    c: '<a>',
    d: '<img>',
    answer: 'b'
  }
];
let index=0;
const totalQuestion=questions.length;
let correctAnswer=0;
let wrongAnswer=0;
const questionBox=document.querySelector('.question h1');
const optionBoxs=document.querySelectorAll('.main-section .input input');
const question=questions[index];
function loadQuestion(){
  if(index===totalQuestion){
    return endQuiz();
  }
  resetOption();
  const question=questions[index];
  questionBox.innerText=`${index+1}. ${question.question}`;
  optionBoxs[0].previousElementSibling.innerText=question.a;
  optionBoxs[1].previousElementSibling.innerText=question.b;
  optionBoxs[2].previousElementSibling.innerText=question.c;
  optionBoxs[3].previousElementSibling.innerText=question.d;
}
loadQuestion();
function submitQuiz(){
  const question=questions[index];
  if(selectedOption()===question.answer){
    correctAnswer++;
  }else{
    wrongAnswer++;
  }
  index++;
  loadQuestion();
  return;
}
document.querySelector('.main-section .submit-btn button').addEventListener('click',submitQuiz,false);
function selectedOption(){
  let answer;
  optionBoxs.forEach(function(optionBox){
    if(optionBox.checked){
      answer=optionBox.value;
    }
  });
  return answer;
}

function resetOption(){
  optionBoxs.forEach(function(optionBox){
    if(optionBox.checked){
      optionBox.checked=false;
    }
  });
}

function endQuiz(){
  document.querySelector('.main-section').innerHTML=`
    <div style="padding: 1rem; color: white; text-align: center">
      <h1>Thank you for playing the quiz</h1>
      <h2>Wrong Answer: ${wrongAnswer}</h2>
      <h2>Correct Answer: ${correctAnswer}</h2>
      <h2>${correctAnswer} / ${totalQuestion} are correct</h2>
    </div>
  `;
}
