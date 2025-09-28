const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const stars = [];
const numStars = 200;

for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 1.5,
    d: Math.random() * 0.5
  });
}

function draw() {
  ctx.clearRect(0, 0, width, height);
  for (let i = 0; i < stars.length; i++) {
    let s = stars[i];
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
    ctx.fillStyle = `rgba(255, 255, 255, ${s.d})`;
    ctx.fill();
  }
  update();
}

let angle = 0;

function update() {
  angle += 0.01;
  for (let i = 0; i < stars.length; i++) {
    let s = stars[i];
    s.y += Math.sin(angle) * 0.5;
    s.x += Math.cos(angle) * 0.5;
    if (s.x > width) s.x = 0;
    if (s.x < 0) s.x = width;
    if (s.y > height) s.y = 0;
    if (s.y < 0) s.y = height;
  }
  requestAnimationFrame(draw);
}

draw();

window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});