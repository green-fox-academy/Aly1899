import { Thing } from './thing';
import { Fleet } from './fleet';

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

fleet.print()

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */