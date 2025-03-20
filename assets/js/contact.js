//usamos el objeto de jusValidate la libreria que hemos importado

//le paso al objeto just como parametro la clase del formulario que quiero validar en este caso
const validation = new JustValidate(".main-contact");

let isValidate = false;

//Reglas de Validación, a traves de .addField puedo validar los campos de mi formulario 
//Se lo especifico por parametro , abro un array depsues corchetes y ahi iran las reglas la mas 
// tipica required pero tambien puedo poner la longitud etc al igual que poner un error

validation
    .addField("#name2",[
        {
            rule: "required",
            errorMenssage: "El nombre es obligatorio"
        },
        {
            rule:"minLength",
            value:3,
            errorMessage: "El nombre es muy corto"
        },
        {
            rule: "maxLength",
            value:15,
            errorMessage:"El nombre es demasiado largo"
        }
    ])
    .addField("#apellidos", [
        {
            rule: "required",
            errorMenssage: "El apellido es obligatorio"
        },
        {
            rule:"minLength",
            value:3,
            errorMessage: "El apellido es muy corto"
        },
        {
            rule: "maxLength",
            value:15,
            errorMessage:"El apellido es demasiado largo"
        }
    ])
    .addField("#email2", [
        {
            rule: "required",
            errorMenssage: "El email es obligatorio"
        },
        {
            rule: "email",
            errorMenssage: "El email no es válido"
        }
    ])
    .addField("#gender",[
        {
            rule:"required",
            errorMenssage:"Selecciona un genero"
        }
    ])
    .addField("#date",[
        {
            rule:"required",
            errorMenssage:"Selecciona una fecha"
        }
    ])
    .addField("#edad",[
        {
            rule:"required",
            errorMenssage:"La edad es obligatoria"
        },
        {
            rule: "integer",
            errorMenssage:"Solo son válidos números"
        }
    ]) //una vez se valido todo usamos onSuccess para cambiar el nombre d ela variable igual a true
    .onSuccess(() => {
        isValidate = true;
        //aqui podria enviar el formulario a la direccion que tenga que llegar
        /* event.currentTarget.submit(); */
        alert("Perfecto")
    })