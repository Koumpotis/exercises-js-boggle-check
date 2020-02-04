// let a= ['abcd', '2', '3', 'here', 'and here','and there'];
// // let b=[];
// // b.push(a[0]);
// // a.pop();
// // console.log(b);
// // console.log(a);


//  let b = a.splice(0,1); // delete element with index 4
//  console.log(a);
// console.log( b ); // [1, 2, 3, 4, undefined, 6]
let allArrays = ['AAEEGN', 'ELRTTY', 'AOOTTW',
  'ABBJOO', 'EHRTVW', 'CIMOTU', 'DISTTY', 'EIOSST',
  'DELRVY', 'ACHOPS', 'HIMNQU', 'EEINSU', 'EEGHNW',
  'AFFKPS', 'HLNNRZ', 'DEILRX'];
let shuffledArray = [];

function randomRange(length){
  return Math.floor(Math.random()*length-1);
}

function removeElement(allArrays, index){
  let item = allArrays.splice(index, 1)[0];
  return item;
}

while(allArrays.length>0){
  randIndex = randomRange(allArrays.length)
  removedElem = removeElement(allArrays,randIndex);
  shuffledArray.push(removedElem);
  //console.log(removedElem);
}
console.log(shuffledArray);
