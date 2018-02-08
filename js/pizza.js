/*
* Create a variable for each order with the order number as the name of the variable.
* Create an object for each order based on the specs in the ReadMe
* Each object will have two nested objects ex.(pizza & toppings)
* Keys with more than one value should be an array of strings ex. Veggies
*/
var person = {
	firstname: "James",
	lastname: "Franko",
}
var address ={	
	street: "2155 E Lake Dr",
	city : "Seattle",
	state: "WA",
}
var pizza ={
	crust: "thin",
	pizzasauce: "robust marinara",
	cheese: "regular",
}
var	toppings ={
	Veggies: ["olives", "green pepper"],
	meats :["pepperoni", "ham","sausage"]
		}
	
var others ={
	sideItems: ["breadsticks", "bbq wings 6 piece"],
	sauces: "ranch",
    instructions:"please cut into squares",
    payment:"cash",
    storeId:"112"

}
console.log(person.firstname,person.lastname);
console.log(address.street,address.city,address.state)
console.log(pizza.crust,pizza.pizzasauce,pizza.cheese)
console.log(toppings.Veggies[0],toppings.Veggies[1],toppings.meats[0],toppings.meats[1])
console.log(others.sideItems[0],others.sideItems[1],others.sauces,others.instructions,others.payment,others.storeId)
/*
* Create a new variable named currentOrders
* currentOrders should be single object containing both orders from above
*/

/*
* Make the changes to the currentOrders object based on the ReadMe
* Run your file with node pizza.js
* Console.log(currentOrders) to verify changes have been made
*/
