/**
 * This file holds the JavaScript functions for the Home Start page.
 */

// This is the greeting for the page; it will change based on the time of day.
var fecha = new Date();  // this creates a new date instance
var hora =  fecha.getHours();  // this finds the current hour
var saludo;  // this defines the variable that displays the greeting.

if(hora > 18) {
	saludo = 'Buenas Noches Cuate!';
} else if (hora > 12) {
	saludo = 'Buenas Tardes Cuate!';
} else if (hora > 0) {
	saludo = 'Buenos Dias Cuate!';
} else {
	saludo = 'Bienvenido Cuate!';
}

document.write('<h1>' + saludo + '</h1>');

