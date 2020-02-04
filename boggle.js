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

// function shuffle(allArrays) {
//   for (let a = 0; a <= 7; a++) {
//     let randomDie = Math.floor(Math.random() * 16);
//     allArrays.push(allArrays[randomDie]);
//     allArrays.splice(randomDie, 1);
//   }
//   console.log(allArrays);
// }

function randomRange(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}

function removeElement(selectedDice, index) {
  let item = selectedDice.splice(index, 1)[0];
  return item;
}

function shuffle(selectedDice) {
  while (dice.length > 0) {
  // console.log(dice);
    let randIndex = randomRange(dice.length);
    let removedElem = removeElement(dice, randIndex);
    shuffledDice.push(removedElem);
  // return shuffledArray;
    // console.log(removedElem);
  }
  return shuffledDice;
}

function shake(board) {
  let finalDice = shuffle(dice);
  // console.log(finalArray);
  let diceIndex = 0;
  for (let a = 0; a < 4; a++) {
    for (let b = 0; b < 4; b++) {
      // let randomDie = allArrays[Math.floor(Math.random() * 16)];
      let randomChar = finalDice[diceIndex].charAt(Math.floor(Math.random() * 6));
      // console.log('Die, char:', randomChar, allArraysIndex);
      board[a][b] = randomChar;
      diceIndex++;
    }
  }
  return board;
}

// console.log(newBoggleBoard);

let board = newBoggleBoard();

shake(board);
console.log(board);

// printBoggleBoard(newBoggleBoard);
