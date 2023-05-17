var resultado = document.querySelector("#visor-numero");

const cero = document.querySelector("#numero-cero");
const uno = document.querySelector("#numero-uno");
const dos = document.querySelector("#numero-dos");
const tres = document.querySelector("#numero-tres");
const cuatro = document.querySelector("#numero-cuatro");
const cinco = document.querySelector("#numero-cinco");
const seis = document.querySelector("#numero-seis");
const siete = document.querySelector("#numero-siete");
const ocho = document.querySelector("#numero-ocho");
const nueve = document.querySelector("#numero-nueve");


function agregar(numero) {
    if(resultado.textContent == '0' || resultado.textContent == 'Math Error'){
        resultado.textContent = numero;
    }else{
        resultado.textContent = resultado.textContent + numero;
    }
}

cero.addEventListener('click', () => {
    agregar(cero.textContent);
});

uno.addEventListener('click', () => {
    agregar(uno.textContent);
});

dos.addEventListener('click', () => {
    agregar(dos.textContent);
});

tres.addEventListener('click', () => {
    agregar(tres.textContent);
});

cuatro.addEventListener('click', () => {
    agregar(cuatro.textContent);
});


cinco.addEventListener('click', () => {
    agregar(cinco.textContent);
});


seis.addEventListener('click', () => {
    agregar(seis.textContent);
});

siete.addEventListener('click', () => {
    agregar(siete.textContent);
});


ocho.addEventListener('click', () => {
    agregar(ocho.textContent);
});


nueve.addEventListener('click', () => {
    agregar(nueve.textContent);
});

let acum = 0;

const sumar = document.querySelector("#sumar");
const restar = document.querySelector("#restar");
const multiplicar = document.querySelector("#multiplicar");
const dividir = document.querySelector("#dividir");

const igual = document.querySelector("#igual");
const borrar = document.querySelector("#borrar");
const limpiar = document.querySelector("#limpiar");
const punto = document.querySelector("#punto");

let operandoA = 0;
let operandoB = 0;
let operacion = NaN;

sumar.addEventListener('click', () => {
    operacion = sumar.textContent;

    operandoA = parseInt(resultado.textContent);
    resultado.textContent = 0;

});

restar.addEventListener('click', () => {
    operacion = restar.textContent;

    operandoA = parseInt(resultado.textContent);
    resultado.textContent = 0;
});

multiplicar.addEventListener('click',()=>{
    operacion = multiplicar.textContent;

    operandoA = parseInt(resultado.textContent);
    resultado.textContent = 0;
});

dividir.addEventListener('click',()=>{
    operacion = dividir.textContent;

    operandoA = parseInt(resultado.textContent);
    resultado.textContent = 0;
});

igual.addEventListener('click', () => {
    if(operacion == NaN){
        return
    }

    switch (operacion) {
        case '+':
            resultado.textContent = operandoA + parseInt(resultado.textContent);
            operandoA = parseInt(resultado.textContent);
            
            break;
        case '-':    
            resultado.textContent = operandoA - parseInt(resultado.textContent);

            break;
        case '*':
            resultado.textContent = operandoA * parseInt(resultado.textContent);

            break;
        case '/':
            
            if(operandoA == '0'){
                resultado.textContent = 0;
            }else if(resultado.textContent == '0'){
                resultado.textContent = 'Math Error';
                operandoA = 0;
                operacion = NaN;
            }else{
                resultado.textContent = operandoA / parseInt(resultado.textContent);
            }

            break;
        default:
            break;
    }
});

limpiar.addEventListener('click', () => {
    resultado.textContent = 0;
    acum = 0;
    operadorA = 0;
    operadorB = 0;
    operacion = NaN;
});