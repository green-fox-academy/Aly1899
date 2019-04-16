function divideByZero(n:number){
    try {
        if (n===0) {
            throw new Error('Division by zero');  
        }
        console.log(10/n)
    }
    catch {      
        console.log('fail');
    }
}

divideByZero(10)
