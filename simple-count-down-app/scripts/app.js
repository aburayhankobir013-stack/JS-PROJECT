const futureDate = new Date("2026-01-27");
const paragraph=document.querySelector('.main-section-title p');
paragraph.innerText=futureDate.toLocaleDateString().replaceAll('/','-');
const inputs = document.querySelectorAll("input");

function countDown() {
  const now = new Date();
  const difference = (futureDate - now) / 1000;
  if (difference > 0) {
    const days = Math.floor(difference / 3600 / 24);
    inputs[0].value = days;
    const hours = Math.floor((difference / 3600) % 24);
    inputs[1].value = hours;
    const minutes = Math.floor((difference / 60) % 60);
    inputs[2].value = minutes;
    const seconds = Math.floor(difference % 60);
    inputs[3].value = seconds;
  }else{
    return;
  }
}
setInterval(function () {
  countDown();
}, 1000);
