'use strict'

import {Flower} from './flower'
import {Tree} from './tree'
import {Garden} from './garden'

let yellow=new Flower('yellow')
let blue=new Flower('blue')
let purple=new Tree('purple')
let orange=new Tree('orange')

yellow.getStatus()
blue.getStatus()
purple.getStatus()
orange.getStatus()

let garden:Garden=new Garden()

garden.addPlant(yellow)
garden.addPlant(blue)
garden.addPlant(purple)
garden.addPlant(orange)

console.log(`
Watering with 40`);

garden.watering(40)

console.log(`
Watering with 70`);

garden.watering(70)
