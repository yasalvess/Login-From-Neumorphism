const aContainer = document.getElementById('a-container');
const bContainer = document.getElementById('b-container');
const switchC1 = document.getElementById('switch-c1');
const switchC2 = document.getElementById('switch-c2');
const switchBtn = document.querySelectorAll('.switch-btn');

switchBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    aContainer.classList.toggle('is-hidden');
    bContainer.classList.toggle('is-z200');
    switchC1.classList.toggle('is-hidden');
    switchC2.classList.toggle('is-hidden');
  });
});