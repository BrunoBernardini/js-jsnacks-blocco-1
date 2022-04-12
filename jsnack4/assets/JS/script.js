/*
  JSnack 4
  In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
  chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

const invited = ["Domenico Agostino",
"Mihai Badia",
"Riccardo Becattini",
"Manuel Benini",
"Bruno Bernardini",
"Guido Buono",
"Pierluigi Cancellaro",
"Francesco Cataletto",
"Stefano Cravotta",
"Giovanni Crispino",
"Giancarlo Croce",
"Enrico De Stefano",
"Silvia Dugato",
"Carlo Duminuco Del Monte",
"Francesco Ercoli",
"Luca Gaddini",
"Marco Gagliano",
"Cristina Gasperini",
"Gabriele Giusti",
"Chiara Grillo",
"Manuela Ienuso",
"Michele Iliescu",
"Ketevan Jorjoliani",
"Renato Lami",
"Davide Manciucca",
"Emanuele Mastronardi",
"Luca Mazzarini",
"Daniele Monteleone",
"Salvatore Olivieri",
"Leonardo Pellegrini",
"Agostino Piquè",
"Davide Pizzolla",
"Antonio Pollo",
"Ivan Russo",
"Amanjit Singh",
"Sebastiano Visco"
];

const output = document.querySelector(".wrapper");
const nameSurname = prompt("Inserisci nome e cognome:")

let found = false, result = `<span class="red">Mi dispiace, non rientri nella lista degli invitati!</span>`;

for(let i=0; i<invited.length; i++){
  if(nameSurname === invited[i]) found = true;
}

if(found) result = `<span class="green">Sei nella lista degli invitati alla festa del grande Gatsby, benvenuto!</span>`;

output.innerHTML = `<h1>${result}</h1>`;