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
var newTicketTotalPrices = ticketTotalPrices.toFixed(2);
console.log(ticketTotalPrices);

// Ottenuto il prezzo del Biglietto , diamo la possibilità all'Utente di ottenere uno sconto se soddisfa determinati requisiti, e poi stampiamo il tutto
var ticketMinors;
var ticketSenior;

if( age < 18) {
    ticketMinors = ticketTotalPrices - (ticketTotalPrices * 20 / 100);
    var newTicketMinors = ticketMinors.toFixed(2);
    console.log(newTicketMinors);
    document.getElementById('ticket').innerHTML = 'Sei minorenne! Hai ottenuto uno sconto del 20%: ' + newTicketMinors + '€';
} else if( age > 65) {
    ticketSenior = ticketTotalPrices - (ticketTotalPrices * 40 / 100);
    var newTicketSenior = ticketSenior.toFixed(2);
    console.log(newTicketSenior);
    document.getElementById('ticket').innerHTML = 'Abbiamo rispetto per gli over 65, sul suo biglietto verrà applicato uno sconto del 40%: ' + newTicketSenior + '€';
} else {
    document.getElementById('ticket').innerHTML = 'Purtroppo, non hai diritto ad alcuno sconto :( :' + newTicketTotalPrices + '€';
}
