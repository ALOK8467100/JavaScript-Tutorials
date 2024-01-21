// 11.7_Async-Await 

/* 
 * async function always return a promise. 
 * Syntax: async function myFunction() {...}
 * await pauses the execution of its surrounding async function until the promise is settled.
    await is always used under async function.
*/

function api() {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
        console.log("wether data");
        resolve(200)
        }, 2000);
    });
}
/*
Now see in upper section we made am API having setTimeout 
But we don't want to use callback and Promises for this 
So, we use async - await
Now we made as async function name getWeatherData and inside it we call await for execution. 
We always put our await inside any function.  
*/

async function getWeatherData(){
    await api(); // Run 1st time
    await api(); // Run 2nd time
}


// Now see another example of using async-await

function asyncFunc4() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log("data4...");
            resolve("Success");
        }, 4000);
    });
}

function asyncFunc5() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log("data5...");
            resolve("Success");
        }, 4000);
    });
}

function asyncFunc6() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log("data6...");
            resolve("Success");
        }, 4000);
    });
}

async function getAllData(){
    console.log("fetching data4...");
    await asyncFunc4();
    console.log("fetching data5...");
    await asyncFunc5();
    console.log("fetching data6...");
    await asyncFunc6();
    console.log("We Fetched all data");
}

// Not notice when we use async-await then we don't use .then and .catch and voce versa.

//  Now see one more problem in Async-await that we have to put inside a function and we need to type or call in console .
// but in callback and promises we do not do these things.
//  so, we use IIFE : Immediate Invoked Function Expression.