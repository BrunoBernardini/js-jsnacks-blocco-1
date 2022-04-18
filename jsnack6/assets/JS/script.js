/*
  JSnack 6
  Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
*/

const number = parseInt(prompt("Inserisci il numero da processare:"));
const output = document.querySelector(".wrapper");

let result = `<h1>Il cubo dei primi ${number} numeri:</h1>
              <ul>`;

for(let i=1; i<=number; i++){
  result += `<li>${i}&#179; = ${i*i*i}</li>`;
}

output.innerHTML = result + "</ul>";
