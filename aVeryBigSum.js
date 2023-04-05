


function aVeryBigSum(ar){
  let soma = 0
  for (let index = 0; index < ar.length; index++) {
    soma = soma + ar[index];
    
  }
  return soma
}


console.log(aVeryBigSum([100,30,60,100000000]))
