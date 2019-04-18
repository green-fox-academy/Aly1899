import {Animal} from './animal'
import { triggerAsyncId } from 'async_hooks';
'use strict'

class Farm{
    farm:Animal[]=[]
    slot:number=10

    breed(){
        if (this.slot>0){
            this.farm.push(new Animal)
            this.slot--
        }
    }

    slaughter(){
        this.farm.sort(function(a:any,b:any):any{
            return a.hunger>b.hunger
        }).shift()

    }
}

const farm:Farm=new Farm()

farm.breed()
farm.breed()
farm.breed()

console.log(farm.farm)

farm.farm[2].eat()
farm.farm[2].eat()
farm.farm[2].eat()
farm.farm[2].eat()
farm.farm[0].eat()
farm.farm[0].eat()
farm.farm[0].eat()
farm.farm[2].eat()
farm.farm[2].eat()

console.log(farm.farm)

farm.slaughter()

console.log(farm.farm)
