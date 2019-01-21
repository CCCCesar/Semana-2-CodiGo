var persona = {
	nombre: "Carlitos",
	edad: 40,
	apellido: "Malaga",
	gustos : {
		comida : "cebiche",
		color : "rosadito",
		curso : "css"
	},
	getNombre : function () {
		return this.nombre;
	},
	setNombre : function (nuevoNombre){
		this.nombre = nuevoNombre;	
	}
};


document.write("<h1>Nombre Inicial=> " + persona.getNombre() +"</h1>");
//cambiando nombre
persona.setNombre("Pepito");

document.write(`<h1>Nombre Final=> ${persona.getNombre()}</h1>`);
document.write(`<h1>Apellido => ${persona.apellido}</h1>`);
document.write(`<h1>Curso Favorito => ${persona.gustos.curso}</h1>`);

