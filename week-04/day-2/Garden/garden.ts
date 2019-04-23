'use strict'

import {Flower} from './flower'
import {Tree} from './tree'
import {Plant} from './plant'


export class Garden{
  plants:Plant[]=[];
  
  addPlant(plant:any){
    this.plants.push(plant)
  }

  getNumberOfPlantWhichNeedsWater():number{
    let plantNr:number=0;
    for (let i=0;i<this.plants.length;i++){
      if (this.plants[i].actualWaterLevel<this.plants[i].waterNeed){
        plantNr++
      }
    }
    return plantNr
    console.log(plantNr);
    
  }

  watering(waterAmount:number){
    let plantToWater:number=this.getNumberOfPlantWhichNeedsWater()
    
    for(let i=0;i<this.plants.length;i++){
      if (this.plants[i].actualWaterLevel<this.plants[i].waterNeed){
        this.plants[i].water(waterAmount/plantToWater)
      }
      this.plants[i].getStatus();
    }


  }
}

