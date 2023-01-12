
const evenNumbers = () => {
    let evenArray=[]
    for (let i = 0; i < 100; i++) {
        if (i % 2 === 0) {
            evenArray.push(i);
        }
    }
    return evenArray;
  };
  
  process.on('message', () => {
    const even = evenNumbers();
    process.send(even);
  });