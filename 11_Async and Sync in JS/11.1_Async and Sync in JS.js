// 11.1_Async and Sync in JS

/*
What is this chapter is about?

** async await >> promise chains >> callback hell.

Sync in JS

1. Synchronous:
    The code runs in a particular sequence of instructions given in the program.
    Each instruction wiats for the previous instruction to complete its execution.

2. Asynchronous:
    Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions, which cause in the UI.
    Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.
*/

console.log("one");
console.log("second");

setInterval( () => {
    console.log("hello ");  // it run after three and four.
}, 4000);

console.log("three");
console.log("four");