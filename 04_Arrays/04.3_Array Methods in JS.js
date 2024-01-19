// 04.3_Array Methods in JS

// Array mathods in JS


let dishes = ['Briyani', 'Chat', "Parathay"];

// 1. Join Method (it is used to saperate the element between them)

console.log(dishes.join('-'))

// 2. indexOf  (indexOf is used to find that element is present or not)

console.log(dishes.indexOf("Chat")) // it is case sensitive so exact match of element  

/* 
3.Concatination Method
It's join multiple arrays & return result
now make new array
dishes is 1st Array & newDishes is 2nd Array
*/

let newDishes = ["sweet-dish","pani-puri"];
console.log(dishes.concat(newDishes)); 
// After concat 1st Array element comes first and 2nd Array element comes second.

// 4. Length Method
// Its tells about the length of that array element 

console.log(dishes.length)

// 5. Push Method (at end)
// It is used to Add any element at last index.

console.log(dishes.push("Chola"))  // In this line we push Chola Array dishes 
console.log(dishes)  // Now see the update in Array dishes.

// 6. Pop Method (remove at last) 
// It is used to remove the element at last index.

console.log("now it pop chola from the array = " + dishes.pop("Chola"))
console.log("now new array without Chola = " + dishes)

// 7. toString() : convert array to string
//  to.string not change the original string it make new string.

console.log(dishes.toString());


// 8. (): add to started array.

dishes.unshift("Pani-puri");
console.log(dishes);


// 9. shift() : delete from start & return

let val = dishes.shift();
console.log("deleted" , val);

// 10. Slice(startidx, endidx) it not change in original array
// Syntax : slice(startidx, endidx)

let marvelHeroes = ["Thor","Spiderman","Ironman","Antman","Dr.Strange"];

console.log(marvelHeroes.slice(1,3));

// 11. Splice() : change original array (add,remove, replace)
// Syntax : splice(startidx, delCount, newEl1)

let arr = [1,2,3,4,5,6,7,8];
arr.splice(2,2,101,103)
console.log(arr);

// We can add element directly without changing or deleting it.
arr.splice(2,0,304);
console.log(arr)

// How to delete using splice.

arr.splice(3,1);
console.log(arr)

/* 
Q. Create an array to store companies ->  "Bloomberg" , "Microsoft" , "Uber" , "Google" , "IBM" , "Netflix"
    1. Remove the first company from the array.
    2. Remove Uber & Add Ola in it place.
    3. Add Amazon at the end.
*/

let companies = ["Bloomberg" , "Microsoft" , "Uber" , "Google" , "IBM" , "Netflix"];

// 1. For remove the first company we use shift()

    companies.shift();
    console.log(companies);

// 2. For remove Uber and add Ola in it we use splice

    companies.splice(1,1,"Ola");
    console.log(companies);

// 3. For add Amazon at the end we use push()

    companies.push("Amazon");
    console.log(companies);

// 12. Map method

    //  similar to for-Each array
    // bUt differnce is it create a new array.

    // Symtax for map method
    // arr.map(callbackFnx(value, index, array))

    let nums = [67,34,89];
    nums.map((val) => {
        console.log(val);
    });
    //  We can store array element in new array also.
    
    let newArr = nums.map((val) =>{
        return val;
    });
    console.log(newArr)

// 13. filter method

//  This method is used to filter some particular element or thing from our given array.
    let arrs = [1,2,3,4,5,6,7];

    let evenArr = arrs.filter((val) => {
        return val % 2 === 0;
    });

    console.log(evenArr);


// 14.  Reduce method
//      Performs some operations & reduce the array to a single value.
//      It return that single value.

        const output = arrs.reduce((prev, curr) =>{
            return prev + curr;
        });
        console.log(output);

        // We can find max and min by using Reduce method.

        const max = arrs.reduce((prev, curr) =>{
            return prev > curr ? prev : curr;
        });
        console.log(max);

        // For min just reverse the arrow from  prev to curr
        // prec < curr.
