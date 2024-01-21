// 11.5_Promise Problem.

function asyncFunc1() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log("data1...");
            resolve("Success");
        }, 4000);
    });
}

/* It execute console.log("fetching data1..."); 
    Then p1 call asyncFunc1 and asyncFunc1 execute setTime and retirn to p1.
    p1.then function call and print success.
*/
console.log("fetching data1...");  
let p1 = asyncFunc1();
p1.then( (res) => {
    console.log(res);
});


console.log("***********")


// Now see same thing for more than two asyncFunction

function asyncFunc2() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log("data2...");
            resolve("Success");
        }, 4000);
    });
}


function asyncFunc3() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log("data3...");
            resolve("Success");
        }, 4000);
    });
}


console.log("fetching data2...");  
let p2 = asyncFunc2();
p2.then( (res) => {
    console.log(res);
});

console.log("fetching data3...");  
let p3 = asyncFunc3();
p3.then( (res) => {
    console.log(res);
});

console.log("********");
/*

Now our output comes in this manner


fetching data1...
***********
fetching data2...
fetching data3...
data1...
Success
data2...
Success
data3...
Success

it is due to Async function 
* First asyncFunc1 run, but when it wait for this setTime at that of period asyncFunc2 and asyncFunc3 is executed 
* And both asyncFunc2 & asyncFunc3 again wait for their setTime 
* Now asyncFunc1 run then asyncFunc2 run and after asyncFunc3 will run.
*/
