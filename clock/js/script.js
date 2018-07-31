const sHand = document.querySelector('.s-hand');
const mHand = document.querySelector('.m-hand');
const hHand = document.querySelector('.h-hand');

function setDate(){
  const now = new Date();
  
  const sec = now.getSeconds();
  const secDeg = ((sec /60) *360) +90;
    sHand.style.transform = `rotate(${secDeg}deg)`;
  
  const min = now.getMinutes();
  const minDeg = ((min / 60) * 360) + ((sec/60)*6) + 90;
  mHand.style.transform = `rotate(${minDeg}deg)`;
  
  const hour = now.getHours();
  const hourDeg = ((hour / 12) * 360) + ((min/60)*30) + 90;
  hHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setDate, 1000);
setDate();