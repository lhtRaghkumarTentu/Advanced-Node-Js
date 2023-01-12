const primeNumbers = () => {
    let primeArray=[]
    for (let i = 0; i <= 100; i++) {
        let flag = 0;
        // looping through 2 to 100
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        // if number greater than 1 and not divisible by other numbers
        if (i > 1 && flag == 0) {
           primeArray.push(i);
        }
    }
    return primeArray;
}
  
  process.on('message', (msg) => {
    const prime = primeNumbers();
    process.send(prime);
  });