'use strict'
let drinks: string[] = ["Gin", "Wiskey", "Wine", "Beer"];
let doubleDrinks = drinks.map(function (e) {
    return e + e
})
console.log(doubleDrinks);

