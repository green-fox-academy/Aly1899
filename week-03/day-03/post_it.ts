'use strict'

class PostIt {
    backgroundColor: string;
    text: string;
    textColor: string;

    constructor(backgroundColor: string, text: string, textColor: string) {
        this.backgroundColor = backgroundColor;
        this.text = text;
        this.textColor = textColor;
    }
}

const idea1:PostIt = new PostIt('orange','Idea 1','blue');
const awesome:PostIt = new PostIt('pink','Awesome','black');
const superb:PostIt = new PostIt('yellow','Super','green');

console.log(idea1);
console.log(awesome);
console.log(superb);
