// var miVariable = 90;
// var miVariable2 = 100;

// if (miVariable > 90) {
// 	console.log(miVariable + " es mayor a 9");
// }

// if (miVariable < 90) {
// 	console.log(miVariable + " es mayor a 9");
// }

// if (miVariable == 90) {
// 	console.log(miVariable + " es mayor a 9");
// }

// if (miVariable <= 90) {
// 	console.log(miVariable + " es mayor a 9");
// }

// if (miVariable >= 90) {
// 	console.log(miVariable + " es mayor a 9");
// }
// 
// var miVariable = 90;
// var miVariable2 = 100;
// p && q
// v v v 
// v f f 
// f f v 
// f f f
// /////////
// p || q
// v v  v 
// v v  f 
// f v  v 
// f f  f 

// var a = 90;
// var b = 100;

// var promedio = 10;
// var aprueba = true;

// if (promedio <= 13) {
// 	aprueba = false;
// }

// if (aprueba) { // si la variable aprueba es verdadera
// 	console.log("aprueba");//hacer esto
// }else{ // de lo contrario
// //hacer esto
//     console.log("desaprueba");
// }


// if (a >= 90 && b >=80) {
// 	console.log("se cumple la condición");
// }

// if ((a >= 90 || b >=100) && (a % 9 == 0)) {
// 	console.log("se cumple la condición");
// }
// if (!(a>500)) { // 
// 	console.log("si");
// }

// var dia = 90; // lunes, 2 martes....
// if (dia >= 1 && dia <=7) {
// 	if (dia == 1) {
// 		console.log("Lunes");
// 	}
// 	if (dia == 2) {
// 		console.log("Martes");
// 	}
// 	if (dia == 3) {
// 		console.log("Miercoles");
// 	}
// 	if (dia == 4) {
// 		console.log("Jueves");
// 	}
// 	if (dia == 5) {
// 		console.log("Viernes");
// 	}
// 	if (dia == 6) {
// 		console.log("Sabado");
// 	}
// 	if (dia == 7) {
// 		console.log("domingo");
// 	}
// }else{
// 	console.log("no es valido");
// }
	
// var dia=7;
// var diaSemana=['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
// var nombreDia='';

// if (dia >= 1 && dia <=7) {
// 	nombreDia=diaSemana[dia-1];
// }else{
// 	nombreDia='Dia invalido';
// }

//console.log(nombreDia);

//SWITCH CASE

var dia = 0;

switch(dia){
	case 1:
		console.log("Lunes");
		break;
	case 2:
		console.log("Martes");
		break;
	case 3:
		console.log("Miercoles");
		break;
	case 4:
		console.log("Jueves");
		break;
	case 5:
		console.log("Viernes");
		break;
	case 6:
		console.log("Sábado");
		break;
	case 7:
		console.log("Domingo");
		break;
	default:
		console.log("Dia Inválido");
}