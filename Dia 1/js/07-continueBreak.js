//continue

//Mostrar el triple de los numeros impares
//comprendidos entre 1 y 10 (inclusive)
// for (var i = 1; i <= 10; i++) {

// 	if (i % 2 == 1) {//lo que signfica que es impar
// 		console.log("el triple es " + (i*3));
// 		continue;
// 	}

// 	console.log("numero par = " + i);
// }

//break

for (var i = 1; i <= 9000; i++) {

	if (i > 6) {
		console.log("numero " + i +" mayor a 6");
		console.log("fin del programa");
		break;
	}
	console.log("numero " + i);
}

//contue y break