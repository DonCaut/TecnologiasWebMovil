let numero=prompt('Ingrese un número entero positivo',0);
let suma=0
let contador=0
while(contador<=numero){
    if (contador%2==0){
        suma+=contador;

    }else if(contador%2!=0){

    }
    contador+=1
}
alert('la suma es: '+suma);
