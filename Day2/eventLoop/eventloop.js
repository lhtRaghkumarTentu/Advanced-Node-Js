// const f1 = () => { 
//     f2(); 
// };

// const f2 = () => { 
//     f3(); 
// };

// const f3 = () => { 
//     f4(); 
// };

// const f4 = () => { 
//     f4(); 
// };

/** 
 * Adding function to stack....
 *        CALL STACK
 *            f4()
 *            f4()
 *            f3()
 *            f2()
 *            f1()        
 */

///-----------------------------------------------------------------------------------------///

const add = (a,b) => a+b;

const double = a => add(a,b);

const printDouble = a => {
    const result = double(a);
    console.log(result);
}

printDouble(9)

/** 
 * when we calling this function it adds to the stack like below
 *        CALL STACK
 *            add()
 *            double()
 *            printDouble()  
 * Then wehen we return from that function it gets pops out of this stack.      
 */