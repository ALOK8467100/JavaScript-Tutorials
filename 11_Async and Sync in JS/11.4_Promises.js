// 11.4_Promises

/*
When we use more callback inside another callback,
it's looking very complex to understand it.
So to overcome this we have Promises.

Now Promises
Promise is for "eventual" completion of task.
It is an object in JS.
It is a solution to callback hell. 
*/

/*
Syntax: 
let promise = new Promise((resolve, reject) = > {}) 

it has function with 2 handler resolve and reject.
* resolve & reject are callbacks provided by JS. 

*/

let promise1 = new Promise((resolve, reject) => {
    console.log("I am a promise1");
});
/*
Promise {<pending>}
[[Prototype]]: Promise
[[PromiseState]]: "pending"
[[PromiseResult]]: "undefined"


this promise show State:pending and Result:Undefine 

*/


/*
Promises have three state
* Pending
* Fullfilled
* Rejected
*/

// Now See how reject and resolve work 


let promise2 = new Promise((resolve, reject) => {
    console.log("I am a promise2");
    resolve("Now resolve work");
  
});

// Now See how reject work

let promise3 = new Promise((resolve, reject) => {
    console.log("I am a promise3");
    reject("Now reject worked of promise3 it is not an error");
});
/* 

Now See how reject work

This error comes 

Promise {<rejected>: 'Now reject worked'}
it's shows reject work properly.

[[Prototype]]: Promise
[[PromiseState]]: "rejected"
[[PromiseResult]]: "Now reject worked"

*/

/*
Now how to use Promises
Promises
.them() & .catch()

promise.then((res) =>{...})

promise.catch((err) =>{...})


Basically when we use Promise then it has two condition 
Either it Fullfill or Reject that condition.

Now we have to check that if promise fullfill then some condition work,
and if reject then some condition work.

So for this we use .then() and .catch() 

* if promise fulfilled then we use .then() for further work.
* if promise rejected then we use .catch() for further work.

*/

// How to use .then
// and we have specific res or err which we put in our promises.
const getPromise1 = () => {
    return new Promise ((resolve, reject) => {
        console.log("I am a promise4");
        resolve("success all clear");
    });
};

let promise4 = getPromise1();  
promise4.then((res) => {     // here we put res to show the resulr
    console.log("promise4 fullfilled ", res); // here we print our success message
});

//  How .catch used.

const getPromise2 = () => {
    return new Promise ((resolve, reject) => {
        console.log("I am a promise5");
        reject("promise5 rejected due to network error");
    });
};

let promise5 = getPromise2();  
promise5.catch((err) => {     // here we put err to show the error details
    console.log("promise5 not fullfilled", err);  // here we print our error
});