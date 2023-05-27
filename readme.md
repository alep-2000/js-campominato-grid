PROBLEMA: 
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

SOLUZIONE: 
1 - Inserire un div con id='grid' nel DOM;
2 - Inserire un button nel DOM;
3 - Recuperare nel javascript l'elemento con id='grid';
4 - Creare CICLO FOR;
    4.1 - Creare singolo quadratino con createElement('div);
    4.2 - Creo una classe con classList.add(square);
5 - Creo una funzione in cui aggiungo un evento al click con addEventListener;
    5.1 - Quando clicco il quadratino diventa azzurro, quando riclicco torna normale aggiungendo la classe 'clicked' con .classList;
6 - Appendo l'elemento con id='grid';
7 - Stampo nel DOM;
