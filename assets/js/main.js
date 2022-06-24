const num_card = document.getElementById("num_card");
const name_card = document.getElementById("name_card");
const expi_date = document.getElementById("expi_date");
const contenu = document.getElementById("contenu");
const form = document.getElementById("form");
const card_inner = document.getElementById("card_inner");
const small_containt2 = document.getElementById("small_containt2");
const crypto = document.getElementById("crypto");
const flip = document.getElementById('flip');


crypto.onfocus = function(){
    flip.style.transform = "rotateY(180deg)";
}

crypto.onblur = function(){
    flip.style.transform = "rotateY(0deg)";
}

function verifierCaracteres(event) {
             
    var keyCode = event.which ? event.which : event.keyCode;
    var touche = String.fromCharCode(keyCode);
            
    var champ = document.getElementById('num_card'); 
    var caracteres = '0123456789';
            
    if(caracteres.indexOf(touche) >= 0) {
        champ.value += touche;
    }

    if (num_card.value.length === 4 || num_card.value.length === 9 || num_card.value.length === 14) {
        num_card.value +=" ";
    }
    else {
        return num_card;
    }      
}

// function onlyNumber()
// {
//     var num_card = document.getElementById('num_card');
//     if (num_card.value.match(/[^0-9]/,''))
//     {
//         num_card.value = num_card.value.replace(/[^0-9]/,' ');
//     }
//     if (num_card.value.length === 4 || num_card.value.length === 9 || num_card.value.length === 14) {
//         num_card.value +=" ";
//     }
// };

num_card.addEventListener('input', (e) => {
    
    const value = num_card.value;
    if (num_card.value.length == 0){
    contenu.innerHTML ='<p>&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;</p>';
    }
    if (num_card.value.length == 1 || num_card.value.length == 2 || num_card.value.length === 3 || num_card.value.length === 4 ||
        num_card.value.length === 5 || num_card.value.length === 6 || num_card.value.length === 7 || num_card.value.length === 8 ||
        num_card.value.length === 9 || num_card.value.length === 10 || num_card.value.length === 11 || num_card.value.length === 12 ||
        num_card.value.length === 13 || num_card.value.length === 14 || num_card.value.length === 15 || num_card.value.length === 16 ||
        num_card.value.length === 17 || num_card.value.length === 18 || num_card.value.length === 19 || num_card.value.length === 20 
        ){
        contenu.innerHTML =`${value}`;
        }
});


name_card.addEventListener('input', (e) => {
    
    const value = name_card.value;
    if (name_card.value.length === 0){
    contenu2.innerHTML ='FULL NAME';
    }
    if (name_card.value.length === 1 || name_card.value.length === 2 || name_card.value.length === 3 || name_card.value.length === 4 ||
        name_card.value.length === 5 || name_card.value.length === 6 || name_card.value.length === 7 || name_card.value.length === 8 ||
        name_card.value.length === 9 || name_card.value.length === 10 || name_card.value.length === 11 || name_card.value.length === 12 ||
        name_card.value.length === 13 || name_card.value.length === 14 || name_card.value.length === 15 || name_card.value.length === 16 ||
        name_card.value.length === 17 || name_card.value.length === 18 || name_card.value.length === 19 || name_card.value.length === 20 ||
        name_card.value.length === 21 || name_card.value.length === 22 || name_card.value.length === 23 || name_card.value.length === 24
        ){
        contenu2.innerHTML =`${value}`;
        }
});


expi_date.addEventListener('input', (e) => {
    
    const value = expi_date.value;
    contenu3.textContent =` ${value}`;
    if (expi_date.value.length === 0){
        contenu3.innerHTML ='MM/YY';
        }
        if (expi_date.value.length === 1 || expi_date.value.length === 2 || expi_date.value.length === 3 || expi_date.value.length === 4 ||
            expi_date.value.length === 5  
            ){
            contenu3.innerHTML =`${value}`;
            }
    

    
    
});

crypto.addEventListener('input', (e) => {
    
    const value = crypto.value;
    contenu4.textContent =` ${value}`;
    
});