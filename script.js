 
//creazione variabile 

let nome = prompt("Inserisci il nome");
let cognome = prompt("Inserisci il cognome");
let colorePreferito = prompt("Inserisci il colore preferito");
let numero = prompt ("Inserisci 21")


/* Console log */

console.log(
    `
        Nome            : ${nome}
        Cognome         : ${cognome}
        Colore Preferito: ${colorePreferito}
        21              :  ${numero}
    `
);


let numero1 = prompt("Inserisci un numero")
let numero2 = prompt ("Inserisci un altro numero")

numero1 = parseInt(numero1);
console.log("Quanto vale numero1: " + numero1)

numero2 = parseInt(numero2);
console.log("Quanto vale numero2: " + numero2)

let divisione = numero1 / numero2;



console.log( "Risultato divisione: " + divisione);

// CONCATENO LE VARIABILI PER GENERARE UNA PASSWORD

let password = nome + cognome + colorePreferito + divisione ;

console.log(password)
 
document.getElementById("passwordGenerata").innerHTML = password;
