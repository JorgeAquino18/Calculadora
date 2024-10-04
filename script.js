let parcial = "";

let operRealizada = document.getElementById("operacionRealizada");

let txtResul = document.getElementById("txtResultado");

let operadorSeleccionado = "";

let numero = "";

let ultimoDigitoPresionado = "";

function operador(num){
    numero = numero + num; 
    parcial = parcial + num;
    operRealizada.innerHTML = parcial;

    if(numero=='0' && operadorSeleccionado=='/'){
        limpiar();
        txtResul.innerHTML = "indefinido";
        return;
    }
    if(ultimoDigitoPresionado=='operacion'){
        ultimoDigitoPresionado = 'numero'
    }
}
function operacion(oper){
    operadorSeleccionado = oper;
    ultimoDigitoPresionado = 'operacion'
    parcial = parcial + oper;
    numero = "";
    operRealizada.innerHTML = parcial;
}
function calculo(){
    parcial = eval(parcial);
    txtResul.innerHTML = parcial;
    parcial = parcial.toString();
    numero = "";

    operRealizada.innerHTML = parcial;
}
function limpiar(){
    operadorSeleccionado = "";
    parcial = "";
    txtResul.innerHTML = "";
    numero = "";
    operRealizada.innerHTML = "0";
}