const hour=document.querySelector('.hour-hand');
const minute=document.querySelector('.minute-hand');
const second=document.querySelector('.second-hand');

function displayClock(){
  const currentDate=new Date();
  const currentHour=currentDate.getHours();
  const currentMinute=currentDate.getMinutes();
  const currentSecond=currentDate.getSeconds();

  const hourRotation=(30*currentHour)+(0.5*currentMinute);
  const minuteRotation=6*currentMinute;
  const secondRotation=6*currentSecond;

  hour.style.transform=`rotate(${hourRotation}deg) translateY(-50%)`;
  minute.style.transform=`rotate(${minuteRotation}deg) translateY(-50%)`;
  second.style.transform=`rotate(${secondRotation}deg) translateY(-50%)`;
}

setInterval(function(){
  displayClock();
},1000);