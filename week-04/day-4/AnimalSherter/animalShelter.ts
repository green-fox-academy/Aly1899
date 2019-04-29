'use strict';

import { Dog } from './dog';
import { Cat } from './cat';
import { Parrot } from './parrot';
import { Animal } from './animal';

class AnimalShelter{
  budget:number=50;
  animalList:Animal[]=[];
  adoptersNameList:string[]=[];

  rescue(animal:Animal):number{
    this.animalList.push(animal);
    return this.animalList.length;
  }

  heal():number{
    let healNumber:number=0;
    let i:number=0
    do
    {
      if (!this.animalList[i].isHeatlhy && this.animalList[i].healCost<=this.budget){
        this.animalList[i].heal()
        this.budget-=this.animalList[i].healCost
        healNumber++;
      }
    }
    while (healNumber===0 && i<this.animalList.length)
    return healNumber;
  }

  addAdopter(adopterName:string):void{
    this.adoptersNameList.push(adopterName);
  }

  findNewOwner():void{
    let randomAnimalIndex:number=Math.floor(Math.random()*this.animalList.length)
    let randomOwnerIndex:number=Math.floor(Math.random()*this.adoptersNameList.length)
    console.log(randomAnimalIndex);
    console.log(randomOwnerIndex);  

    if (this.animalList[randomAnimalIndex].isAdoptable()){
        this.animalList.splice(randomAnimalIndex,1);
        this.adoptersNameList.splice(randomOwnerIndex,1);
      }else{
        console.log('not possible');
        
      }
    //potential endless loop
  }
  earnDonation(donation:number):number{
    this.budget+=donation;
    return this.budget;
  }

  toString():string{
    let str:string= `Budget: ${this.budget}€, There are ${this.animalList.length} animal(s) and ${this.adoptersNameList.length} potential adopter(s)`
    this.animalList.forEach(animal=>{
      str+=`\n ${animal.name} is ${animal.isHeatlhy? 'healthy': 'not healthy' } (${animal.isHeatlhy? '' :animal.healCost}€), and ${animal.isAdoptable() ? 'adoptable' : 'not adoptable'} `
      // <name> is healthy, and adoptable`
    })
  return str
  }
}

let animalShelter = new AnimalShelter();

animalShelter.rescue(new Cat());
animalShelter.rescue(new Dog("Furkesz"));
animalShelter.rescue(new Parrot());
console.log(animalShelter.toString());

animalShelter.heal();
console.log(animalShelter.toString());

animalShelter.addAdopter("Kond");
console.log(animalShelter.toString());

animalShelter.findNewOwner();
animalShelter.earnDonation(30);
console.log(animalShelter.toString());