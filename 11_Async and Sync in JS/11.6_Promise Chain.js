// 11.6_Promise Chain

/*
But we want that First asyncFunc1 executed fullly then asyncFunc2 and then asyncFunc3.
* So, For this we use Promise chain
  Means one .then inside another .then
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

console.log("fetching data4...");  
let p4 = asyncFunc4();
p4.then( (res) => {
    console.log(res);
    console.log("fetching data5...");
    let p5 = asyncFunc5();
        p5.then( (res) => {
        console.log(res);
    });    
});

console.log("******")
/*
Now in this program we delare two times asyncFunction4 and asyncFunc5

Now when we call these two asyncFunction4 and asyncFunction5 then we again declare Promises two times.
So, want to avide it for this we write our code in this maner. 


console.log("fetching data4...");
asyncFunc4().then( () => {
    console.log("fetching data5...");
    asyncFunc5().then( () => {
    });
})

Or we also write as 

asyncFunc(4)
    .then((res) => {
        return asyncFunc(5);
    })
    .then((res) => {
        return asyncFunc(5);
    })
    .then((res) => {
        console.log(success);
    });

When we use Promise then we don't need to use callback .
*/

// But is also not a good option to use if our code increases then it also very difficult to understand.

// So,, we use Async-Await