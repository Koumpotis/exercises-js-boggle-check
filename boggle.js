// let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; alphabet[Math.floor(Math.random()*26)]
let allArrays = ['AAEEGN', 'ELRTTY', 'AOOTTW',
  'ABBJOO', 'EHRTVW', 'CIMOTU', 'DISTTY', 'EIOSST',
  'DELRVY', 'ACHOPS', 'HIMNQU', 'EEINSU', 'EEGHNW',
  'AFFKPS', 'HLNNRZ', 'DEILRX'];
let shuffledArray = [];

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

function randomRange(length) {
  return Math.floor(Math.random() * length - 1);
}

function removeElement(allArrays, index) {
  let item = allArrays.splice(index, 1)[0];
  return item;
}

function shuffle(allArrays) {
  while (allArrays.length > 0) {
    let randIndex = randomRange(allArrays.length);
    let removedElem = removeElement(allArrays, randIndex);
    shuffledArray.push(removedElem);
   // return shuffledArray;
    // console.log(removedElem);
  }
  return shuffledArray;
}

function shake(board) {
  let finalArray = shuffle(allArrays);
  console.log(finalArray);
  let allArraysIndex = 0;
  for (let a = 0; a < 4; a++) {
    for (let b = 0; b < 4; b++) {
      // let randomDie = allArrays[Math.floor(Math.random() * 16)];
      let randomChar = finalArray[allArraysIndex].charAt(Math.floor(Math.random() * 6));
      // console.log('Die, char:', randomChar, allArraysIndex);
      board[a][b] = randomChar;
      allArraysIndex++;
    }
  }
  return board;
}

// console.log(newBoggleBoard);

let board = newBoggleBoard();

shake(board);
console.log(board);

// printBoggleBoard(newBoggleBoard);
