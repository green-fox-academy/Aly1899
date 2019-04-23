import {Armada} from './armada'
'use strict'

const armada1:Armada=new Armada()
const armada2:Armada=new Armada()

console.log(armada1.ships)

console.log('----');

console.log(armada2.ships)

armada1.war(armada2)

// armada1.ships[0].fillShip()