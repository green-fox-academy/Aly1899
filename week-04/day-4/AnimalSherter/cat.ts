'use strict'

import {Animal} from './animal'

export class Cat extends Animal{
  // name:string;
  // healCost:number;

  constructor(name?:string){
    super('Cat',Math.floor(Math.random()*7),false);
  }

}