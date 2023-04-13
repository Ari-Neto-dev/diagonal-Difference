


function diagonalDifference(arr) {
  // Write your code here
  leftDiagonal = 0;
  rightDiagonal = 0;

  for (let index = 0; index < arr.length; index++) {
    leftDiagonal += arr[index][index];
    rightDiagonal += arr[index][arr.length -1- index];
    
  }
  return Math.abs(leftDiagonal - rightDiagonal);

}



console.log(diagonalDifference([
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9]]))
 

  /*
//arrayName[rowIndex][columnIndex]
console.table(diagonalDifference)
//console.log(MathScore[0][0]);
//console.log(MathScore[1][1]);
//console.log(MathScore[2][2]);

console.log(diagonalDifference[0][0] + diagonalDifference[1][1] + diagonalDifference[2][2]);

//console.log(MathScore[2][0]);
//console.log(MathScore[1][1]);
//console.log(MathScore[0][2]);

console.log(diagonalDifference[2][0] + diagonalDifference[1][1] + diagonalDifference[0][2]  )


console.log((diagonalDifference[0][0] + diagonalDifference[1][1] + diagonalDifference[2][2]) - (diagonalDifference[2][0] + diagonalDifference[1][1] + diagonalDifference[0] [2]));
*/