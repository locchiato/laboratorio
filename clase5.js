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

console.log(invertirArray([1,2,3,4])); // [4,3,2,1]


/* Crear una función que recibe un array de 4 elementos con números enteros y devuelve uno que 
contenga sólo los números pares, si los hubiera. Ej [1,2,3,4] retorna [2,4]  */ 

function numerosPares(array) {
    let pares = [];
    let numero = array.pop();
    if (numero % 2 === 0){
        pares.push(numero);
    };
    numero = array.pop();
    if (numero % 2 === 0){
        pares.push(numero);
    };
    numero = array.pop();
    if (numero % 2 === 0){
        pares.push(numero);
    };
    numero = array.pop();
    if (numero % 2 === 0){
        pares.push(numero);
    };
    return pares;
};

console.log(numerosPares([1,2,3,4])); // [4,2]

/*  Crear una función que recibe 2 parámetros, un texto con un tipo de dato de JS y  un array de 4 elementos; 
retorna un booleano que indica si todos los elementos son del tipo de dato que se envió por parámetro. 
Ej: tipoArray(“number”, [1,2,3,4]) retorna true; tipoArray(“number”, [1,2,”hola”,,4]) retorna false.    */

function tipoArray(texto, array){
    if (texto === typeof array[0]){
        if (texto === typeof array[1]){
            if (texto === typeof array[2]){
                if (texto === typeof array[3]){
                    return true;
                }
            }        
        }
    }
    return false;
};

console.log("------------------------------");
console.log(tipoArray('number', [1,2,3,4])); // true
console.log(tipoArray('number', [1,2,'hola',4])); //false

function tipoArray2(texto, array){
    return texto === typeof array[0] ? texto === typeof array[1] ? texto === typeof array[2] ? texto === typeof array[3]? true: false : false : false : false; 
};

console.log("------------------------------");
console.log(tipoArray2('number', [1,2,3,4])); // true
console.log(tipoArray2('number', [1,2,'hola',4])); //false

/* Crear una función que recibe un array con números enteros y devuelve uno que contenga la suma acumulada 
de todos sus números. Usar la función tipoArray para validar que el array es de números, en caso que no,
salir de la función antes de acumular con el mensaje "Error: array corrupto" */

function  sumaNumeros (array) {
    if (tipoArray('number', array) == true){
        return array[0] + array[1] + array[2] + array [3];
    }else{
        return "Error: array corrupto"
    }
};

console.log("------------------------------");
console.log(sumaNumeros([1,2,3,4])); // 10
console.log(sumaNumeros([1,2,'hola',4])); //Error: array corrupto

/* Así como el ejercicio 4 usa dos funciones aquí creadas, crear un ejercicio 
que utilice las 4 funciones aquí creadas. Ej función que recibe array, 
acumula sólo aquellos elementos pares y los invierte solo si son números enteros. 
Otro ejemplo puede ser el uso de letras y palabras para combinarlas en frase irracionales. */

function funcionesIntegradas(array) {
    //console.log(tipoArray('number', array));
    return tipoArray('number', array) == true ? numerosPares(invertirArray(array)) : "No es un array númerico";

    // sumaNumeros(numerosPares(invertirArray(array)))
}

console.log("------------------------------");
console.log(funcionesIntegradas([1,2,3,4])); // [2,4]
console.log(funcionesIntegradas([1,2,'hola',4])); //No es un array númerico