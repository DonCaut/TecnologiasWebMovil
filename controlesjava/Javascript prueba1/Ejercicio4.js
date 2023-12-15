
function calcularIva(monto,iva=prompt('ingrese su IVA')){
    function calcularIva(monto,iva=prompt('ingrese su IVA',19)){
        let porcentaje=iva/100;
        let montoIva=monto*porcentaje;
        let total=montoIva+monto;
    
        alert(`Su factura es de ${total}`);
    }
}


calcularIva(2000);