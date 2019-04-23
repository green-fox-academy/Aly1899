'use strict'

export class Plant{
  type:string;
  name:string;
  waterAbsorbtion:number;
  waterNeed:number;
  actualWaterLevel:number;

  constructor(type:string,name:string,waterAbsorbtion:number,waterNeed:number,actualWaterLevel:number=0){
    this.type=type;
    this.name=name;
    this.waterAbsorbtion=waterAbsorbtion;
    this.waterNeed=waterNeed;
    this.actualWaterLevel=actualWaterLevel;
  }

  getStatus(){
    console.log(`The ${this.name} ${this.type} ${this.actualWaterLevel<this.waterNeed ? 'needs' : 'doesnt need' } water`);
  }
  
  water(waterAmount:number){
    this.actualWaterLevel+=waterAmount*this.waterAbsorbtion
  }
}