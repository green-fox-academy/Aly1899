'use strict';

let productDb:any={
    'Eggs':	200,
    'Milk':	200,
    'Fish':	400,
    'Apples':150,
    'Bread': 50,
    'Chicken': 550
}



function itemsBelowPice(limit:number){
    let itemsBelowLimit:string[]=[];
    Object.keys(productDb).forEach(e=>{
        if (productDb[e]<limit){
            itemsBelowLimit.push(e)
        }
    })
    return console.log('The item(s) below '+ limit + ' is/are : ' + itemsBelowLimit);    
}

function itemsAbovePice(limit:number){
    let itemsAboveLimit:string[]=[];
    Object.keys(productDb).forEach(e=>{
        if (productDb[e]>limit){
            itemsAboveLimit.push(e + ' ('+ productDb[e] + ')')
        }
    })
    return console.log('The item(s) above '+ limit + ' is/are : ' + itemsAboveLimit);    
}

itemsBelowPice(201)
itemsAbovePice(150)