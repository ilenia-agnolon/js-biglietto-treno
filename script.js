/*
Il programma dovrà chiedere all'utente
- il numero di chilometri che vuole percorrere
- e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio,
secondo queste regole:

-il prezzo del biglietto è definito in base ai km (0.21 € al km)
-va applicato uno sconto del 20% per i minorenni
-va applicato uno sconto del 40% per gli over 65.
-L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali,
per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

TIP:
per controllare che la vostra logica sui prezzi funzioni correttamente,
provate a verificare quanto segue:

100km, 10 anni => prezzo corretto:  €16.80
100km, 70 anni => prezzo corretto: €12.60
_____________________________________________________________________________________________
_____________________________________________________________________________________________
*/


// PASSAGGI LOGICI:

// 1. INPUT
// - chiedere all'utente i km da percorrere
const km = parseInt(prompt("Quanti km vuoi percorrere?"));
console.log("km inseriti", km);

// - chiedere all'utente l'età del passeggero

// 2. ELABORAZIONE
// - calcolare prezzo base = km * 0.21
// - se minorenne applicare sconto 20%
// - se over 65 applicare sconto 40%

// 3. OUTPUT
// - stampare in console il prezzo finale con massimo 2 decimali
