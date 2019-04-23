'use strict'

import {Plant} from './plant'

export class Flower extends Plant{
// type:string='Flower' 
// waterAbsorbtion:number =0.75
// waterNeed:number=5

  constructor(name:string){
    super('Flower',name,0.75,5,0)
  }

}

