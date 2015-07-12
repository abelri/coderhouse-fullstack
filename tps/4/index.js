//0var cadena = "hola que tal";
//function alreves(cadena) {
//	var cadenaInvertida = "";
//	for (var i= cadena.length - 1; i >= 0; i--) {
//		cadenaInvertida += cadena[i];
//	}
//return cadenaInvertida;
//}
//console.log(alreves(cadena));

function alreves(cadena) {

var cadenaInvertida = "" ;

for (var i =cadena.length-1; i>=0; i -=1)

   cadenaInvertida += cadena[i];

return cadenaInvertida ;

}

var cadena ="hola que tal";
console.log(alreves(cadena));

// array 



function patasArriba (arr) {


var alReves = [];

for (var i= arr.length -1;i>=0;i -=1) {

	alReves.push(arr[i])

}
return alReves 
}

var arr = [1,2,3,4,5,6,7,8,9];
console.log(patasArriba (arr));