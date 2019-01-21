var constructor = function (newNombre, newEdad, newApellido="S/A") {
	var nombre = "Juan";
	var edad = 50;
	var x = {
		apellido: newApellido,
		gustos : {
			comida : "cebiche",
			color : "rosadito",
			curso : "css"
		},
		obtenerNombre : function () {
			return nombre;
		},
		cambiarNombre : function (nuevoNombre){
			 nombre = nuevoNombre;	
		}
	};
	return x;
}

var persona1 = constructor();
persona1.cambiarNombre("pablo")
console.log(persona1.obtenerNombre());

// var persona1 = constructor("Juan",67,"CACERES");
// var persona2 = constructor();
// persona2.nombre = "Kiara";
// console.log(persona2.nombre);