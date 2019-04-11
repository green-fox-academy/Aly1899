'use strict'

function maximum(nrList:number[]):number{
    let nrListClone:number[]
    nrListClone=nrList.slice()
    if (nrListClone.length===1){
        return nrListClone[0];
    }
    if (nrListClone[0]>nrListClone[1]) {
          nrListClone.splice(1,1)
    }else{
        nrListClone.splice(0,1)
    }
        return maximum(nrListClone)
}
console.log(maximum([1,5,2,28,4,6,12,5,3]))
