/*
  JSnack 3
  Il software deve chiedere per 5 volte all’utente di inserire un numero.
  Il programma stampa la somma di tutti i numeri inseriti.
  Esegui questo programma in due versioni, con il for e con il while (facoltativo) 
*/

const output = document.querySelector(".wrapper");
const limit = 5;

let somma = 0;

for(let i=0; i<limit; i++){
  const input = parseInt(prompt(`Inserisci il ${i+1}° numero:`));
  somma += input;
}

output.innerHTML = `<h2>Risultato della somma:</h2>
                    <h1>${somma}</h1>`;