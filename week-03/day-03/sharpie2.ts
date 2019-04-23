import {Sharpie} from './sharpie'
'use strict'

class SharpieSet{
    sharpieSet:Sharpie[]=[]

    add(sharpie:Sharpie){
        this.sharpieSet.push(sharpie)
    }

    countUsable():number{
        let countUsableSharpie:number=0;
        this.sharpieSet.forEach(element => {
            if (element.inkAmount>0){
                countUsableSharpie++
            }
        });
        return countUsableSharpie;
    }

    removeTrash():void{
        this.sharpieSet.forEach(function(element, index, object){
            if (element.inkAmount<0){
                object.splice(index,1)
            }
        })
    }

    getSharpieSet():any{
        return this.sharpieSet;
    }
}


const s1:Sharpie=new Sharpie('green',20)
const s2:Sharpie=new Sharpie('yellow',20)
const s3:Sharpie=new Sharpie('blue',20)
const s4:Sharpie=new Sharpie('red',20)

const sharpieSet:SharpieSet = new SharpieSet()

sharpieSet.add(s1);
sharpieSet.add(s2);
sharpieSet.add(s3);
sharpieSet.add(s4);

console.log(sharpieSet.getSharpieSet());

s1.use()
s1.use()
s3.use()
s3.use()

console.log(sharpieSet.countUsable());

sharpieSet.removeTrash()

console.log(sharpieSet.getSharpieSet());
