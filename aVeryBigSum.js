


function aVeryBigSum(ar){
  let soma = 0
  for (let index = 0; index < ar.length; index++) {
    console.log('variavel soma >>>', soma)
    console.log('soma da variavel soma + arr index >>>', soma + ar[index])
    soma = soma + ar[index];
    
  }
  return soma
}


console.log(aVeryBigSum([100,30,60,100000000]))
