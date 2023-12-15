let frase=prompt('Ingrese una palabra','');
let letra=prompt('ingrese una letra','');
let contador=0;

for(i=0;i<frase.length;i++){
    if(frase[i]==letra){
        contador+=1;

    }else{

    }
}

alert(`El número de veces que su letra: ${letra} aparece es de ${contador} veces`);