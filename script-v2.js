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

//benvenuto
alert("Benvenuto! Tramite questo programma calcoleremo il prezzo del biglietto per il tuo viaggio in treno! 🚅🙂");

// 1. INPUT

// • chiedere all'utente i km da percorrere e li si salva nella variabile "km"
    const km = parseInt(prompt("Quanti km vuoi percorrere?"));

    //stampare a schermo i km inseriti dall'utente
    console.log("km inseriti", km);


// • chiedere all'utente l'età del passeggero e la si salva nella variabile "eta"
    const eta = parseInt(prompt("Quanti anni hai?"));

    //stampare età
    console.log("età inserita", eta + " " + "anni");

/*******************************************************************************/ 

// 2. ELABORAZIONE

/* • calcolare prezzo base = km * 0.21
    ---> creo una variabile chiamata prezzoBiglietto a cui attribuisco il valore pari
    alla variabile km moltiplicata per il valore fisso 0.21 */
    const prezzoBiglietto = km * 0.21;

    //stampare il prezzo (base) del biglietto
    console.log("prezzo base del biglietto", prezzoBiglietto + "€");


/* • se minorenne applicare sconto 20% , se over 65 applicare sconto 40%
    ---> creo una variabile di scontistica a cui di default attribuisco
        valore 0 */
    let scontoApplicato = 0;

    /* creo una condizione if per modificare il valore dello sconto qualora
       incontri una delle due condizioni qui sotto */
        if (eta < 18) {
            scontoApplicato = 20;
        }
        else if (eta > 65) {
            scontoApplicato = 40;
        }

            /*creo infine la variabile di prezzo finale a cui attribuisco valore pari al
            prezzo del biglietto iniziale meno il valore della variabile di sconto*/
            let prezzoFinale = prezzoBiglietto - (prezzoBiglietto * scontoApplicato / 100);


// 3. OUTPUT

/* • stampare in console il prezzo finale con massimo 2 decimali
    ---> stampare a schermo il riepilogo */
console.log("prezzo base", prezzoBiglietto.toFixed(2) + "€");
console.log("sconto applicato", scontoApplicato + "%");
console.log("prezzo finale", prezzoFinale.toFixed(2) + "€");
alert("Il prezzo del tuo biglietto è " + prezzoFinale + "€");