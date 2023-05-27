"use strict"


// CREARE FUNZIONE
function createSquareElement(){
    let square= document.createElement('div');
    square.classList.add('square');
    square.classList.add('invisible');
    return square;
}

// RECUPERO L'ELEMENTO CON ID='BUTTON'
const button_element= document.getElementById('button');


// RECUPERO L'ELEMENTO CON ID='GRID'
const grid_element= document.getElementById('grid');

// CICLO FOR
for(let i=0; i<100; i++){
    let square = createSquareElement();
    square.innerText= i + 1;

// EVENT LISTENER
    button_element.addEventListener('click', function(){
        square.classList.remove('invisible');
        square.classList.add('visible');
    }) 

    square.addEventListener('click', function(){
        this.classList.toggle('clicked');
        console.log(this);
    })

// APPENDO LA GRIGLIA
    grid_element.append(square);
    
}
