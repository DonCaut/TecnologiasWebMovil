//función básica

function mostrarMensaje(){
    alert('¡Hola a todos!');
}

mostrarMensaje();

//variables internas

function varInterna(){
    let mensaje = "Hola soy un mensaje de variable local";
    alert(mensaje);
}

varInterna();

//variables externas

let nombre= 'Victor';
function mostrarNombre(){
    let msj= 'Hola' + nombre;
    alert(msj);
}

mostrarNombre();

//modificando la variable externa

let institucion= 'Ulagos';
function mostrarInstitucion(){
    let institucion= 'Universidad de los lagos';
    let texto= 'Yo estudio en la ' + institucion;
    alert(texto);
}

mostrarInstitucion();
alert(institucion);
