// (1)
const invertir = function (deUnoHastaCuatro) {
  /*
  const deCuatroHastaUno = [
    deUnoHastaCuatro.pop(),
    deUnoHastaCuatro.pop(),
    deUnoHastaCuatro.pop(),
    deUnoHastaCuatro.pop(),
  ];
  */
  const deCuatroHastaUno = [];
  deCuatroHastaUno.push(deUnoHastaCuatro.pop());
  deCuatroHastaUno.push(deUnoHastaCuatro.pop());
  deCuatroHastaUno.push(deUnoHastaCuatro.pop());
  deCuatroHastaUno.push(deUnoHastaCuatro.pop());
  return deCuatroHastaUno;
};

const numeros = [1, 2, 3, 4];
console.log(invertir(numeros));

// (2)
function soloPares(numeros) {
  const pares = [];
  for (let i = 0; i < numeros.length; i++) {
    const obj = numeros[i];
    obj % 2 === 0 ? pares.push(obj) : "";
  }
  return pares;
}

const nums = [1, 2, 3, 4];
console.log(soloPares(nums));

// (3)
function tipoArray(tipoDeDato, arrayConDatos) {
  return (
    tipoDeDato == typeof arrayConDatos[0] &&
    tipoDeDato == typeof arrayConDatos[1] &&
    tipoDeDato == typeof arrayConDatos[2] &&
    tipoDeDato == typeof arrayConDatos[3]
  );
}
console.log("------------------------------");
console.log(tipoArray("number", [1, 2, 3, 4])); // true
console.log(tipoArray("number", [1, 2, "hola", 4])); //false
console.log(tipoArray("string", ["1", "2", "hola", "4"])); //true

// (4)
function suma(numeros) {
  if (tipoArray("number", numeros) === false)
  return "Error: array corrupto";

  return numeros[0] + numeros[1] + numeros[2] + numeros[3];
}

console.log("------------------------------");
console.log(suma([1, 2, 3, 4])); // true
console.log(suma([1, 2, "hola", 4])); //false
console.log(suma(["1", "2", "hola", "4"])); //true