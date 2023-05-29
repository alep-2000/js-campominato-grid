PROBLEMA: 
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

SOLUZIONE:
1 - Aggiungere nel DOM una select con i vari livelli di difficoltà;
2 - Aggiungere lo stile della select nel CSS;
3 - Creare una variabile dove richiamo l'elemento del DOM con id='select-difficulty';
4 - Definisco con uno switch il numero di caselle da avere in ogni livello di difficoltà;
5 - Utilizzo il metodo math.sqrt per poter modificare la grandezza delle caselle; 