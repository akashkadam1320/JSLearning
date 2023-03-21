function isPrime(num) {
    for (let index = 2; index < num; index++) {
        if(num%index ==0) {
            return false;
        }
        
    }
    return true;
}

console.log(`Is 7 prime Number: ${isPrime(7) ? "Yes" : "No"}`);

console.log(`Is 6 prime Number: ${isPrime(6) ? "Yes" : "No"}`);