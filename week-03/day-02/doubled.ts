'use strict'

function decrypt(sFile:string){
    const fs=require('fs');
    let decryptedText:string='';
    let lines=fs.readFileSync(sFile,'UTF8').split('\n');
    for (let l=0;l<lines.length;l++){
        for (let c=0;c<lines[l].length;c+=2){
            decryptedText+=lines[l][c]
        }
        decryptedText+='\n'
    }
    fs.writeFileSync('decrypted_duplicate_chars',decryptedText);
}

decrypt('duplicated-chars.txt')
