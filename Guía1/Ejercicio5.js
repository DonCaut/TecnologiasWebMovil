let estatura=prompt("ingrese el numero de su estatura (en metros)",0);
let peso = prompt("ingrese su peso (en kilos)",0);
let estatura_cuadr=estatura** 2;
let IMC= peso/estatura_cuadr;
let IMC_R=IMC.toFixed(2);

if(IMC_R<18.5){
    alert('Su IMC es de: '+IMC_R +' Usted se encuentra bajo peso');

}else if (IMC>=18.5 && IMC<=24.9){
    alert('Su IMC es de: '+IMC_R + ' Usted se encuentra con un peso normal');

}else if(IMC>24.9){
    alert('Su IMC es de: '+IMC_R + 'Usted está con sobrepeso')
}