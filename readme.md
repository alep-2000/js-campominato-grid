PROBLEMA: 
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

SOLUZIONE: 
1 - Inserire un div con id='grid' nel DOM;
2 - Inserire un button nel DOM;
3 - Recuperare nel javascript l'elemento con id='grid';
4 - Recuperare nel javascript l'elemento con id='button';
5 - Creare una funzione;
    5.1 - Creare singolo quadratino con createElement('div);
    5.2 - Creare una classe con classList.add(square);
    5.3 - Creare una classe con classList.add(invisible);
6 - Creare CICLO FOR;   
7 - Creo una funzione in cui aggiungo un evento al click con addEventListener;
    7.1 - Quanto clicco il button appare la griglia
    7.1 - Quando clicco il quadratino diventa azzurro, quando riclicco torna normale aggiungendo la classe 'clicked' con .classList;
8 - Appendo l'elemento con id='grid';
9 - Stampo nel DOM;
