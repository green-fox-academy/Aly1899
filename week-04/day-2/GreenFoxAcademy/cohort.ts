'use strict'

import {Student} from './student'
import {Sponsor} from './sponsor'
import {Mentor} from './mentor'


export class Cohort{
  name:string;
  students:Student[]=[];
  mentors:Mentor[]=[];

  constructor(name:string){
    this.name=name
  }

  addStudent(student:Student){
    this.students.push(student)
  }

  addMentor(mentor:Mentor){
    this.mentors.push(mentor)
  }

  info(){
    console.log(`The ${this.name} has ${this.students.length} students and ${this.mentors.length} mentors`);
    
  }
}