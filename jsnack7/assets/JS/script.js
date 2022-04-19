/*
  JSnack 7
  Stampa le potenze di 2 fino a 1000.

  questo snack cela un trabocchetto:  1000 non è una potenza di 2 perciò per fermarsi prima di 1000 bisogna stampare la potenza prima di incrementarla perché altrimenti il controllo viene fatto dopo e si sfora
*/

const limit = 1000;
let number = 2;

const output = document.querySelector(".wrapper");
let result = `<h1>Le potenze di ${number} fino a ${limit}:</h1>
              <ul>`;

for(let i=0; Math.pow(number,i)<limit; i++){
  result += `<li>${Math.pow(number,i)}</li>`;
}

output.innerHTML = result + "</ul>";
