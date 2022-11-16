// imposto il bottone PLAY
let playButton = document.getElementById('play');
// metto tutti i box nel addeventlistener per generarli al click
playButton.addEventListener('click', 
    function(){
        const myContainer = document.getElementById ("container");
        console.log (myContainer);

        for (let i = 0; i < 100; i++){
                                        // Aggiungo i parametri
            let nuovoElemento = createBox("div", "box", [i + 1]);

            // Aggiungo il click to change 
            nuovoElemento.addEventListener('click', 
                function(){
                    nuovoElemento.classList.toggle('clicked');
                }
            );
            // Aggiungo nuovoElemento a myContainer
            myContainer.appendChild(nuovoElemento);
        }
    }
);




// Functions
function createBox(tipoElemento, classe, insertData){
    // Creo un elemento div
    const mioElemnt = document.createElement (tipoElemento);
    mioElemnt.classList.add(classe);
    // Aggiungo un parametro alla funzione per aggiungere gli elementi
    const addData = document.createTextNode(insertData);
    mioElemnt.appendChild(addData);

    return mioElemnt;
}