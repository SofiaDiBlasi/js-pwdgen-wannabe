let nome = prompt ("Inserisci qui il tuo nome") ;

console.log (`Il nome utente è ${nome}`)

let cognome = prompt ("Inserisci qui il tuo cognome") ;


let colore= prompt ("Inserisci qui il tuo colore preferito") ;

let anno = 2023

let password = nome + cognome + colore + anno;

document.getElementById("password").innerText = password;

