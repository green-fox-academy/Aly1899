'use strict'

export class Aircraft{
  maxAmmo:number;
  actualAmmo:number;
  baseDamage:number;
  priority:boolean;

  constructor(maxAmmo:number,actualAmmo:number=0,baseDamage:number,priority:boolean){
    this.maxAmmo=maxAmmo;
    this.actualAmmo=actualAmmo;
    this.baseDamage=baseDamage;
    this.priority=priority;
  }

  fight():number{
    let allDamage:number=this.actualAmmo*this.baseDamage;
    this.actualAmmo=0;
    return allDamage;
  }

  refill(refillAmount:number):number{
    let remainingAmmo:number
    if (refillAmount-(this.maxAmmo-this.actualAmmo)>=0){
      remainingAmmo=refillAmount-(this.maxAmmo-this.actualAmmo)
      this.actualAmmo=this.maxAmmo
    }else{
      remainingAmmo=0
      this.actualAmmo+=refillAmount
    }
    return remainingAmmo;
  }

  getType():string{
    return this.constructor.name;  
  }

  getStatus():string{
    return `Type: ${this.getType()},Ammo: ${this.actualAmmo}, Base damage: ${this.baseDamage}, All damage: ${this.fight()}`
  }

  isPriority():boolean{
    return this.priority;
  }
}

