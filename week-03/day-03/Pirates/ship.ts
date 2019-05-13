import { Pirate } from './pirate'
'use strict'

export class Ship {
    pirates: Pirate[] = []
    numberOfCrew: number = Math.floor(Math.random() * 10)
    shipScore: number = 0
    numberOfAlivePirates: number = 0
    numberOfAliveCrew:number = 0 

    constructor(){
        this.fillShip()
    }

    getNumberOfAlivePirates() {
        this.numberOfAlivePirates=0;
        let piratesLength:number=this.pirates.length
        for (let i=0;i<piratesLength;i++)
            if (this.pirates[i].isAlive){
                this.numberOfAlivePirates++
            }
        this.numberOfAliveCrew=this.numberOfAlivePirates - (this.pirates[0].isAlive==true ? 1 : 0)
    }

    addPirates(pirate: Pirate) {
        this.pirates.push(pirate)
    }

    fillShip() {
        this.addPirates(new Pirate)
        this.pirates[0].isCaptain = true;
        for (let i = 1; i < this.numberOfCrew; i++) {
            this.addPirates(new Pirate)
        }
    }
    getShip() {
        this.getNumberOfAlivePirates()
        console.log(`The captain drunk ${this.pirates[0].drinkCheck} rum(s) and he is ${this.pirates[0].isAlive ? 'alive' : 'died'} `)
        console.log(`The number of alive pirate in the crew : ${this.numberOfAliveCrew}`);
    }
    winnerParty(){
        let rndRum:number=Math.floor(Math.random()*5)
        console.log('...winner party done');
        for (let i=0;i<=rndRum;i++){
            this.pirates[0].drinkSomeRum()
        }        
    }

    loserDeath(){
        let rndDeath:number=Math.floor(Math.random()*this.numberOfAlivePirates)
        let i:number=0;
        do{
            console.log(`...looser death done ${rndDeath}`);
            if (this.pirates[i].isAlive=true){
                this.pirates[i].die()
            }
            i++;
        }
        while (i<rndDeath)
        this.getNumberOfAlivePirates()      
    }
    
    battle(otherShip: Ship): boolean {
        this.getNumberOfAlivePirates();
        otherShip.getNumberOfAlivePirates();
        this.shipScore=this.numberOfAlivePirates-this.pirates[0].drinkCheck
        otherShip.shipScore=otherShip.numberOfAlivePirates-otherShip.pirates[0].drinkCheck
        console.log(this.shipScore+'--'+otherShip.shipScore);
        
        if (this.shipScore > otherShip.shipScore){
            this.winnerParty()
            otherShip.loserDeath()
        }else if (this.shipScore < otherShip.shipScore) {
            this.loserDeath()
            otherShip.winnerParty()
        }else{
            this.loserDeath()
            otherShip.loserDeath()
        }
        return this.shipScore > otherShip.shipScore
    }
}
