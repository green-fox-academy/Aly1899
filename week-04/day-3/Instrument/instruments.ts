'use strict'

abstract class Instrument{
  protected abstract name:string;
  abstract play():void;
}

export abstract class StringedInstrument extends Instrument{
  abstract numberOfStrings:number;
  abstract instSound:string;
  sound(){
    return this.instSound
  }
  play(){
    console.log(`${this.constructor.name} a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
  }
}
