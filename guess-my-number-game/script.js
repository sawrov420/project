'use strict';
/*
console.log(document.querySelector('.message').textContent);
  
document.querySelector('.message').textContent ='Correct Number😁'

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13
document.querySelector('.score').textContent = 10


document.querySelector('.guess').value = 23
console.log(document.querySelector('.guess').value)
*/
let secrateNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

console.log(secrateNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    // document.querySelector('.message').textContent = 'no Number😁';

    displayMessage('no Number😁');
  } else if (guess === secrateNumber) {
    document.querySelector('.number').textContent = secrateNumber;
    // document.querySelector('.message').textContent = 'currect number 🎉';
    displayMessage('currect number 🎉');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secrateNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess>secrateNumber?'too high ⚡':'too low 👇🏿';

      displayMessage(guess > secrateNumber ? 'too high ⚡' : 'too low 👇🏿');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'you lose the game😢';

      displayMessage('you lose the game😢');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#FF0000';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secrateNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
