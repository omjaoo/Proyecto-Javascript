let collapses = document.querySelectorAll(".accordion-collapse");

//recoorro todos los acordeones
collapses.forEach( element => {
    
    //capturo el click en el header
    let header = element.querySelector(".collapse-header");

    header.addEventListener("click", () => {

        //crea la clase y  si no la elimina con toggle, asi hara la funcionalidasd de exterdery recoger
        //el primer click crea la clase el segundo click elimina la clase
        element.classList.toggle("accordion-collapse-open")
    })

});