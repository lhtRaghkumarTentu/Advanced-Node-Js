/**
 * The console object provides access to the browser's debugging console.
 * The console object is a property of the window object.
 * The console object is accessed with: console.functionName
 */


/**
 * assert()	Writes an error message to the console if a assertion is false
 * clear()	Clears the console
 * count()	Logs the number of times that this particular call to count() has been called
 * error()	Outputs an error message to the console
 * group()	Creates a new inline group in the console. This indents following console messages by an additional level, until console.groupEnd() is called
 * groupCollapsed()	Creates a new inline group in the console. However, the new group is created collapsed. The user will need to use the disclosure button to expand it
 * groupEnd()	Exits the current inline group in the console
 * info()	Outputs an informational message to the console
 * log()	Outputs a message to the console
 * table()	Displays tabular data as a table
 * time()	Starts a timer (can track how long an operation takes)
 * timeEnd()	Stops a timer that was previously started by console.time()
 * trace()	Outputs a stack trace to the console
 * warn()	Outputs a warning message to the console
 */

Examples:
console.error("You made a mistake");
let x = 5;
let y = 5;
console.assert(x + y == 11, "Expression returned false");
console.clear();
console.count('Labelname');
console.group();
console.groupCollapsed();
console.groupEnd();
console.info("Hello world!");
console.log("Hello world!");
console.table(["Audi", "Volvo", "Ford"]);
console.table({firstname:"John", lastname:"Doe"});
console.time();
for (let i = 0; i < 100000; i++) {
  // some code
}
console.timeEnd();
function myFunction() {
    myOtherFunction();
  }
  
function myOtherFunction() {
    console.trace();
}
console.warn("This is a warning!");


