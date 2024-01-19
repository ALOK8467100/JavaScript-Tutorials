// 03.1_If,Else,Else If 

// If , else , else if 

let budget = 50000;
if(budget > 60000){
    console.log("Will do Dinner in 5 star hotel");
} else if (budget > 45000){
    console.log("Will do dinner in 3 star hotel");
}
else {
    console.log("Will do Diner in 2 star");
}

// Nested-if statement

let num = 23;

if (num >= 23 ){
    console.log("1st conditio is true");
    if(num > 20){
        console.log("2nd condition is also true");
    }
}