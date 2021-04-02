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

const arr = [1, 2, 3, 4];
console.log(invertir(arr));
