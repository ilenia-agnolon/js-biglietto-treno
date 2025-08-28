/*
_____________________________________________________________________________________________
_____________________________________________________________________________________________
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
    - 100km, 10 anni => prezzo corretto:  €16.80
    - 100km, 70 anni => prezzo corretto: €12.60
_____________________________________________________________________________________________
_____________________________________________________________________________________________
*/



// PASSAGGI LOGICI:

/*******************************************************************************/

// 1. INPUT

// - chiedere all'utente i km da percorrere
const km = parseInt(prompt("Quanti km vuoi percorrere?"));
console.log("km inseriti", km);


// - chiedere all'utente l'età del passeggero
const eta =parseInt(prompt("Quanti anni hai?"));
console.log("età inserita", eta);

/*******************************************************************************/ 

// 2. ELABORAZIONE

// - calcolare prezzo base = km * 0.21
const prezzoBiglietto = km * 0.21;
console.log("prezzo del biglietto", prezzoBiglietto);


// - se minorenne applicare sconto 20%
let prezzoConSconto = prezzoBiglietto;

if (eta < 18) {
    prezzoConSconto = prezzoBiglietto - (prezzoBiglietto * 0.20)
    console.log("prezzo del biglietto con sconto minorenni (-20%)", 
        //OUTPUT:
        prezzoConSconto.toFixed(2) + "€");
}
// - se over 65 applicare sconto 40%
else if (eta > 65) {
    prezzoConSconto = prezzoBiglietto - (prezzoBiglietto * 0.40)
    console.log("prezzo del biglietto con sconto over 65 (-40%)",
        prezzoConSconto.toFixed(2) + "€");
}

//se invece non è minorenne o over 65
else if (eta >=18 && eta <= 65) {
    console.log("prezzo del biglietto senza sconto", prezzoBiglietto.toFixed(2) + "€");
}

/*******************************************************************************/ 

// 3. OUTPUT

// - stampare in console il prezzo finale con massimo 2 decimali
// console.log("prezzo finale: €" + prezzoConSconto.toFixed(2));
/*******************************************************************************/
