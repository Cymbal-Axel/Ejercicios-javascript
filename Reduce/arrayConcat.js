//concatenar un array anidado
var anidado = [1, [2], [3, 4], 5];

var array = anidado.reduce((acc, el)=>  acc.concat(el), [])
console.log(array)