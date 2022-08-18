alert("Bienvenido a calculadora BartMod-1");

let signo = prompt("Ingresa la operacion a realizar ! \n 1 - Para sumar \n 2 - Para restar \n 3 - Para multiplicar \n 4 - Para dividir"); 
let numero1 = parseInt(prompt("Ingrese un número :"));
let numero2 = parseInt(prompt("Ingrese otro número :"));

function calcular() {
    if (signo === "1") {
        alert("Resultado : " + (numero1 + numero2));
    } else if (signo === "2") {
        alert("Resultado : " + (numero1 - numero2));
    }else if (signo === "3") {
        alert("Resultado : " + (numero1 * numero2));
    }else if (signo === "4") {
        alert("Resultado : " + (numero1 / numero2));
    } else {
        alert("Ingresaste un signo incorrecto :v")
    }
}

calcular();


