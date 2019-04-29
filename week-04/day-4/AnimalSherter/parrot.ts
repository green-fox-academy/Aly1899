'use strict'

import {Animal} from './animal'

export class Parrot extends Animal{
  // name:string;
  // healCost:number;

  constructor(name?:string){
    super('Parrot',Math.floor(Math.random()*7)+4,false)
  }

}