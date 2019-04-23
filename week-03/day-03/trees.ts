'use strict'

class Tree {
    type: string;
    leafColor: string;
    age: number;
    gender: string;
    isEvergreen: boolean

    constructor(type: string, leafColor: string, gender: string, isEvergreen: boolean) {
        this.age = 0;
        this.leafColor = leafColor;
        this.type = type;
        this.gender =gender;
        this.isEvergreen =isEvergreen;
    }

    giveMeInfoAboutTrr():void{
        console.log(`Your tree is a(n) ${this.type}, age ${this.age}, leaf color ${this.leafColor}, gender ${this.gender}, and ${this.isEvergreen ?' izt is evergreen':' it is not evergreen' } `)
    }
}

const myFirstTree:Tree = new Tree('oak','greeen','female',false)
myFirstTree.giveMeInfoAboutTrr();

