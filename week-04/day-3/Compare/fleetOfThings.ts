import { Thing } from './thing';
import { Fleet } from './fleet';

class FleetOfThings{
    fleet:Fleet;

    constructor(fleet:Fleet){
        this.fleet=fleet;
    }

    print(){
        for (let i=0;i<this.fleet.getThings().length;i++){
            console.log(`${i+1}. [${this.fleet.getThings()[i].getCompleted() ? 'X':' '}] ${this.fleet.getThings()[i].getName()}`)
          }
    }
}

        let fleet = new Fleet();

        const getMilk:Thing=new Thing('Get Milk')
        const removeObstacles:Thing=new Thing('Remove Obstacles')
        const standUp:Thing=new Thing('Stand up')
        const eatLunch:Thing=new Thing('Eat lunch')

        fleet.add(getMilk)
        fleet.add(removeObstacles)
        fleet.add(standUp)
        fleet.add(eatLunch)

        standUp.complete()
        eatLunch.complete()

        const fleetOfThings=new FleetOfThings(fleet)

        fleetOfThings.print()

console.log(fleet.getThings());


        let thisngs:Thing[]=fleet.getThings().sort((a:Thing,b:Thing):number=>{
          return a.compareTo(b,'c') })
        
        // let newThings=thisngs.sort((a,b)=>{
        //   return a.compareTo(b,'n')
        // }

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */