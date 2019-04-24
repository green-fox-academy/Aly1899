'use strict'

interface Reservationy{
  getDowBooking():string;
  getCodeBooking():string;
}

class Reservation implements Reservationy{
  DOW:string[]=['MON','TUE','WED','THU','FRI','SAT','SUN']

  getDowBooking():string{
    return this.DOW[Math.floor(Math.random()*8)]
  }

  getCodeBooking():string{
    return Math.random().toString(36).substr(2, 8).toUpperCase()
  }

  printBookings(){
    console.log(`Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`);
  }
}
const res:Reservation=new Reservation()
for (let i=0;i<10;i++){
  res.printBookings()
}

console.log(Math.random().toString(10));
