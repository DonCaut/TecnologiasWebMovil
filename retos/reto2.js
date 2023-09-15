let nota1= prompt('ingrese su primera nota en decimales',0);
let nota2= prompt('ingrese su segunda nota en decimales',0);
let nota3= prompt('ingrese su tercera nota en decimales',0);

let promedio= nota1*0.4 + nota2*0.3 + nota3*0.3;

if(promedio <= 3.95){
    alert('su promedio es: ' + promedio + ' usted está reprobado');
}else if(promedio>=3.95 && promedio<=4.94){
    alert('su promedio es: ' + promedio + ' usted tiene derecho a examen');
}else if (promedio >4.94){
    alert('su promedio es: ' + promedio + ' usted está eximido, felicidades!');
}

