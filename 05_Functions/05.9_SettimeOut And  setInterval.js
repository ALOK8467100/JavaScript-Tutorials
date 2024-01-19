/* 
    setTimeout and setInterval
    setTimeOut -> Run Function "once" after "interval" of time
    setinterval -> Run function repeatedly, Starting after the interval of time , then repeating...
*/

//      setTimeOut
//      setTimeOut(function | code , delay , argument1 , argument2 , argument3 , ....)


function greeting(name){  // here we pass argument 
    console.log(`Welcome my friend ${name}, My name is Alok`)
}

setTimeout(greeting,5000, "Ashish")  // here we pass argument name Ashish   
// Its execute in millisecond so 5000 = 5seconds


// We can pass function also in setTimeout

setTimeout(function greting(){
    console.log("Welcome to my family") 
}, 5000)



/*

    Not setInterval

    setinterval(function | code , delay , args1 , args2 , ....)
*/

    setInterval(greeting, 3000, "Anil")  // It's runs after every interval of time which we set. 