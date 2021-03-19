// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.
// // L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


// Chiediamo all'utente i dati che ci interessano (i chilometri e l'età)
var kilometres = prompt("Quanti chilometri vuoi percorrere?")
console.log(kilometres);

var age = prompt("Quanti anni hai?")
console.log(age);

// convertiamo i dati ottenuti (attualmente stringhe) in numeri
var kilometresNumb = parseInt(kilometres);
console.log(kilometresNumb);

var ageNumb = parseInt(age);
console.log(ageNumb);

// Ottenuti le Informazioni , calcoliamo il prezzo del biglietto
var ticketPrices = 0.21;

var ticketTotalPrices = kilometresNumb * ticketPrices;
console.log(ticketTotalPrices);