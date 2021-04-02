/* Usando sólo .pop() y .push(), crear una función que reciba un array de 4 elementos por parámetro 
y retorne un array con los elementos invertidos en su orden: Ej [1,2,3,4] retorna [4,3,2,1] */


function  invertirArray(array) {
    let salida = []
    salida.push(array.pop());
    salida.push(array.pop());
    salida.push(array.pop());
    salida.push(array.pop());
    return salida;
};

console.log(invertirArray([1,2,3,4]));


/* Crear una función que recibe un array de 4 elementos con números enteros y devuelve uno que 
contenga sólo los números pares, si los hubiera. Ej [1,2,3,4] retorna [2,4]  */ 




/*  Crear una función que recibe 2 parámetros, un texto con un tipo de dato de JS y  un array de 4 elementos; 
retorna un booleano que indica si todos los elementos son del tipo de dato que se envió por parámetro. 
Ej: tipoArray(“number”, [1,2,3,4]) retorna true; tipoArray(“number”, [1,2,”hola”,,4]) retorna false.    */



/* Crear una función que recibe un array con números enteros y devuelve uno que contenga la suma acumulada 
de todos sus números. Usar la función tipoArray para validar que el array es de números, en caso que no,
 salir de la función antes de acumular con el mensaje "Error: array corrupto" */


 /* Así como el ejercicio 4 usa dos funciones aquí creadas, crear un ejercicio 
 que utilice las 4 funciones aquí creadas. Ej función que recibe array, 
 acumula sólo aquellos elementos pares y los invierte solo si son números enteros. 
 Otro ejemplo puede ser el uso de letras y palabras para combinarlas en frase irracionales. */