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

var person = {
    firstname: "Justin",
    lastname: "Beiber",
}
var address ={  
    street: "1801 W Rodeo Dr",
    city : "Beverly Hills",
    state: "CA",
    zip : "91833"
}
var pizza ={
    crust: "stuffed crust",
    pizzasauce: "creamy garlic alfredo",
    cheese: "double",
}
var toppings ={
    Veggies: ["onion", "anchovies", "mushroom"],
    meats :["meat", "bacon"]
        }
    
var others ={
    sideItems: "double fudge brownie desset",
    sauces: ["bbq", "garlic sauce"],
    instructions: "call 815 at the gate",
    payment:"credit card",
    storeId:"382"
}
console.log(person.firstname,person.lastname);
console.log(address.street,address.city,address.state,address.zip)
console.log(pizza.crust,pizza.pizzasauce,pizza.cheese)
console.log(toppings.Veggies[0],toppings.Veggies[1],toppings.Veggies[2],toppings.meats[0],toppings.meats[1])
console.log(others.sideItems,others.sauces[0],others.sauces[1],others.instructions,others.payment,others.storeId)




/*

* Create a new variable named currentOrders
* currentOrders should be single object containing both orders from above
*/

/*
* Make the changes to the currentOrders object based on the ReadMe
* Run your file with node pizza.js
* Console.log(currentOrders) to verify changes have been made
*/
