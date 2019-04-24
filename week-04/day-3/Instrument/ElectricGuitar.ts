
import {StringedInstrument} from './instruments'

export class ElectricGuitar extends StringedInstrument{
  numberOfStrings:number;
  name:string;
  instSound:string;

  constructor(pNumberOfStrings:number=6,pName:string='Electric Guitar',pInstSound:string='Twang'){
    super();
    this.numberOfStrings=pNumberOfStrings;
    this.name=pName;
    this.instSound=pInstSound;
  }
  sound(){
    return 'Twang'
  } 
}
