'use strict';

let srNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No number!');
  } else if (guess === srNumber) {
    displayMessage('Correct number!');
    document.querySelector('.number').textContent = srNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess != srNumber) {
    if (score > 1) {
      guess > srNumber
        ? displayMessage('Too high !')
        : displayMessage('Too low !');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lose !');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  srNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').textContent = '';
});
