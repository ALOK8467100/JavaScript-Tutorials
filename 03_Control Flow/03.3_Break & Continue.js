// 03.3_Break & Continue

// Break and Continue Statement
// Also called jump statement
// It is skip some values of loop

// Continue 

for(let i = 1; i<= 10; i++){
    if (i == 5){   // See we use continue in 5 so it run from 1 to 4 then skip 5 and then run 6 to 10
        continue;
    }console.log("value of i = ", i)
}

// Break
// Used to terminate the loop and control transfer from outside

for(let i = 1; i <= 10; i++){
    if (i == 5 ){
        console.log("Our desired value is = ", i); // it break when it comes at 5.
        break;
    }
    console.log("Value of i ", i)
}