function thePizzaOven (crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}


var pizza1 = thePizzaOven("deep dish", "traditional", ["mozzarella"], ['pepperoni', "sausage"]);
var pizza2 = thePizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var pizza3 = thePizzaOven("thin crust", "hot sauce", ["quesso blanco", "american"], ["bell peppers", "sardines", "pork skin"]);
var pizza4 = thePizzaOven("stuffed crust", "alfredo sauce", ["mozzarella"], ["chicken","pasta"]);
console.log(pizza1, pizza2, pizza3, pizza4);

var crustType = [
    "deep dish",
    "hand tossed",
    "thin crust",
    "stuffed crust"];
var sauceType = [
    "traditonal",
    "marinara",
    "hot sauce",
    "alfredo sauce"]; 
var cheeses = [
    "mozzarella",
    "feta",
    "quesso blanco",
    "american"];
var toppings = [
    "pepperoni",
    "sausage",
    "mushrooms",
    "olives",
    "onions",
    "bellpeppers",
    "sardines",
    "chicken",
    "pasta"];

function randomnum(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

function randomPizza() {
    var pizza ={};
    pizza.crustType = randomnum(crustType);
    pizza.sauceType = randomnum(sauceType);
    pizza.cheeses = randomnum(cheeses);
    pizza.toppings = randomnum(toppings);
    console.log(pizza);
}

randomPizza();