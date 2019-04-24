
import {StringedInstrument} from './instruments'

export class BassGuitar extends StringedInstrument{
  numberOfStrings:number;
  name:string;
  instSound:string;

  constructor(pNumberOfStrings:number=6,pName:string='Bass Guitar',pInstSound:string='Duum-duum-duum'){
    super();
    this.numberOfStrings=pNumberOfStrings;
    this.name=pName;
    this.instSound=pInstSound;
  }
}
