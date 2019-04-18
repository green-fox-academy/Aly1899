'use strict'

function subint(item:number,list: number[]) {
    let itemIndeses:number[]=[]
    for (let i=0;i<list.length;i++){
        if (list[i].toString().indexOf(item.toString())>-1) {
            itemIndeses.push(i)
        }
    }
    return itemIndeses;
}
console.log(subint(1,[1, 11, 34, 52, 61]));
