'use strict'

interface Flyable{
  land:string,
  fly:string,
  takeOff():any
}

abstract class Vechicle{
  speed:number;
  size:number;
  numberOfPassanger:number
}

class Helicopter extends Vechicle implements Flyable {
  land:string='a';
  fly:string='b';
  takeOff(){
    return
  }
}