function oneThroughTwenty() {
   
   for (let contagem = 1; contagem <= 20; contagem++){
    console.log(contagem)

   }
   
  }
  oneThroughTwenty()

function evensToTwenty() {
    
  for (let pares = 1; pares <= 20; pares++){
    if (pares % 2 ===0)
    console.log(pares)
  }
}
evensToTwenty()

function oddsToTwenty() {
    
  for (let impares = 0; impares < 20; impares++) {
    if (impares % 2 != 0) {
      console.log(impares) 
}
  }
}
oddsToTwenty()

function multiplesOfFive() {
  
  for(let multiplos = 5 ; multiplos <= 100 ; multiplos++){
		if(multiplos % 5 ==0){
			console.log(multiplos);
		}
	}  
 }
 multiplesOfFive()

 function squareNumbers() {
  for (let quadrados = 1; quadrados < 10; quadrados++) {
    console.log(quadrados * quadrados);
  }
}
squareNumbers()
 

function countingBackwards() {
  for (let i = 20; i >= 1; i--){
    console.log(i)
}
  }
   
  countingBackwards() 

  function evenNumbersBackwards() {
    for (let pares = 20; pares >= 1; pares--){
      if (pares % 2 ===0)
      console.log(pares)
    }
}
evenNumbersBackwards()

function oddNumbersBackwards() {  
     
  for (let impares = 20; impares > 1; impares--) {
    if (impares % 2 != 0) {
      console.log(impares) 
}
  }
}
  oddNumbersBackwards()

  function multiplesOfFiveBackwards() {
    
    for(let multiplos = 100 ; multiplos >= 5 ; multiplos--){
      if(multiplos % 5 ==0){
        console.log(multiplos);
      }
    }  
}
multiplesOfFiveBackwards()

function squareNumbersBackwards() {
    
      for (let quadrados = 10; quadrados > 1; quadrados--) {
      console.log(quadrados * quadrados);
    }
  }

  squareNumbersBackwards()
