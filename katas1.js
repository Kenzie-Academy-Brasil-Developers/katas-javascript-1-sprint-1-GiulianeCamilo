function oneThroughTwenty() {
   let resultado = [];
   for (let contagem = 1; contagem <= 20; contagem++){
    resultado += contagem

   }
   return resultado
  }
 console.log(oneThroughTwenty())

function evensToTwenty() {
    let resultado = [];
  for (let pares = 1; pares <= 20; pares++){
    if (pares % 2 ===0)
    resultado += pares
  }
  return resultado
}
console.log(evensToTwenty())

function oddsToTwenty() {
    let resultado = [];
  for (let impares = 0; impares < 20; impares++) {
    if (impares % 2 != 0) {
      resultado += impares 
}
  }
  return resultado

}
console.log(oddsToTwenty())

function multiplesOfFive() {
  let resultado = [];
  for(let multiplos = 5 ; multiplos <= 100 ; multiplos++){
		if(multiplos % 5 ==0){
			resultado += multiplos
		}
	}  
  return resultado

 }
 console.log(multiplesOfFive())

 function squareNumbers() {
  let resultado = [];
  for (let quadrados = 1; quadrados < 10; quadrados++) {
    resultado += quadrados
  }
  return resultado

}
console.log(squareNumbers())
 

function countingBackwards() {
  let resultado = [];
  for (let i = 20; i >= 1; i--){
    resultado += i
}
return resultado

  }
   
  console.log(countingBackwards()) 

  function evenNumbersBackwards() {
    let resultado = [];
    for (let pares = 20; pares >= 1; pares--){
      if (pares % 2 ===0)
      resultado += pares
    }
    return resultado

}
console.log(evenNumbersBackwards())

function oddNumbersBackwards() {  
   let resultado = [];  
  for (let impares = 20; impares > 1; impares--) {
    if (impares % 2 != 0) {
      resultado += impares 
}
  }
  return resultado

}
  console.log(oddNumbersBackwards())

  function multiplesOfFiveBackwards() {
    let resultado = [];
    for(let multiplos = 100 ; multiplos >= 5 ; multiplos--){
      if(multiplos % 5 ==0){
        resultado += multiplos
      }
    }  
    return resultado

}
console.log(multiplesOfFiveBackwards())

function squareNumbersBackwards() {
    let resultado = [];
      for (let quadrados = 10; quadrados > 1; quadrados--) {
      resultado += quadrados
    }
    return resultado

  }

  console.log(squareNumbersBackwards())
