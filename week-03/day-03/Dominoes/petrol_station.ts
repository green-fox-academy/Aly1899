'use strict'

class Station{
    gasAmount:number

    constructor(gasAmount:number=1000){
        this.gasAmount=gasAmount;
    }

    refill(car:Car){
        this.gasAmount-=car.capacity;
        car.gasAmount+=car.capacity;
    }
}

class Car{
    gasAmount:number
    capacity:number

    constructor(gasAmount:number=0,capacity:number=100){
        this.gasAmount=gasAmount
        this.capacity=capacity
    }
}

const station=new Station()
const car= new Car()

console.log(station.gasAmount);
console.log(car.gasAmount+','+car.capacity);

station.refill(car)

console.log(station.gasAmount);
console.log(car.gasAmount+','+car.capacity);