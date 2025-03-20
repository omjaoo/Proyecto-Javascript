//con este evento se espera que cargue todo
window.addEventListener("load", () => {

    //capturo los botones 
    let btnPrev = document.querySelector(".slider-btn-prev");
    let btnNext = document.querySelector(".slider-btn-next");

    //voy a capturar todos los slides
    let slides = document.querySelectorAll(".slides-item")

    //variable contador
    let count = 0;
    let allSlides = slides.length;

    //funcion con la que limpio la clase -activa
    function limpiaActive(){
        slides.forEach(slide => {
            slide.classList.remove("slides-item-active");
        })
    }

    //boton siguiente
    btnNext.addEventListener("click", (e) => {
        e.preventDefault();

        //aumento el contador en 1 segun da click
        count++;

        //estructura if para que no pase imagenes mientras que count sea mayor a allSlides.
        if(count >= allSlides){
            count = 0;
        }

        //ejecuta la funcion para que limpie de clases activas
        limpiaActive();

        //recorro el slide segun en que contador este y le aplico el active
        slides[count].classList.add("slides-item-active")


    });

    


    //boton anterior
    btnPrev.addEventListener("click", (e) => {
        e.preventDefault();

        console.log("estoy entrnaod aqui")

        //aumento el contador en 1 segun da click
        count--;

        //estructura if para que no pase imagenes mientras que count sea menor a 0.
        if(count < 0){
            console.log("entro aqui tambien")
            count = allSlides - 1; // asi alculo la ultima diapositiva
        }

        //ejecuta la funcion para que limpie de clases activas
        limpiaActive();

        //recorro el slide segun en que contador este y le aplico el active
        slides[count].classList.add("slides-item-active")


    });
})