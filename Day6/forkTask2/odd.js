const oddNumbers = () => {
    let oddArray=[]
    for (let i = 0; i < 100; i++) {
        if (i % 2 != 0) {
            oddArray.push(i);
        }
    }
    return oddArray;
  };
  
  process.on('message', () => {
    const odd = oddNumbers();
    process.send(odd);
  });