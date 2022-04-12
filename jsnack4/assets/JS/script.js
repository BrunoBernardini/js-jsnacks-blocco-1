/*
  JSnack 2
  L’utente inserisce due parole in successione, con due prompt.
  Il software stampa prima la parola più corta, poi la parola più lunga.
*/

const firstWord = prompt("Inserisci la prima parola");
const secWord = prompt("Inserisci la seconda parola");

const output = document.querySelector(".wrapper");

let biggerWord, smallerWord;

if(firstWord.length >= secWord.length){
  biggerWord = firstWord;
  smallerWord = secWord;
}
else{
  biggerWord = secWord;
  smallerWord = firstWord;
}

output.innerHTML = `<h2>Parole inserite:</h2>
                    <h1><span class="first-word">${biggerWord}</span> - <span class="second-word">${smallerWord}</span></h1>`;