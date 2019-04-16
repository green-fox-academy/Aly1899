'use strict'

function decrypt(sFile:string){
    const fs=require('fs');
    let decryptedText:string='';
    let lines=fs.readFileSync(sFile,'UTF8').split('\n');
    for (let l=0;l<lines.length;l++){
        for (let c=0;c<lines[l].length-1;c++){
            if (lines[l][c]===' '){
                decryptedText+=lines[l][c]
            }else{
                decryptedText+=String.fromCharCode(lines[l][c].charCodeAt(0)-1)
            }
        }
        decryptedText+='\n'
    }
    // fs.writeFileSync('decrypted_duplicate_chars',decryptedText);
    console.log(decryptedText);
    
}

decrypt('encoded_lines.txt')
