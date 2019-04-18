'use strict'

class Student{
    learn(){
        console.log('I am learning');
    }
    question(teacher:Teacher){
        console.log('this is a question');
        teacher.answer()
    }
}
class Teacher{
    teach(student:Student){
        console.log('I am teaching...');
        student.learn()
    }
    answer(){
        console.log('This is the answer');
        
    }
}

const bobStudent=new Student
const johnTeacher=new Teacher

bobStudent.question(johnTeacher)

johnTeacher.teach(bobStudent)
