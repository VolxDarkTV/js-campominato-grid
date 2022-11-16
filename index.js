// imposto il bottone PLAY
let playButton = document.getElementById('play');

playButton.addEventListener('click', 
    function(){
        const myContainer = document.getElementById ("container");
        console.log (myContainer);

        for (let i = 0; i < 100; i++){
            let nuovoElemento = createBox("div", "box");
            nuovoElemento.addEventListener('click', 
                function(){
                    nuovoElemento.classList.toggle('clicked');
                }
            );
            myContainer.appendChild(nuovoElemento);
        }
    }
);




// Functions
function createBox(tipoElemento, classe){
    // Creo un elemento div
    const mioElemnt = document. createElement ( tipoElemento);
    mioElemnt.classList.add(classe);

    return mioElemnt;
}