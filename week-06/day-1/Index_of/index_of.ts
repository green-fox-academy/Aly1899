'use strict';

export function indexOf(arr:number[], num: number): any {
  for (let i: number = 0; i<arr.length; i++ ){
    if (arr[i] === num) {
      return i
    }

  }
}
  