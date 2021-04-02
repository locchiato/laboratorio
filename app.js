// (1)
function invertirArray(arrayDeDatos) {
  /*
  return [
    deUnoHastaCuatro.pop(),
    deUnoHastaCuatro.pop(),
    deUnoHastaCuatro.pop(),
    deUnoHastaCuatro.pop()
  ];
*/

  const nuevoArray = [];

  nuevoArray.push(arrayDeDatos[3]);
  nuevoArray.push(arrayDeDatos[2]);
  nuevoArray.push(arrayDeDatos[1]);
  nuevoArray.push(arrayDeDatos[0]);
  /*
  for(let i=0; i<4; i++){
  nuevoArray.push(arrayDeDatos.pop());
  }

  nuevoArray.push(deUnoHastaCuatro.pop()); // nA = [4]
  nuevoArray.push(deUnoHastaCuatro.pop()); // nA = [4, 3]
  nuevoArray.push(deUnoHastaCuatro.pop()); // nA = [4, 3, 2]
  nuevoArray.push(deUnoHastaCuatro.pop()); // nA = [4, 3, 2, 1]
*/
  return nuevoArray;
}

const numeros = [1, 2, 3, 4];
console.log();
console.log("- 1 --------------------------");
console.log(invertirArray(numeros));

// (2)
function esPar(num) {
  return num % 2 === 0;
}

function soloPares(numeros) {
  const pares = [];
  for (let i = 0; i < numeros.length; i++) {
    const num = numeros[i];
    esPar(num) ? pares.push(num) : 0;
  }
  return pares;
}

function soloImpares(numeros) {
  const pares = [];
  for (let i = 0; i < numeros.length; i++) {
    const num = numeros[i];
    esPar(num) ? 0 : pares.push(num);
  }
  return pares;
}

const nums = [1, 2, 3, 4];
console.log();
console.log("- 2 --------------------------");
console.log(soloPares(nums));
console.log(soloImpares(nums));

// (3)
function tipoArray(tipoDeDato, arrayDeDatos) {
  for (let i = 0; i < arrayDeDatos.length; i++) {
    const dato = arrayDeDatos[i];
    if(tipoDeDato !== typeof dato)
      return false;
  }
  return true;
/*
  return (
    tipoDeDato === typeof arrayDeDatos[0] &&
    tipoDeDato === typeof arrayDeDatos[1] &&
    tipoDeDato === typeof arrayDeDatos[2] &&
    tipoDeDato === typeof arrayDeDatos[3]
  );
*/
}

console.log();
console.log("- 3 --------------------------");
console.log(tipoArray("number", [1, 2, 3, 4])); // true
console.log(tipoArray("number", [1, 2, "hola", 4])); //false
console.log(tipoArray("string", ["1", "2", "hola", "4"])); //true

// (4)
function sumar(numeros) {
  if (tipoArray("number", numeros) === false) {
    return "Error: array corrupto";
  }
  //  return numeros[0] + numeros[1] + numeros[2] + numeros[3];

  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    const num = numeros[i];
    suma += num;
  }

  return suma;
}

console.log();
console.log("- 4 --------------------------");
console.log(sumar([1, 2, 3, 4])); // 10
console.log(sumar([1, 2, "hola", 4])); // Error: array corrupto
console.log(sumar(["1", "2", "hola", "4"])); // Error: array corrupto

// (5)
function detalles(datos) {
  console.log("Datos ingresados: " + datos);
  console.log("Orden inverso: " + invertirArray(datos));
  console.log();
  console.log("Datos ingresados: " + datos);
  console.log("Suma de valores: " + sumar(datos));
  console.log();
  console.log("Datos ingresados: " + datos);
  console.log("Datos pares: " + soloPares(datos));
  console.log();
  console.log("Datos ingresados: " + datos);
  console.log("Suma de datos pares: " + sumar(soloPares(datos)));
  console.log();
  console.log("Datos ingresados: " + datos);
  console.log("Los pares del orden inverso: " + soloPares(invertirArray(datos)));
  console.log();
  console.log("Datos ingresados: " + datos);
  console.log("Suma de los impares del orden inverso: " + sumar(soloImpares(invertirArray(datos))));
  console.log();
}
console.log();
console.log("- 5 --------------------------");
console.log("A continuacion se mostraran en orden los siguientes topicos:");
console.log(
  "Datos ingresados - Orden Inverso - Suma de valores - Datos pares.");
console.log();
detalles([1, 2, 3, 4]);
console.log();
console.log("------------------------------");
console.log();
detalles([1, 2, "hola", 4]);
console.log();
console.log("------------------------------");
console.log();
detalles(["1", "2", "hola", "4"]);
console.log();
console.log("------------------------------");
console.log();
detalles(['1', '2', '3', '4']);
