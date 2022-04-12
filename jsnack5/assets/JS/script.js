/*
  JSnack 5
  Crea un array vuoto.
  Chiedi per 6 volte all’utente di inserire un numero,
  se è dispari inseriscilo nell’array
*/

const output = document.querySelector(".wrapper");
const arrayNum = [];
const limit = 6;

let result = "";

for(let i=0; i<limit; i++){
  const input = parseInt(prompt("Inserisci un numero, se è dispari verrà inserito nell'array"));
  if(input%2) arrayNum.push(input);
}

for(let i=0; i<arrayNum.length; i++){
  result += `${arrayNum[i]} `;
  console.log(result);
}

output.innerHTML = `<h2>Contenuto dell'array:</h2>
                    <h1>${result}</h1>`;