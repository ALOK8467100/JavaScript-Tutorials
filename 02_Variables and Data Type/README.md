
# 02_Variables and Data Type

## 02.1_Variables

> Variables are containers for data.

##### variable Rules

1. variable name are case sensative; "a" & "A" is different
2. Only letters, digits, underscore(_) ans $ is allowed. (Not even space)
3. only a letter, underscore(_) or $ should be 1st character.
4. Reserved words cannot be variable names.
 
```
name = "ALok";
console.log(name);
age = 24;
console.log(age);
x = null;
console.log(x);
y = undefined;
console.log(y);
```

We use let, const, and var while declaring variables.

var : Variable can be re-declared & updated. A global scope variable.

let : Variable cannot be re-declared but can be updated. A block scope variable.

const : Variable cannot be re-declared or update. A block scope variable.



in var only recent updated value is shown.
here only 56 shown because it is recent updated.
Var can be declared again and again.

```
var score = 34;
var score = 56;
console.log("Var value " + score)
```

let can be declared only once but value can be changed 
```
let points = 23;
console.log("let value " + points)
```

Constants

constant value can't be changed / constant  initialize once and declared once

```
const value = 18;
console.log("const value " + value)
```


## 02.2_Data Types.js

console.log("Now we discuss DataType")

##### Data Type of Values

/* 
There are two types of data type.
1. Primitive data type : Number, String, Boolean, Undefined, Null, BigInt, Symbol
2. Non Primitive data type : Objects (Arrays, Functions).
*/  

7 Primitive Data Types

1. Numbers 1,2,34,3.5

2. String "I am String" , "34" , 'Also String'
console.log("now this line uses string data type = "+"I Am Alok")

3. Boolean true/false
```
isFollow = true;
console.log(isFollow)
console.log(typeof isFollow);
```

4. Null Internally absence of value
```
let score = null;
console.log( "null value is = " + score)
```
but we can initilize value later

```
score = 34;
console.log("now new changed null value is = " + score)
```

5. Undefined Variable declared but not initialized

```
let points;
console.log("When we use Undefined Data Type it shows = " + points)
points = 13
console.log("now changed value in Undefined Variable = " + points)
```
instead of using Undefined it better practice to use Null


6. Object Complex data structure or BigInt
```
let x = BigInt("23");
```

7. Symbol Looks like object 

```
let y = Symbol("hello");
```



Objects is a collection of values.
    for ex:

    students
        name : Alok
        age : 22
        marks : 87
        isPass : boolean

Object is noting but collection of primitive date type having keys : values.

```
const student = {
    fullName : "ALok kumar",
    age : 22,
    marks : 87,
    isPass : true
}
```
 
How to access object

we have two option to access the object:
1. Dot Notation.
2. Bracket Notation.

1. obj.key
2. obj["key"]

```
console.log(student["age"]);
         or
console.log(student.age);
```

How to re-declared new value to object Using Square Bracket Notation and Dot Notation.

1. By Square bracket notation.
    
Object["key"] = ["Value"];

student["age"] = 25;

2. By Dot Notation.

Object.key = Value;

student

```
    student.age = 25;
    console.log(student.age);

    student["marks"] = 92;
    console.log(student.marks);
```


How to Add Key/Value Pair to an Object Using Square Bracket Notation and Dot Notation.
    
1. By Dot Notation (.)

object.key = value;

student.class = 10th;

2. By Bracket Notation []

object["key"] = value

student["height"] = 164cm;

```
student.class = 10;
console.log(student.class);

student["height"] = 164;  
console.log(student.height);
```


Now Q/Ans

We use const in object and change the key value and it not show any kind of error.
But when we use const in normal variable and change it's value it shows error.
    
const  name = "Rahul";
name = "Alok"

Then it show error : Uncaught TypeError: Assingment to constant variable.

So, in JS we can't change const variable but we can change const object key:value.

When we change the whole object then error comes,
If we change one key:value pair or more than one key:value pair in const object then it's work properly.


Practice Questions

Q1. Create a const object called "product" to store infromation shown in the picture.

const product ={
    title : "Ball Pen",
    rating: 4,
    offer : 5,
    price : 270,
};

console.log(product);

  Q2. Create a const object called "profile" to store infromation shown in the picture

const  profile = {
    username : "Alok",
    isFollow : false,
    followers : 345,
    following : 234
};


## 02.3_Strings

Strings

console.log("Hello")

let firstName = "Wow";
let lastName = "Programming";
console.log(firstName,lastName)

Now String Concatination

1st method (Using + Operator)

let fullName = firstName + " " + lastName;
console.log("String shown by using Operator = "  + fullName)

2nd method (Using Template literals) 

let completeName = `I want to Become ${firstName} ${lastName}`
console.log("String shown by using template = " + completeName )

Getting String Character
by doing this we get that index element in console
here put index of that element
console.log("In firstName at index [2] we get 'w' = " + firstName[2]) 

String Methods

