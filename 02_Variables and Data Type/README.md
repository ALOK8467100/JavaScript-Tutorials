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

/* There are two types of data type.
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
