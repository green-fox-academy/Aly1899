import { Thing } from './thing';

class Fleet {
  private things: Thing[];

  constructor() {
    this.things = [];
  }

  add(thing: Thing): void {
    this.things.push(thing);
  }

  getThings(): Thing[] {
    return this.things;
  }

  print(): void{
    //   let printedText:string=''
      for (let i=0;i<this.things.length;i++){
        console.log(`${i+1}. [${this.getThings()[i].getCompleted() ? 'X':' '}] ${this.getThings()[i].getName()}`)
      }
  }
}

export { Fleet };