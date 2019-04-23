'use strict'

import {Person} from './person'

export class Student extends Person {
  previousOrganisation:string;
  skippedDays:number=0;

  constructor(name:string='Jane Doe', age:number=30, gender:string='female', previousOrganisation:string='The School of Life'){
    super(name, age, gender);
    this.previousOrganisation=previousOrganisation;
  }

  getGoal(){
    console.log('My goal is: Be a junior software developer');  
  }

  introduce(){
    console.log(`Hi I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganisation} who skipped ${this.skippedDays} days from the course already` );    
  }

  skipDays(numberOfDays:number){
    this.skippedDays+=numberOfDays;
  }

}