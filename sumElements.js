//Sumar cada elemento de un array usando reduce.

var numeros = [1, 2, 3, 4, 5];


var suma = numeros.reduce((acc, index) => acc + index ,0);

console.log('suma= '+ suma)



//////////////////////////////////////////////////////////////////////////////////



function sumElements(array){
    return ('sumElements= ' + array.reduce((acc, index) => acc + index ,0));
}

console.log(sumElements(numeros))