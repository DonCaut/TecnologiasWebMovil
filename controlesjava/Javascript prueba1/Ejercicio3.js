const mayus=/[A-Z]/;
const minus=/[a-z]/;
const num= /\d/;

while (true){
    let usuario=prompt('Por favor ingrese un nombre de usuario');
    if(usuario.length<6){
        alert('Su nombre tiene menos de 6 letras');

    }else if (!mayus.test(usuario)){
        alert('Su nombre no tiene mayúsculas');
        
    }else if (!minus.test(usuario)){
        alert('Su nombre no tiene minúsculas');

    }else if(!num.test(usuario)){
        alert('Su nombre no tiene algún número');
    }else if(!mayus.test(usuario[0]) && !minus.test(usuario[0])){
        alert('Su nombre no comienza con una letra');

    }else if(!num.test(usuario[usuario.length - 1])){
        alert('Su nombre no termina en un número')

    }else{
        break;
    }
}

alert('Su nombre de usuario es válido');

    