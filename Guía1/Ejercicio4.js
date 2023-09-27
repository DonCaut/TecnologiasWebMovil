let numeros=prompt("ingrese numeros separados por comas");
let separados=numeros.split(",");
let convertidos=separados.map(num => parseFloat(num));
let numero_mayor=-Infinity;
for (let i=0; i< convertidos.length; i++){
    if(convertidos[i]>numero_mayor){
        numero_mayor=convertidos[i];
    }

}

alert("El numero mas grande es: "+numero_mayor);