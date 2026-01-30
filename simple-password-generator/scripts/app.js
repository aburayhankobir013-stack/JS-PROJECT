const upperCaseSet="ABCDEFGHIJKLMNLOQRSTUVWXYZ";
const lowerCaseSet="abcdefghijklmnopqrstuvwxyz";
const numericSet="0123456789";
const specialCharecterSet="!@#$&*";

const displayPassword=document.querySelector('.display-password span');
const passwordLengthInput=document.querySelector('#password-length-label');
const upperCaseInput=document.querySelector('#upper-case-charecter-label');
const lowerCaseInput=document.querySelector('#lower-case-charecter-label');
const numericCharecterInput=document.querySelector('#number-charecter-label');
const specialCharecterInput=document.querySelector('#special-charecter-label');

const getRandomData=function(dataSet){
  return dataSet[Math.floor(Math.random()*dataSet.length)];
}

const generatePassword=function(password=''){
  if(upperCaseInput.checked){
    password+=getRandomData(upperCaseSet);
  }
  if(lowerCaseInput.checked){
    password+=getRandomData(lowerCaseSet);
  }
  if(numericCharecterInput.checked){
    password+=getRandomData(numericSet)
  }
  if(specialCharecterInput.checked){
    password+=getRandomData(specialCharecterSet);
  }
  if(password.length<passwordLengthInput.value){
    return generatePassword(password);
  }
  displayPassword.innerText=truncateString(password,passwordLengthInput.value);
}


const truncateString=function(str,num){
  if(str.length>num){
    let subStr=str.substring(0,num);
    return subStr;
  }else{
    return str;
  }
}
document.querySelector('.button-section button').addEventListener('click',function(){
  generatePassword();
},false);