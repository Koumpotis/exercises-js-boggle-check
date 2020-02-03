let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

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


function shake(board) {
 for (a=0; a<=15; a++){
   board[a] = alphabet[Math.floor(Math.random()*26)];
 }
  return board;
}
//console.log(newBoggleBoard);
let board = newBoggleBoard();

shake(board);
console.log( board);

//printBoggleBoard(newBoggleBoard);
