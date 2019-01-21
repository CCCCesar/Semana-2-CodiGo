//CREAR MENU PARA QUE EL USUARIO ELIJA
//LA OPREACION E INTRODUZCA 2 NUMEROS A OPERAR

/**
 * { la funcion retorna la sum }
 *
 * @return     {<int>}  { la suma de n1 + n2 }
 */
function sumar(){ 
	var suma = n1+n2;
	return suma;
}
function restar(){ 
	var resta = n1-n2;
	return resta;
}
function dividir(){ 
	var cociente = n1/n2;
	return cociente;
}
function multiplicar(){ 
	var producto = n1*n2;
	return producto;
}

function imprimirResultado(operacion){
	console.log("La " + operacion + " es " + rpta);
}

function mostrarMenu(){
	var menu = "//////////MENU//////////\n";
	menu = menu + " 's' - SUMAR\n";
	menu = menu + " 'r' - RESTAR\n";
	menu = menu + " 'd' - DIVIDIR\n";
	menu = menu + " 'm' - MULTIPLICAR\n";
	menu = menu + "//////////////////////\n";
	menu = menu + "Ingrese la Opcion Juventud";
	opcion = prompt(menu);
}

var opcion = 0;
var rpta = 0;
var incorrecto = false;

do{
	mostrarMenu();
	var n1 = parseInt(prompt("Ingrese el primer numero"));
	var n2 = parseInt(prompt("Ingrese el segundo numero"));
	switch(opcion){
		case "s":
			rpta = sumar();
			imprimirResultado("suma");
			incorrecto = false;
			break;
		case "r":
			rpta = restar();
			imprimirResultado("resta");
			incorrecto = false;
			break;
		case "d":
			rpta = dividir();
			imprimirResultado("division");
			incorrecto = false;
			break;
		case "m":
			rpta = multiplicar();
			imprimirResultado("multiplicacion");
			incorrecto = false;
			break;
		default:
			incorrecto = true;
	}

}while(incorrecto);

console.log("fin");








// var n1 = 10;
// var n2 = 20;


// function sumar(){
// 	var suma = n1 + n2;
// 	console.log("La suma es: " + suma);
// }

// sumar();

// console.log("La suma es: " + (n1+n2));
// console.log("La resta es: " + (n1-n2));
// console.log("La multi es: " + (n1*n2));
// console.log("La division es: " + (n1/n2));





