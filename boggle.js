// let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; alphabet[Math.floor(Math.random()*26)]
let dice = ['AAEEGN', 'ELRTTY', 'AOOTTW',
  'ABBJOO', 'EHRTVW', 'CIMOTU', 'DISTTY', 'EIOSST',
  'DELRVY', 'ACHOPS', 'HIMNQU', 'EEINSU', 'EEGHNW',
  'AFFKPS', 'HLNNRZ', 'DEILRX'];
let shuffledDice = [];

function newBoggleBoard() {
  return [
    ['_', '_', '_', '_'],
    ['_', '_', '_', '_'],
    ['_', '_', '_', '_'],
    ['_', '_', '_', '_'],
  ];
}

function printBoggleBoard(boggleBoard) {
  for (let row of boggleBoard) {
    console.log(row.join(' '));
  }
}

function randomRange(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}

function removeElement(selectedDice, index) {
  let item = selectedDice.splice(index, 1)[0];
  return item;
}

function shuffle(dice) {
  while (dice.length > 0) {
    let randIndex = randomRange(dice.length);
    let removedElem = removeElement(dice, randIndex);
    shuffledDice.push(`${removedElem} `);
  }
  return shuffledDice;
}

function shake(board) {
  let shuffledDice = shuffle(dice);
  let diceIndex = 0;
  for (let a = 0; a < board.length; a++) {
    for (let b = 0; b < board[0].length; b++) {
      let randomChar = shuffledDice[diceIndex].charAt(Math.floor(Math.random() * 6)) + ' ';
      if (randomChar === 'Q ') {
        randomChar = 'Qu';
      }
      board[a][b] = randomChar;
      diceIndex++;
    }
  }
  printBoggleBoard(board);
}

let board = newBoggleBoard();

shake(board);
