const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let colorLightness = 20;
const customGrey = `rgba(0, 0, 0, 0.${colorLightness})`;

ctx.fillStyle = customGrey;
ctx.fillRect(650, 10, 100, 850);

window.addEventListener('scroll', function() {
  document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
});