let edad = 29
let sueldo= 1200000
const PI=3.14;
const n_grande=1e6;  //1 millón
const n_pequeno=1e-6;  //0.000001

console.log(n_grande);
console.log(n_pequeno);

const bigInt=1234567891234567891234567891234567890n;
console.log(bigInt);

//infinity
console.log(edad / 0);
console.log(Infinity);

//Error de calculo
console.log('hola'/2); //Nan division es erronea
console.log('Hola'*4);  //multiplicará la cadena 4 veces

console.log('#####STRINGS####');
let nombre="Victor";
let ciudad="Osorno";
let capital="Pto.Montt";
let string1="Hola ¿Cómo estás?";
let string2='¡Buenas Tardes!';
let frase= `Este es un saludo: ${string1}`;

//utilizando backticks
console.log(frase);
console.log(`Mi nombre es ${nombre}`);

//operador con comas
console.log(capital, "es la capital de lar region de los lagos");

//metodo concat
console.log("mi nombre es ".concat("y vivo en ",ciudad ));

//Asignado booleanos
let v= true;
let f=false;

//en un ciclo

if (v){
    console.log("Es verdadero");
}else{
    console.log("Es falso");
}

//null
let numeroNuevo= null;

//indefinido
let institucion;

//objetos hay 2 metodos
let user= new Object();  //constructor de objetos
let user1= {};    //objeto literal

let usuario= {
    name: "mateo",
    age: 30,
    city: "osorno",
    "Correo electronico": "mateo@gmail.com"
}

//agregando nuevas propiedades al objeto
usuario.provincia = "Provincia de Osorno";
usuario.estado= true;
usuario.pais= "Chile";
usuario.genero= "Masculino";

//falta

//accediendo a una propiedad con mas de 2 palabras
console.log(usuario["Correo electronico"]);

//Eliminado una propiedad

delete usuario.estado;

//para saber typo dato

console.log(typeof nombre);





//trasnsformar string a numero

let stock = "1000";

stock = Number(stock);


