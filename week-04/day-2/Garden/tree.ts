'use strict'

import {Plant} from './plant'

export class Tree extends Plant{
// type:string='Tree' 
// waterAbsorbtion:number =0.4
// waterNeed=18

  constructor(name:string){
    super('Tree',name,0.4,10,0)
  }

}

