'use strict'

export class Animal{
  name:string;
  isHeatlhy:boolean;
  healCost:number;

  constructor(name:string,healCost:number,isHealthy:boolean=false){
    this.name=name;
    this.healCost=healCost;
    this.isHeatlhy=isHealthy;
  }

  heal():void{
    this.isHeatlhy=true;
  }

  isAdoptable():boolean{
    return this.isHeatlhy;
  }

  toString():void{
    if (this.isAdoptable()){
      return console.log(`${this.name} is healthy, and adoptable`);  
    }else{
      return console.log( `${this.name} is not healthy (${this.healCost}€), and not adoptable`);
    }
  }
}