let inventario=[]
let criticos=[]
while(true){
    let nombre=prompt("ingrese el nombre del producto o \"salir\" para terminar");
    if (nombre.toLowerCase() =="salir"){
        break;
    }
    let precio=parseInt(prompt('Ingrese el precio',0));
    let stock=parseInt(prompt('Ingrese la cantidad de stock'));
    const producto={nombre,precio,stock};
    inventario.push(producto)

}

let stock_critico=false;
for (producto of inventario){
    
    if (producto.stock <1000){
        criticos.push(producto.nombre);
        stock_critico=true
    }else{

    }
}

if (stock_critico==true){
    alert('El o los productos con stock critico son: '+ criticos.join(", "));
}else{
    alert('EL inventario esta en buen estado');
}