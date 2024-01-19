# 03_CONDITIONAL STATEMENT & CONTROL FLOW

## 03.1_If,Else,Else If 

If , else , else if 
```
let budget = 50000;
if(budget > 60000){
    console.log("Will do Dinner in 5 star hotel");
} else if (budget > 45000){
    console.log("Will do dinner in 3 star hotel");
}
else {
    console.log("Will do Diner in 2 star");
}
```
Nested-if statement
```
let num = 23;

if (num >= 23 ){
    console.log("1st conditio is true");
    if(num > 20){
        console.log("2nd condition is also true");
    }
}
```

## 03.2_Loops

Control Flow
For loops

Run the specific task 5 times so we use loops 
```
for(let i = 1; i<=10 ; i++){
    console.log(i)
}           
```
Now uses of for loop 
```
let dishes = ['Briyani', 'Chana-Chat', 'Bhallay', 'Pani-Poori', 'Chola']

for (let i = 0; i < dishes.length; i++){
    console.log(dishes[i])
}
```
Now While loop
```
let j=1;
while(j<=5){
    console.log("while loop ", j);
    j++;
}
```
We have one more loop Do While loop 
but we not using this Do while loop it's waste 


## 03.3_Break & Continue

Break and Continue Statement
Also called jump statement
It is skip some values of loop
Continue 
```
for(let i = 1; i<= 10; i++){
    if (i == 5){   // See we use continue in 5 so it run from 1 to 4 then skip 5 and then run 6 to 10
        continue;
    }console.log("value of i = ", i)
}
```
Break
Used to terminate the loop and control transfer from outside
```
for(let i = 1; i <= 10; i++){
    if (i == 5 ){
        console.log("Our desired value is = ", i); // it break when it comes at 5.
        break;
    }
    console.log("Value of i ", i)
}
```


## 03.4_Logical Operators

Logical Operators

And && , or || , Not !

Example


And && -->> if any condition is false , then hole condition is false.

or ||  -->> if any condition is true , then hole statement is true.

Not !  -->>  it changes from true to false & flase to true

And , or , Not


And &&

```
let password = "qwfwrgwy@";

if (password.length > 5 && password.includes('@')){
    console.log("Password Strength is Strong");
} else {
    console.log("Change your Password");
}
```

or ||  

```
let passwords = "rewwdrwd";

if (passwords.length > 5 || passwords.includes('@')){
    console.log("Password Strength is Strong");
} else {
    console.log("Change your Password");
}
```
Not !  -->> true to false and flase to true

```
let  status = false;
if(!status){
    console.log("Your status is = ", status)
}
```


## 03.5_Variable & Block Scope

Variable and Block Scope
Scope are the area where variable is defined or accessible
```
let score = 90;  // Score is Global Scope

if (true){
    score = 50;  // It is local scope.
}
```

## 03.6_Ternary operator

Ternary Operator
So Using if,else condition is so long process
so we use Ternary Operator 

Example of if , else 
```
let age = 20;
if(age > 18){
    console.log("Qualify");
} else{
    console.log("Fail");
}
```

Example of Ternary Operator
```
let result = age > 18 ? "Qualify" : "Fail"
console.log(result);
```
As if , else we use various conditions in Ternary operator we can also use various conditions 
```
let height = 2.3;
let weight = 55;

let BMI = height > 2.2 ? weight > 54 ? "Qualify in BMI" : "weightIssue" : "HeightIssue"
console.log(BMI);
```

/* In thsi case we have two conditions 
   one is height and another is weight

   First condition is height, when control goes to height condition and check it condition 
   if it's true then go to second condition
   Second condition is weight
*/ 


## 03.7_switch
```
let age = 15;
switch(age) {
    case 15:
    case 16:
    case 17:
        result = "Therse ages are allowed to sit in the exam";
        break;

    default:
        result = "Not Allowed"
}
```
we use break for perticular type of condition.
