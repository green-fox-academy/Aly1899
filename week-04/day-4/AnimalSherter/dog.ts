'use strict'

import {Animal} from './animal'

export class Dog extends Animal{
  // name:string='';
  // healCost:number=0;

  constructor(name?:string){
    super('Dog',Math.floor(Math.random()*8)+1,false)
  }

}