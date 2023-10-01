function calcular() {
    let monto = parseFloat(document.getElementById("monto").value);
    let porcentaje = parseFloat(document.getElementById("porcentaje").value) / 100;
    let propina = monto * porcentaje;
    let total = monto + propina;

    document.getElementById("propina").textContent = "$"+ propina.toFixed(2) + " CLP";
    document.getElementById("total").textContent = "$"+ total.toFixed(2) + " CLP";
}