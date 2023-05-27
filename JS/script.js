"use strict"


// CREARE FUNZIONE
function createSquareElement(){
    let square= document.createElement('div');
    square.classList.add('square');
    return square;
}

// RECUPERO L'ELEMENTO CON ID='BUTTON'
const button_element= document.getElementById('button');
console.log(button_element);

// RECUPERO L'ELEMENTO CON ID='GRID'
const grid_element= document.getElementById('grid');

// CICLO FOR
for(let i=0; i<100; i++){
    let square = createSquareElement();
    square.innerText= i + 1;

    square.addEventListener('click', function(){
        this.classList.toggle('clicked');
        console.log(this);
    })
    
    grid_element.append(square);
    
}
