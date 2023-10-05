//ciclo while

let i = 0;

while (i<= 5) {
    console.log(i);
    i++;
}

//ciclo do-while

let aux=0;
do{
    console.log(aux);
    aux++;
}
while (aux<=3);

//ciclo for

let j= 0;
for (; j<=7, j++; ) {
    console.log(j);
}

for(;j<=7;){
    console.log(j++);
}

//uso del break
let suma = 0;
while(true){
    let valor=+prompt('Ingrese un número porfavor', '');
    if(!valor)break;

}
alert(`La suma es de ${suma}`);

//uso del continue

for (let i= 0; i < 10; i++){
    if(i % 2 == 0) continue;
    alert(i); 
}

