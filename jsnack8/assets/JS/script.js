/*
  JSnack 8
  Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.
  
  In questo caso possiamo sfruttare a nostro vantaggio il fatto che la funzione ù prompt restituisca una stringa anche se si è digitato un numero e recuperare una cifra alla volta usanto il ciclo for per scorrere la stringa numerica
*/

const output = document.querySelector(".wrapper");
let number, sum = 0;

do{
  number = prompt("Inserisci un numero a 4 cifre");
}
while((number.length !== 4)||(isNaN(number)))

for(let i=0; i<number.length; i++){
  sum += parseInt(number.charAt(i));
}

output.innerHTML = `<h1>La somma di tutte le cifre di ${number} è ${sum}.</h1>`;


