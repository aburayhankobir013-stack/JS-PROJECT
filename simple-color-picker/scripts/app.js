function randomColorCode(){
  const randomNumber=Math.floor(Math.random()*16777215);
  const hexColorCode='#'+randomNumber.toString(16);
  document.body.style.backgroundColor=hexColorCode;
  document.querySelector('.color-code span').innerText=hexColorCode;
  navigator.clipboard.writeText(hexColorCode);
}

document.querySelector('.btn button').addEventListener('click',randomColorCode,false);
randomColorCode();