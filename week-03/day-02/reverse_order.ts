'use strict'

function decrypt(sFile:string){
    const fs=require('fs');
    let decryptedText:string='';
    let lines=fs.readFileSync(sFile,'UTF8').split('\n');
    for (let l=lines.length-1;l>=0;l--){
        decryptedText+=lines[l]+'\n'
    }
    // fs.writeFileSync('decrypted_duplicate_chars',decryptedText);
    console.log(decryptedText);
}

decrypt('reverse_order.txt')
