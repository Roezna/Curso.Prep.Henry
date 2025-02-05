// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
var array = [];

  for(var i in objeto){
    
    array.push([i, objeto[i]]);
    
  }
    return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  contador=0;
  propiedad = '';
  obj = {};
  for(var i=0; i<string.length; i++){
    
    

    for(var j=string.length - 1; j >= 0; j--){
    
          if(string.charAt(i) === string.charAt(j)){
              contador++;
          }
          obj[string.charAt(i)]=contador;
    }
  
    contador=0;
  }
  
  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var array = s.split('');
  var mayus = [];
  var minus = [];

  for(var i=0; i<array.length; i++){

        if(array[i] === array[i].toUpperCase()){
              mayus.push(array[i]);
        }
        else{
          minus.push(array[i]);
        }
  }


  return mayus.join('') + minus.join('');
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var palabra = '';
  var array=str.split(" ");

  

  const inversion = array.map(function(palabras) {

     return palabras.split('').reverse().join('');
  });
    

  return inversion.join(' ');
}


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  var numInv=numero.toString().split();

  const numeroAcomparar= numInv.map(function(elemento){
            return elemento.split('').reverse().join('');
  });

  if(numInv.join() === numeroAcomparar.join()){
    
  return "Es capicua";
  }
  else return "No es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var array = cadena.split('');
  var eliminado = [];

  var filtro = array.forEach(function(elemento){

            if(elemento !== 'a' && elemento !== 'b' && elemento !== 'c' ){
              eliminado.push(elemento);
            }
  });

   return eliminado.join('');
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

const emparejo = arr.sort(function(a, b){
        return a.length - b.length;
  });

  return emparejo;

  }



function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  var interseccion = [];
      
    arreglo1.forEach(function(elemento1) {
      arreglo2.forEach(function(elemento2) {
          if(elemento1 === elemento2){
            interseccion.push(elemento1);
          }
      
      });
          
    });
  
    return interseccion;

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

