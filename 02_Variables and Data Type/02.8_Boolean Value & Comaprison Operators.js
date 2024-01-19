// Boolean Values And Comparison Operators

let booleanType = true;
let stringType = "true";

console.log("it shows boolean value = " + typeof booleanType, "it shows string type = " + typeof stringType)

// Methods Return Boolean Values

let email = "alok@gmail.com";

let booleanValue = email.includes("@");
console.log(booleanValue)
// it checks wether @ is present in booleanValue or not if present then return true otherwise return false.



// Comparison Operator Always Return Boolean Value
//  == , === , !== , !=
//  > , >=
//  < , <=

let points = 23
let point = 35
let sum = 56
let total = 87
let num = 12 
console.log(points == "23")
console.log(point === "23")
console.log(sum != "23")
console.log(total < "23")
console.log(num > "23")

/* Now Arithmetic Operations

    let a = 5 let b = 6 
    sum a + b = 11
    Diff a - b = -1
    Multiply a * b = 30
    Div  a/b = 0.8333
    Modulo a%b = 5


    Arithmetic Operations: Presidence

    let a = 6/6 + 2*7 + (7-2)*8 = 55

    1.Brackets ()
    2.Powers **
     3.Multiply/Division/Modulo   * / %  at same level left to right 
    4.Add / Subtract + -   Left to Right priority
*/
    let a = 5;
    let b = 2;
    console.log("a = ", a, "& b = ", b);
    console.log( "a + b = ", a + b);
    console.log("a - b = ", a - b);
    console.log("a * b = ", a * b);
    console.log("a / b = ", a / b);
    console.log("a % b = ", a % b);
    console.log("a ** b = ", a ** b);  // 5^2
    
    /*
    In programming we have two things. 
    1. Opertator  2. Operand
    In mathematics for doing any kind of operations we need two operand.
    But one exception in Increament and Decrement.
    Both increament and decrement it need only operand.

    */
/*
    Asingment Operators
    Increament ++ , Decrement --
    let a = 5

    Increment a++ = 6
    Increment a+=2 = 7
    Decrement a-- = 4
    Decrement a-=2 = 3

    1. a++(post increment)  2. a--(post decrement)
    
    3. ++a(pre increment)  4. --a(pre decrement)

    =  +=  -=  *=  %=  **=


    Comparison Operators

    1. Equal to ==
    2. Equal to & type ===
    3. Not equal to != 
    4. Not equal to & type !==
*/

    let m = 5;
    let n = 2;
    console.log("a == b", a == b)
    console.log("a != b", a != b)
    console.log("a === b", a === b)
    console.log("a !== b", a !== b)

/*
    Logical Operators

    Logical AND &&
    Logical OR ||
    Logical NOT !

    let a = true let b = flase

    OR              a || b = true
    AND             a && b = false
    Equality        a == b = false
    Non-equality    a != b = true



 And && , or || , Not !

 Example

 And && -->> if any condition is false , then hole condition is false.

 or ||  -->> if any condition is true , then hole statement is true.

 Not !  -->>  it changes from true to false & flase to true

 And , or , Not

 And &&
*/
let password = "qwfwrgwy@";

if (password.length > 5 && password.includes('@')){
    console.log("Password Strength is Strong");
} else {
    console.log("Change your Password");
}


// or ||  

let passwords = "rewwdrwd";

if (passwords.length > 5 || passwords.includes('@')){
    console.log("Password Strength is Strong");
} else {
    console.log("Change your Password");
}

// Not !  -->> true to false and flase to true

let  status = false;
if(!status){
    console.log("Your status is = ", status)
}

/*
    Greater than a>b 
    Less than a<b
    Greater than equal a>=b
    Less than equal a<=b
    Loose equality ==
    Strict equality ===

    Type Coercion

    let a = 5  let b = "Hi"
    concat a+b = "5Hi"
    Multiply a*b = NaN
    Subtract a-b = Nan


    Mutating vs Non-Mutating methods

                                Mutating               vs                    Non-Mutating
                1. changes variable which called it                     does't changes the variables which called it
                2.example array.push()                                  example array.indexOf()


*/