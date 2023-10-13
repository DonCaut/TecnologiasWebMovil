function calcular() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let edad = parseInt(document.getElementById("edad").value);
    let genero = parseInt(document.getElementById("genero").value);
    let nombre=document.getElementById("nombre").value;
    let actividadFisica = parseFloat(document.getElementById("actividadFisica").value);
    let altura_cuadr=altura**2;
    let IMC= peso/altura_cuadr;
    let IMC_R=IMC.toFixed(2);
    let gastoEnerg=actividadFisica*peso;


    document.getElementById("h1").textContent ='Resultados para '+ nombre;

    if (genero==1){
        if (IMC_R<19.5){
            document.getElementById("imc").textContent =IMC_R;
            document.getElementById("clasificacion").textContent ='bajo peso';
            document.getElementById("estadoNutricional").textContent ='necesita una mejor alimentación';
        }else if(IMC>=19.5 && IMC<=24.9){
            document.getElementById("imc").textContent =IMC_R ;
            document.getElementById("clasificacion").textContent ='Peso normal';
            document.getElementById("estadoNutricional").textContent ='En buen estado';
        }else if (IMC>24.9 && IMC<29.5){
            document.getElementById("imc").textContent =IMC_R ;
            document.getElementById("clasificacion").textContent ='Sobrepeso';
            document.getElementById("estadoNutricional").textContent ='necesita ayuda';
        }else if(IMC>=29.5){
            document.getElementById("imc").textContent =IMC_R ;
            document.getElementById("clasificacion").textContent ='Obesidad';
            document.getElementById("estadoNutricional").textContent ='necesita ayuda urgente';
        }
    }else if(genero==2){
        if (IMC_R<18.5){
            document.getElementById("imc").textContent =IMC_R;
            document.getElementById("clasificacion").textContent ='bajo peso';
            document.getElementById("estadoNutricional").textContent ='necesita una mejor alimentación';
        }else if(IMC>=18.5 && IMC<=23.9){
            document.getElementById("imc").textContent =IMC_R ;
            document.getElementById("clasificacion").textContent ='Peso normal';
            document.getElementById("estadoNutricional").textContent ='En buen estado';
        }else if (IMC>23.9 && IMC<28.5){
            document.getElementById("imc").textContent =IMC_R ;
            document.getElementById("clasificacion").textContent ='Sobrepeso';
            document.getElementById("estadoNutricional").textContent ='necesita ayuda';
        
        }else if(IMC>=28.5){
            document.getElementById("imc").textContent =IMC_R ;
            document.getElementById("clasificacion").textContent ='Obesidad';
            document.getElementById("estadoNutricional").textContent ='necesita ayuda urgente';
        }
       
    }

    document.getElementById("gastoEnergetico").textContent =gastoEnerg;
}