
const especial=/[!@#\$%\^&\*()_\+{}\(\):;<>,.?~\\-]/;
const mayuscula=/[A-Z]/;
const numero=/\d/;

while (true){
    let contrasena=prompt('Por favor ingrese una contraseña');
    if(contrasena.length<8){
        alert('Su contraseña tiene menos de 8 caracteres');

    }else if (!mayuscula.test(contrasena)){
        alert('Su contraseña no tiene mayúsculas');
        
    }else if(!numero.test(contrasena)){
        alert('Su contraseña no contiene algún número');

    }else if(!especial.test(contrasena)){
        alert('Su contraseña no contiene algún caracter especial');

    }else{
        break;
    }

}
alert('Su contraseña es válida');
/// buscar rangos, y como testear, while true