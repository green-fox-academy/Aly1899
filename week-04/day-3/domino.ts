'use strict'

interface Comparable{
  compareTo(other:Comparable):number;
}

interface Printable{
  printAllFields():void
}

class Domino implements Comparable {
  values: number[];
  constructor(valueA: number, valueB: number) {
      this.values = [valueA, valueB];
  }
  compareTo(other:Domino):number{
    if (this.values[0]<other.values[0]) {
      return -1;
    }
    if (this.values[0]>other.values[0]) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }

  printAllFields(){
    console.log(this.values[0]+' - '+this.values[1]);
  }
}


export {Domino};