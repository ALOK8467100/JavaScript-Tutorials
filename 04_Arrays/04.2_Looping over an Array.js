// 04.2_Looping over an Array

/* Looping over an Array
Print all element of an array.
*/
let heroes = ["ironman","thor","hulk","skaktiman","spiderman","antman","loki","Capitan america"];

/*
For printing all elememt of an array we have to use loop and for this we need to know the length of an array,
So we use array.length  
*/

/*  Syntax :
        
for(let i= 0; i < arr.length; i++){

}

*/
// for loop 
for(let i = 0; i < heroes.length; i++){
    console.log(heroes[i]); 
}
console.log("*****");

// for-of
//  We can also use methods  
for(let i of heroes){
    console.log(i);
}

/* Let's practice

Q1. For a given array with price of 5 items -> [250, 645, 300, 900, 50] 
All itmes have an offer of 10% OFF on them. Change the array to store final price after applying offer.

we find final value after offer is offer = value/10 (for 10%)

*/
//  We use for-of loop 
let items = [250, 645, 300, 900, 50];
let i = 0;
for (let val of items){
    console.log(`Value at index ${i} = ${val}`);
    let offer = val/ 10;
    items[i] = items[i] - offer;
    console.log(`Value after offer = ${items[i]} `);
    i++;

}

//  Now using for loop
let item = [250, 645, 300, 900, 50];
for(let i = 0; i < item.length; i++){
    console.log(`Value before offer ${item[i]}`);
    let offer = item[i] / 10;
    item[i] -= offer;
    console.log(`value after offer = ${item[i]}`);
}
