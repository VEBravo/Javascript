// IF / ELSE IF / ELSE
let condicion= true;
if (condicion)
{
    console.log("+");
}
else if (typeof condicion == undefined)
{
    console.log("undefined");
}
else
{
    console.log("-");
}

// OPERADOR TERNARIO, para simplificar la sintaxis
(condicion)? console.log("Caso positivo") : console.log ("Caso negativo");

// SWITCH
let a = 12, b = 2;
let operacion;
switch (operacion) 
{
    case 'suma':
        c = a + b;
        break;
    case 'multiplicacion':
        c = a * b;
        break;
    default:
        console.log("Operacion no valida");
        break;
}