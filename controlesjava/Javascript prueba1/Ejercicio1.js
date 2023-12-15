let evaluacion=prompt('Ingrese su puntaje 0.2, 0.4, 0.6, o 0,8 ',0);
let dinero=350000*evaluacion;
if(evaluacion==0.2){
    alert(`Su nivel de rendimiento fue insuficiente, la cantidad de dinero que recibirá es de ${dinero}` );

}else if(evaluacion==0.4){
    alert(`Su nivel de rendimiento fue aceptable, la cantidad de dinero que recibirá es de ${dinero}` );

}else if(evaluacion==0.6){
    alert(`Su nivel de rendimiento fue meritorio, la cantidad de dinero que recibirá es de ${dinero}` );

}else if(evaluacion==0.8){
    alert(`Su nivel de rendimiento fue excelelnte, la cantidad de dinero que recibirá es de ${dinero}` );
}

