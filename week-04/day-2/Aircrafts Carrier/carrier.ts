'use strict'

import { Aircraft } from './aircraft';
import { F16 } from './F16';
import { F35 } from './F35';


class Carrier{
  aircrafts:Aircraft[]=[];
  maxAmmoStorage:number=300;
  actualAmmoStorage:number;
  healthPoint:number;

  constructor(actualAmmoStorage:number,healthPoint:number){
    this.actualAmmoStorage=actualAmmoStorage;
    this.healthPoint=healthPoint;
  }

  add(aircraft:Aircraft){
    this.aircrafts.push(aircraft);
  }


  fill(){
    if (this.actualAmmoStorage===0){
      throw 'NoAmmo'
    }
    this.aircrafts=this.aircrafts.sort(function(a,b):number{
      return Number(b.priority)-Number(a.priority)
    })
    let i=0;
    
    while (this.actualAmmoStorage>=0 && i<this.aircrafts.length){
      this.actualAmmoStorage=this.aircrafts[i].refill(this.actualAmmoStorage);
      console.log(this.aircrafts[i]);
      
       i++
     }    
  }
  
  fight(otherCarrier:Carrier){
    let i:number=0;
    while (otherCarrier.healthPoint>=0 && i<this.aircrafts.length){
      otherCarrier.healthPoint-=this.aircrafts[i].fight()
      i++
    }
  }

  getStatus(){
    if (this.healthPoint<=0){
      console.log(`It's dead Jim :(`);
    }
    else{
      console.log(`HP: ${this.healthPoint} Aircraft count: ${this.aircrafts.length}, Ammo storage: ${this.actualAmmoStorage} Total demage: `);
      for (let i=0;i<this.aircrafts.length;i++){
        console.log(this.aircrafts[i].getStatus())
      } 
    }
  }
}

const f16_1=new F16()
const f16_2=new F16()
const f16_3=new F16()
const f35_1=new F35()
const f35_2=new F35()
const f35_3=new F35()

const carrier=new Carrier(50,150)
const carrier2= new Carrier(50,700)
carrier.add(f16_1)
carrier.add(f16_2)
carrier.add(f16_3)
carrier.add(f35_1)
carrier.add(f35_2)
carrier.add(f35_3)


carrier2.add(f16_1)
carrier2.add(f16_2)
carrier2.add(f16_3)

carrier.fill()

carrier.fight(carrier2)

carrier2.getStatus()
// console.log(carrier.aircrafts[0].refill(100))
// console.log(carrier.aircrafts[0]);