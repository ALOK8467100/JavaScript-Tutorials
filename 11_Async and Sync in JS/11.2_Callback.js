// 11.2_Callback

/*
Callbacks
A callback is a funcion passed as an argument to another function.
*/


function sum(a,b){
    console.log(a + b);
}

function calculator(a,b, sumCallback){
    sumCallback(a, b);
}

calculator(1, 2, sum);  // here we pass function in callback.

calculator(1, 2, (a, b) => {  // here we directly declare function in callback. 
    console.log(a + b);
});

