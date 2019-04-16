'use strict'

function decrypt(sFile:string){
    const fs=require('fs');
    let decryptedText:string='';
    let lines=fs.readFileSync(sFile,'UTF8').split('\n');
    for (let l=0;l<lines.length;l++){
        decryptedText+=lines[l].split('').reverse().join('')
        decryptedText+='\n'
    }
    // fs.writeFileSync('decrypted_duplicate_chars',decryptedText);
    console.log(decryptedText)
}

decrypt('reverse_lines.txt')
