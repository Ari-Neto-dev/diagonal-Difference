//contar e somar os elemetos de um array

let ar = [10,4,3,2,1];


function simpleArraySum(arrayEsperado){
  let somar = 0;

  for (index = 0; index < arrayEsperado.length; index+=1) {
    somar += arrayEsperado[index];
  }

  return somar
}

console.log(simpleArraySum(ar));
console.log(ar.length)