to change it to lower case and upper case also
console.log("change to upper case = " + firstName.toUpperCase())
console.log("change to lower case = " + lastName.toLowerCase())

indexOf

knowing index by word present in variable
console.log("to check m is present in variable or not and m present at 6th index = " + lastName.indexOf("m"))


String trim Method
trim removes all the extra spaces

let hobbies = "    coding reading running"
console.log(hobbies)
console.log("after using trim = " + hobbies.trim())


includes method
it only tells that it is present or not in true or false form 
it is used to check the presence of that string

console.log("reading present so it shows true = " + hobbies.includes("reading"))
console.log("anabell not present so it shows false = " + hobbies.includes("anabell"))



Slice method in String
it pick that sliced piece and show it in result
So the lastName defined as  "Programmer"
Now after using slice from index 0 to 3 it takes only "Pro" as in result
console.log("After using slice = " + lastName.slice(0,3))


Split in String

let favcolor = "Brown Blue Black Grey";
let arrColors = favcolor.split(' ');
console.log(arrColors)




In JavaScript String is Immutable

let str = "Hello";
str[0] = "p";
str[1] = "q";

There will be no change in "str" variable;
console.log("No changes in string = " + str)

But we can concatinate string with vaiables
let alpha = str + " I am Alpha";
console.log("Now it concatinate the str with new string = " + alpha)


## 02.4_Numbers


let score = 50;
console.log(score)

Mathematical Operator * % / + - **

console.log(score/2)
console.log(score%2)
console.log(score+2)
console.log(score-2)

Mathematicall expressions

Using Priority And Precedence
1. () Bracket
2. ** Power Operator
3. * / % (From Left to Right)
4. + - (From Left to Right)

let result = score * 2 + (4*3) - 8 / 2 % 4;
console.log("Now by Using Priority And Precedence = " + result)

Concatination of Numbers

let resulting = "My Total Score is = " + result;
console.log(resulting)


## 02.5_Loose & Strict Equality

Loose equality (==) Vs Strict Equality Operator (===)
It's output comes in True or Flase
Loose Equality Operator ==

let age = 22; // Number type value
console.log(age == "22")  // == It focus only one value not on type
in place of == we can also use != 
console.log( age != "22")
Strict Equality Operator

console.log(age === "22")    // === it focus on value and type also
 Thats why it shows false in result because age is an string and 22 is number so not matches and show flase 


## 02.6_Type Conversion

Type Conversion
let stringType = "55";
console.log(stringType + " = now it shows that 55 is typestring = " + typeof stringType);
Number Method

let numberType = Number(stringType);
console.log(numberType, typeof numberType)
In Number method passing String Must be of numeric values


Boolean Method True/False

let age = "32";
let booleanValueOfAge = Boolean(age);

console.log("Boolean Value  of age is = ", booleanValueOfAge)


## 02.7_Arrays

Arrays 
we can use number and string as an index element

let dishes = ['Briyani', 'Chat', "Parathay"];

Now Array Access
console.log(dishes[2]) // here only index 2nd element printed

Modify The Array

dishes[0] = "kulcha";
console.log(dishes) // Output of index 0th element modified

Array Methods
1. Join Method (it is used to saperate the element between them)
console.log(dishes.join('-'))

2. indexOf  (indexOf is used to find that element is present or not)
console.log(dishes.indexOf("Chat")) // it is case sensitive so exact match of element  

3.Concatination Method
now make now array
dishes is 1st Array & newDishes is 2nd Array
let newDishes = ["sweet-dish","pani-puri"];
console.log(dishes.concat(newDishes)); 
 After concat 1st Array element comes first and 2nd Array element comes second.

4. Length Method
Its tells about the length of that array element 
console.log(dishes.length)

5. Push Method
It is used to Add any element at last index.
console.log(dishes.push("Chola"))  // In this line we push Chola Array dishes 
console.log(dishes)  // Now see the update in Array dishes.

6. Pop Method 
It is used to remove the element at last index.
console.log("now it pop chola from the array = " + dishes.pop("Chola"))
console.log("now new array without Chola = " + dishes)


## 02.8_Boolean Value & Comaprison Operators

Boolean Values And Comparison Operators

let booleanType = true;
let stringType = "true";

console.log("it shows boolean value = " + typeof booleanType, "it shows string type = " + typeof stringType)

Methods Return Boolean Values

let email = "alok@gmail.com";

let booleanValue = email.includes("@");
console.log(booleanValue)
it checks wether @ is present in booleanValue or not if present then return true otherwise return false.



Comparison Operator Always Return Boolean Value

== , === , !== , !=
> , >=
< , <=

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

Now Arithmetic Operations

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


    Arithmatic Operations
    let a = 5

    Increment a++ = 6
    Increment a+=2 = 7
    Decrement a-- = 4
    Decrement a-=2 = 3

    Logical Operations

    let a = true let b = flase

    OR a || b = true
    AND a && b = false
    Equality a == b = false
    Non-equality a != b = true

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
