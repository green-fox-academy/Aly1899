'use strict'

let nameToGreat: string = 'GreenFox'
function great(nameToGreat?: string) {
    if (nameToGreat) {
        return console.log(`Greetings, dear ${nameToGreat}`);
    } else {
        return console.log('Please add a name');
    }
}
great();

