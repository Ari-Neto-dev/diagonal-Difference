function bigSum(ar){
  let soma = 0
  for(let index =0; index < ar.length; index++){
    soma = soma + ar[index];
  }
  return soma
}



console.log(bigSum([1, 4, 9, 2 , 1]))