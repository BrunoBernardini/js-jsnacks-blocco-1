/*
  JSnack 1
  L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/

const firstNum = parseInt(prompt("Inserisci il primo numero"));
const secNum = parseInt(prompt("Inserisci il secondo numero"));
const output = document.querySelector(".content");

if(firstNum > secNum){
  output.innerHTML = firstNum;
}
else{
  output.innerHTML = secNum;
}