'use strict'

class Counter{
    count:number;

    constructor(count:number=0){
        this.count=count;
    }

    add(addAmount?:number):void{
        if (addAmount) {
            this.count+=addAmount
        } else {
            this.count++
        }
    }

    get():void{
        console.log(this.count);
    }

    reset():void {
        this.count=0
    }
}

const myCounter1:Counter=new Counter()
const myCounter2:Counter=new Counter(50)


console.log(myCounter1);
console.log(myCounter2);

myCounter1.add()
myCounter2.add(10)

myCounter1.get();
myCounter2.get();

myCounter2.reset()

myCounter2.get()