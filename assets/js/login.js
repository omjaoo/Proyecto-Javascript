let loginForm = document.querySelector(".aside-login"); 
let inputName = document.querySelector("#name"); 
let inputEmail = document.querySelector("#email");
let inputPassword = document.querySelector("#pass");
let asideData = document.querySelector(".aside-data");
let loginName = document.querySelector(".data-name");
let btnLogout = document.querySelector(".data-logout");


//funcion para mostrar el usuario a traves de una funcion
function getUser(){
    let myUser = localStorage.getItem("user");
    if(myUser){
        let identity = JSON.parse(localStorage.getItem("user"));
        loginName.innerHTML = identity.name;
        loginForm.classList.add("aside-login-hide");
        asideData.classList.remove("aside-data-hide")
    }
}

//Evento cuand se envie el formulario
loginForm.addEventListener("submit", (e) =>{
    e.preventDefault();

    //recoger los valores del formulario
    let name = inputName.value;
    let email = inputEmail.value;
    let password = inputPassword.value;

    //comprobar que todo está relleno
    if(name && email && password){
        //guardar los datos en un objeto
        //en este array consigo que se cre un clave - valor 
        //email: a lo que haya puesto el usuario de email asi con los otros.
        user = {name,email,password};

        //guardar en el localstorage
        localStorage.setItem("user", JSON.stringify(user))

        //vaciar el formulario
        loginForm.reset();

        //mostrar Usuario
        getUser();
    }
    
});

//mostrar Usuario
getUser();

//logout
btnLogout.addEventListener("click", () => {
    localStorage.clear();
    loginForm.classList.remove("aside-login-hide");
    asideData.classList.add("aside-data-hide");
})
