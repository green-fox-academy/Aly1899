'use strict';

export function add(a: number, b: number): number {
  return a+b;
}

export function maxOfThree(a: number, b: number, c: number): number {
  if (a > b ) {
    if (a > c){
      return a;
    }
    else{
      return c;
    }
  }else {
      if (b>c){
        return b;
      }else{
        return c
      }
    }
};

export function median(pool: number[]): number {
  return pool[Math.floor((pool.length - 1) / 2)];
}

export function isVowel(character: string): boolean {
  return ['a', 'u', 'o', 'e', 'i'].some(vowel => vowel === character);
}

export function translate(hungarian: string): string {
  let teve = hungarian;
  let length = teve.length;

  for (let i = 0; i < length; i++) {
    let c = teve[i];
    let teveArr:string[]=[]
    if (isVowel(c)) {
      teveArr=teve.split('')
      teveArr[i]=(`${c}v${c}`);
      teve=teveArr.join('')
      
      // console.log(teve);
      i += 2;
      length += 2;
    }
  }
  return teve;
}

console.log(translate('abcada'));
