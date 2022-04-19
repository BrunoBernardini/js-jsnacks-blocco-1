/*
  JSnack 9
  Calcola la somma e la media dei primi 10 numeri.
*/

const output = document.querySelector(".wrapper");
const limit = 10;

let sum = 0;
let content = `<h1>La somma e la media dei primi ${limit} numeri:</h1>
              <ul>`;

for(let i=1; i<=limit; i++){
  sum += i;
}
content += `<li>${sum}</li>
            <li>${sum/limit}</li>
           <ul>`;
output.innerHTML = content;