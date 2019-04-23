import {Ship} from './ship'
'use strict'

export class Armada{
  ships:Ship[]=[]
  numberOfShips:number=Math.floor(Math.random() * 5)+1
  
  constructor(){
    this.fillArmada()
  }

  addShip(ship: Ship) {
    this.ships.push(ship)
  }

  fillArmada() {
    for (let i = 1; i < this.numberOfShips; i++) {
        this.addShip(new Ship)
    }
  }

  war(otherArmada:Armada){
    let battleNr:number=0
    // let a1:number,a2:number=0
    do{

      if (this.ships[0].battle(otherArmada.ships[0])===true){
        console.log('war...');
          
        otherArmada.ships.shift()
      }else{
        console.log('war...2');
        
        this.ships.shift()
      }
    }
    while (this.ships!=[] || otherArmada.ships!=[])
    if (this.ships===[]){
      console.log(`The winner is : ${otherArmada} `);
    }else if (otherArmada.ships===[]){
      console.log(`The winner is : ${this} `);
    }
  }
}