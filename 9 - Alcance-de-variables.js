let variableGlobal = 5;

function f (variableLocal)
{
    console.log(variableLocal);
    console.log(variableGlobal); // Puedo acceder a la variable global
}

f(3);
// Se imprime tanto el 3 como el 9

// console.log(variableLocal); no se puede ya que no está definida
// ADVERTENCIA: No es posible redefinir (let) una variable global

// Nota: usando var, es posible dentro de las funciones definir una variable con el mismo nombre
//       y "tapar" a la más externa, pero no es recomendable.

