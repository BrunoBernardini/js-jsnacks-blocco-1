/*
  JSnack 1
  L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/

const firstNum = parseInt(prompt("Inserisci il primo numero"));
const secNum = parseInt(prompt("Inserisci il secondo numero"));

const output = document.querySelector(".wrapper");

let biggerNum = secNum, result = "Il numero più grande che hai inserito &egrave;:";

if(firstNum > secNum){
  biggerNum = firstNum;
}
else if(firstNum < secNum){
  biggerNum = secNum;
}
else{
  result = "Hai inserito due numeri uguali:";
}

output.innerHTML = `<h2>${result}</h2>
                    <h1>${biggerNum}</h1>`;