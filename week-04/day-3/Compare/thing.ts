interface Comparable{
  compareTo(other:Comparable):number;
}

class Thing {
    private name: string;
    private completed: boolean=false;
  
    constructor(name: string) {
      this.name = name;
    }
  
    public complete(): void {
      this.completed = true;
    }

    compareTo(other:Thing, sortBy:string){
     if (sortBy==='c'){
      if (this.complete<other.complete) {
        return -1;
      }
      if (this.complete>other.complete) {
        return 1;
      }
      // a must be equal to b
      return 0;
    }
    if (sortBy==='n'){
      if (this.name<other.name) {
        return -1;
      }
      if (this.name>other.name) {
        return 1;
      }
      // a must be equal to b
      return 0;
    } 
    }

    getName(): string {
      return this.name;
    }
  
    getCompleted(): boolean {
      return this.completed;
    }
  }
  
  export { Thing };