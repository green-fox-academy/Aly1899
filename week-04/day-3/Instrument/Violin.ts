
import {StringedInstrument} from './instruments'

export class Violin extends StringedInstrument{
  numberOfStrings:number;
  name:string;
  instSound:string;

  constructor(pNumberOfStrings:number=6,pName:string='Violin',pInstSound:string='Screch'){
    super();
    this.numberOfStrings=pNumberOfStrings;
    this.name=pName;
    this.instSound=pInstSound;
  }
}
