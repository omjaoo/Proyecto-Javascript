let irArriba = document.querySelector(".footer-top");


irArriba.addEventListener("click", (e) => {
    e.preventDefault();

    //modifico el scroll, suavizado
    window.scroll({
        top:0,
        left:0,
        behavior:"smooth"
    })
    
})