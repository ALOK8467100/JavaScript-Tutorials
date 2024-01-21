// 11.8_IIFE.

// IIFE : Immediate Invoked Function Expression.

/*
It is a function call immediately as soon as it is defined

It defined for 
* normal function
* customized function
* async-await function


(function () {
    .....
}) ();


(() => {
    ....
}) ();


(async () => {
    ....
})();

*/


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

(async function (){
    console.log("Now we use IIFE for async-await");
    console.log("fetching data4...");
    await asyncFunc4();
    console.log("fetching data5...");
    await asyncFunc5();
    console.log("fetching data6...");
    await asyncFunc6();
    console.log("We Fetched all data");
}) ();

