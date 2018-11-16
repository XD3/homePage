/**
 * This file works with the JessQuery HTML file.
 */

// This will print the price (the total) on the HTML page.
/*var price;
var quantity;
var total;

price = 5;
quantity = 14;
total = price * quantity;

var el = document.getElementById('cost');
el.textContent = '$' + total;
*/

// This will add the name and a message to the HTML page.
/*var username; 
var message;

username = 'Molly';
message = 'See our upcoming range';

var elName = document.getElementById('name');
elName.textContent = username;
var elNote = document.getElementById('note');
elNote.textcontent = message;  */

//This will insert a link in the button as well as the name.
/*var title;
var message;

title = "Molly's Special Offers";
message = '<a href=\"sale.html\">25% off!</a>';

var elTitle = document.getElementById('title');
elTitle.innerHTML = title;
var elNote = document.getElementById('note');
elNote.innerHTML = message;  */

// This will test the Boolean statement of True and False.
/*var inStock;
var shipping;

inStock = true;
shipping = false;

var elStock = document.getElementById('stock');
elStock.className = inStock;

var elShip = document.getElementById('shipping');
elShip.className = shipping;  */


// Basically the same thing, except that we are using shortcuts for variables
// Here, we are defining and instantiating the variables in one line - 
/*var price = 5;
var quantity = 14;
var total = price * quantity;

// Here, we are defining the variables in one line and the values (instantiating them) in a separate line - 
var price, quantity, total;
price = 5;
quantity = 14;
total = price * quantity;

// Here, we are declaring and instantiating the variables, all, in one line - 
var price = 5, quantity = 14;
var total = price * quantity;

// They all yield the same result - 
var el = document.getElementById('cost');
el.textContent = '$' + total;  */


// Changing the value of variables - 
/*var inStock;
var shipping;

inStock = true;
shipping = false;

// Processing goes here, soemthing that will flag the shipping to be true.

inStock = false;
shipping = true;

// Basically same as the example above, except that the variables have changed values.

var elStock = document.getElementById('stock');
elStock.className = inStock;

var elShip = document.getElementById('shipping');
elShip.className = shipping;  */



/* * * * * * * * * * * * * * * * * * 
 * * * * * * ARRAYS  * * * * * * * *
 * * * * * * * * * * * * * * * * * */
// This will create an array - 
/*var gustos;
gustos = ['Biblia', 'Filosofia', 'Historia', 'Autobiografias', 'Biografias', 'Manga', 
	'Tecnologia', 'Armas de Fuego', 'Cazeria', 'Pescar', 'Acampar', 'Los Afueras'];
var el = document.getElementById('gustos');
el.textContent = gustos[0];


// Create an array and update it's values - 
var gusto = ['Biblica', 'Filosofica', 'Historica', 'Autobiograficas', 'Biograficas', 'Mangal', 
	'Tecnologica', 'Armas de Fuegos', 'Cazerias', 'Pescaria', 'Acampado', 'Los Afuerases'];

// Update the third item in the array - 
gusto[2] = 'Historial';

// This will display the array in the "gusto" element - 
var ele = document.getElementById('gusto');
ele.textContent = gusto[2]; */


/* * * * * * * * * * * * * * * * * * 
 * * * ARITHMETIC OPERATORS  * * * *
 * * * * * * * * * * * * * * * * * */
// This will show how the arithmetic operators work - 
/* var subtotal = (13 + 1) * 5;
var shipping = 0.5 * (13 + 1);

var total = subtotal + shipping;

var elSub = document.getElementById('subtotal');
elSub.textContent = subtotal;

var elShip = document.getElementById('shipping');
elShip.textContent = shipping;

var elTotal = document.getElementById('total');
elTotal.textContent = total; */

/* * * * * * * * * * * * * * * * * * 
 * * * * STRING OPERATORS  * * * * *
 * * * * * * * * * * * * * * * * * */
// This is the string operators -
var greetinger = 'Howdy ';
var name = 'Molly';

var welcomeMessage = greetinger + name + '!';

var el = document.getElementById('greeting');
el.textContent = welcomeMessage;

