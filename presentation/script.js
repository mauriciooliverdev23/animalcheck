const marker = document.querySelector('#petMarker');
const secondsAgo = document.querySelector('#secondsAgo');
const speedValue = document.querySelector('#speedValue');

const positions = [
  { left: '57%', top: '43%', speed: '6,8 km/h' },
  { left: '61%', top: '40%', speed: '8,1 km/h' },
  { left: '64%', top: '46%', speed: '5,4 km/h' },
  { left: '59%', top: '51%', speed: '3,2 km/h' },
];

let index = 0;
let seconds = 3;

setInterval(() => {
  index = (index + 1) % positions.length;
  marker.style.left = positions[index].left;
  marker.style.top = positions[index].top;
  speedValue.textContent = positions[index].speed;
  seconds = 1;
  secondsAgo.textContent = seconds;
}, 2400);

setInterval(() => {
  seconds += 1;
  secondsAgo.textContent = seconds;
}, 1000);
