const display=document.querySelector('.display-section input');
const buttons=document.querySelectorAll('.btn button');

let expression='';
function calculator(){
  buttons.forEach(function(button){
    button.addEventListener('click',function(event){
      if(event.target.innerText==='='){
        display.value=eval(expression);
        expression=eval(expression);
      }else if(event.target.innerText==='DEL'){
        expression=expression.slice(0,-1);
        display.value=expression;
      }else if(event.target.innerText==='AC'){
        expression='';
        display.value=expression;
      }else{
        expression+=event.target.innerText;
        display.value=expression;
      }
    },false);
  });
}

calculator();