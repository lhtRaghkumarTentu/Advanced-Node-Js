/**
 * CallBacks: 
*       Callbacks are Functions That are 
 * passed in to another Functions as an 
 * argument.
 */
//-------------------Example----------------------
const calculate = (x, y, callbackFn) => {
    return callbackFn(x, y);
}
const add = (x, y) => x + y;
const result = calculate(1, 2, add);
console.log(result);