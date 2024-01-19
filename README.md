# 01_Introduction to JS

## 01.1_first

##### What is JavaScript?

> JS is a programming language. We use to give instruction to the computer.

>           Input (code) ---->  [computer]  ---->   Output
            instructions         
            in form of 
               code

### Our 1st JS Code
> Console.log is used to log(print) a message to the console
``` console .log("Our 1st JS Code."); ```

#### How to run JS.
> 1. We have to make a html file like ```index.html```.
> 2. Which connect our javascript code to browser.
> 3. In index.html file we have to write some code to link JS page.
> 4. code is 
> 5. <script></script>  

> Html has direct connection to  browser & Javascript has direct connection to console.
> But we want to make direct connection of our JAvascript to browser.
>SO, we do this thing

      html ---- browser

       |
       |

     JavaScript 


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


# CONDITIONAL STATEMENT & CONTROL FLOW

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


# Arrays in JS

## 04.1_Introduction to Array

Arrays in JS
Collection of items

Creat Array
In Array we put similar data type.
We prefer this kind of Array.

```
let heroes = ["ironman", "hulk", "thor", "batman"];
console.log(heroes);
```

array.length
It shows length of an array.
```
console.log(heroes.length);
```

We can put different data type in array, but we basically avoide, it not a good practice.
```
let info = ["rahul", 86,"Delhi"];
```

Array is type of object
```
console.log(typeof heroes);  // it shows it's an object.
```
Array Indices

For accesing particular indexes in array we use Array Indices.
```
let marks = [96,75,48,83,66];
console.log(marks[0]);  // it show's 96 for 0th index
```
We can change the value of array at any perticular index.
We change the marks[array] value at index [3] 83 to 90.
In JS Array is Mutable.

```
marks[3] = 90;
console.log(marks[3]); // value changed at index [3]. 
```


## 04.2_Looping over an Array

Looping over an Array
Print all element of an array.
```
let heroes = ["ironman","thor","hulk","skaktiman","spiderman","antman","loki","Capitan america"];
```
For printing all elememt of an array we have to use loop and for this we need to know the length of an array,
So we use array.length  

  Syntax :
        
for(let i= 0; i < arr.length; i++){

}

for loop 
```
for(let i = 0; i < heroes.length; i++){
    console.log(heroes[i]); 
}
console.log("*****");
```
for-of
We can also use methods  
```
for(let i of heroes){
    console.log(i);
}
```
Let's practice

Q1. For a given array with price of 5 items -> [250, 645, 300, 900, 50] 
All itmes have an offer of 10% OFF on them. Change the array to store final price after applying offer.

we find final value after offer is offer = value/10 (for 10%)

We use for-of loop 
```
let items = [250, 645, 300, 900, 50];
let i = 0;
for (let val of items){
    console.log(`Value at index ${i} = ${val}`);
    let offer = val/ 10;
    items[i] = items[i] - offer;
    console.log(`Value after offer = ${items[i]} `);
    i++;

}
```
Now using for loop
```
let item = [250, 645, 300, 900, 50];
for(let i = 0; i < item.length; i++){
    console.log(`Value before offer ${item[i]}`);
    let offer = item[i] / 10;
    item[i] -= offer;
    console.log(`value after offer = ${item[i]}`);
}
```


## 04.3_Array Methods in JS

Array mathods in JS

```
let dishes = ['Briyani', 'Chat', "Parathay"];
```

1. Join Method 
(it is used to saperate the element between them)
```
console.log(dishes.join('-'))
```

2. indexOf 
 (indexOf is used to find that element is present or not)
```
console.log(dishes.indexOf("Chat")) // it is case sensitive so exact match of element  
```
3. Concatination Method
It's join multiple arrays & return result
now make new array
dishes is 1st Array & newDishes is 2nd Array

```
let newDishes = ["sweet-dish","pani-puri"];
console.log(dishes.concat(newDishes)); 
```
After concat 1st Array element comes first and 2nd Array element comes second.

4. Length Method

Its tells about the length of that array element 
```
console.log(dishes.length)
```
5. Push Method (at end)
   
It is used to Add any element at last index.
```
console.log(dishes.push("Chola"))  // In this line we push Chola Array dishes 
console.log(dishes)  
```
Now see the update in Array dishes.

6. Pop Method (remove at last) 
It is used to remove the element at last index.
```
console.log("now it pop chola from the array = " + dishes.pop("Chola"))
console.log("now new array without Chola = " + dishes)
```
7. toString() : convert array to string
to.string not change the original string it make new string.
```
console.log(dishes.toString());
```
8. (): add to started array.
```
dishes.unshift("Pani-puri");
console.log(dishes);
```

9. shift() : delete from start & return
```
let val = dishes.shift();
console.log("deleted" , val);
```
10. Slice(startidx, endidx) it not change in original array
Syntax : slice(startidx, endidx)
```
let marvelHeroes = ["Thor","Spiderman","Ironman","Antman","Dr.Strange"];

console.log(marvelHeroes.slice(1,3));
```
11. Splice() : change original array (add,remove, replace)
Syntax : splice(startidx, delCount, newEl1)
```
let arr = [1,2,3,4,5,6,7,8];
arr.splice(2,2,101,103)
console.log(arr);
```
We can add element directly without changing or deleting it.
```
arr.splice(2,0,304);
console.log(arr)
```
How to delete using splice.
```
arr.splice(3,1);
console.log(arr)
```

Q. Create an array to store companies ->  "Bloomberg" , "Microsoft" , "Uber" , "Google" , "IBM" , "Netflix"
1. Remove the first company from the array.
2. Remove Uber & Add Ola in it place.
3. Add Amazon at the end.

```
let companies = ["Bloomberg" , "Microsoft" , "Uber" , "Google" , "IBM" , "Netflix"];
```

1. For remove the first company we use shift()
```
companies.shift();
console.log(companies);
```

2. For remove Uber and add Ola in it we use splice
```
companies.splice(1,1,"Ola");
console.log(companies);
```
3. For add Amazon at the end we use push()
```
companies.push("Amazon");
console.log(companies);
```
12. Map method

similar to for-Each array
bUt differnce is it create a new array.

Symtax for map method
arr.map(callbackFnx(value, index, array))
```
let nums = [67,34,89];
nums.map((val) => {
console.log(val);
});
```
We can store array element in new array also.
```  
let newArr = nums.map((val) =>{
    return val;
});
console.log(newArr)
```
13. filter method

This method is used to filter some particular element or thing from our given array.
```
let arrs = [1,2,3,4,5,6,7];

let evenArr = arrs.filter((val) => {
        return val % 2 === 0;
});

console.log(evenArr);
```

14.  Reduce method
Performs some operations & reduce the array to a single value.
It return that single value.
```
        const output = arrs.reduce((prev, curr) =>{
            return prev + curr;
        });
        console.log(output);
```
We can find max and min by using Reduce method.
```
        const max = arrs.reduce((prev, curr) =>{
            return prev > curr ? prev : curr;
        });
        console.log(max);
```
        // For min just reverse the arrow from  prev to curr
        // prec < curr.


# DOM-1

## 07.1_Introduction to DOM
```
alert("hello");
```

Window Object
    The window object represent an open window in a browser. 
    It is Browser's object (not JavaScript's) & is automatically created by browser.
    It is a global object with lots of properties & methods. 
```    
console.log(window);
```

What is DOOM ?
 When a web page is loaded, the browser creates a Document Object Model (DOM) of the page.

 console.log()   * it only print that element or text
 console.dir()   * it print with its properties and methods.
 For printing Document or Object we use .dir

                                        Window
                                           |
                                            Document
                                            |
                                            Html
                                            |
                                        /       \
                                      head       body
                                        |        |
                            meta,title,link     div, script 


BY the help of JavaScript we can print our html document and every single portion through it.
```
console.dir(document);
console.dir(document.body);
console.dir(document.head);
```


## 07.2_DOM Manipulation

For Dynamic changes and maniplation we use JS.  

NOw see some DOM Maniplation in JS.

1. Selecting with id:
   
1. document.getElementById("myId")
2. Every element have unique and only one id.
3. id represented by #
```
let heading = document.getElementById("heading");
console.dir(heading);
```
2. Selection with class:
   
document.getElementByClassName("classname");
When we want to put multiple element in same category then we use class. 
classs represented by (.)
```
let headings = document.getElementsByClassName("sub-heading");
console.dir(headings);
console.log(headings)
```
3. Selecting with tag

document.getElementBYTagName("p")
```
let para = document.getElementsByTagName("p")
console.log(para);
console.dir(para);
```
4. Query Selector

In query selector we can pass id, class, tag name.
Syntax :
document.querySelector("myId/ myClass/ tag")   == it return first element.

document.querySelectorAll("myId/ myClass/ tag")   == it return a NOdeList.

```
let firstElement = document.querySelector("p")
console.log(firstElement);
console.dir(firstElement);
```
```
let allElement = document.querySelector("p")
console.log(allElement);
console.dir(allElement);
```
Same for class name but when we put className in query selector we have to put (.class) in it.
Same for id , we need to put (#id)


## 07.2_DOM Manipulation

Properties of DOM

1. tagName : return tag for element nodes.
2. innerText : return the text content of the element and all its childern.
3. innerHTML : return the plain text or HTML container in the element.
4. textContent : return textual content even for hidden elements.


 In DOM it have parent-child relation & we can print that also. 
 In DOM it has three section.
    1. text nodes   2. comments  3. elements
    we mainly work on elements.
    We can access both parent and child in DOM.
    In DOM we can also access by firstchild and lastchild.
```
console.dir(document.body.firstChild);
```
2. innerText
```
let div = document.querySelector("div")
console.dir(div)
console.dir(div.innerText)
```
3. innerHTML
It show text with html tag.
By use of innerHTML we set the value of HTML.
```
console.dir(div)
console.dir(div.innerHTML)
```
4. textContent
By use of textContent we see the hidden html text also.


## 07.4_Practice Question

Let's Practice


Q. Create a H2 heading element with text- "Hello JavaScript". Append "for Web developemnt" to this text using JS.

1. access element
2. property- change innerText.

```
let h2 = document.querySelector("h2");

console.dir(h2.innerText);

h2.innerText = h2.innerText + " for Web development";
```

Q. Create 3 div with common class name - "box". Access them & add some unique text to each of them.

```
let divs = document.querySelectorAll(".box");
console.log(divs);

for (div of divs) {
    console.log(div.innerText)
}

divs[0].innerText = "new unique value of 1";
divs[1].innerText = "new unique value of 2";
divs[2].innerText = "new unique value of 2";
```


# 08_DOM-2 (Document Object Model)

## 08.1_Attributes in DoM-2

Attributes

1. getAttribute(attr)  * to get the attribute value

let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);


2. setAttribute(attr, value)  * to get the attribute value
```
let para = document.querySelector("p");
console.log(para.setAttribute("class", "newClass"));
```
Class chabges to newClass


3. Style
node.style
```
let dive = document.querySelector("div")
console.log(div);
console.log(div.style);
```
by using JS style we change the color size and other properties also of div.
```
div.style.backgroundColor = "red"
div.style.fontSize = "20px";
```


## 08.2_Insert & Delete Element in DOM

Now how to add New element 
for it we have to create first and then add.


We have four main insert method 


1. node.append(el) * adds at the end of node(inside)
```
let newBtn = document.createElement("button");
newBtn.innerText = "clickme!";
console.log(newBtn);
```

I want to access that button inside div at end.
```
let div = document.querySelector("div")
div.append(newBtn);
```
2. node.prepend(el) * adds at the start of node(inside)
```
let onBtn = document.createElement("button");
onBtn.innerText = "clickme!";
let dive = document.querySelector("div")
dive.prepend(onBtn);
```
3. node.before(el) * adds before the node (outside)
```
let Btn = document.createElement("button");
Btn.innerText = "clickme!";
let di = document.querySelector("div");
dive.before(Btn);
```
4. node.after(el)  * adds after the node (outside)
```
let Bt = document.createElement("button");
Bt.innerText = "clickme!";
let dev = document.querySelector("div");
dive.after(Bt);
```
5. Delete Element

node.remove()  * remove the node

same first access and then remove it.
Suppose we want to delete para.

```
let para = document.querySelector("p");
para.remove();  // Now para removed.
```


## 08.3_Let's Practice


Q. Create a new button element. Give it a text "click me", background color of red & text color of white.
Insert the button as the first element inside the body tag.

```
let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

let body = document.querySelector("body")
body.prepend(newBtn);
```

##### ClassList
collection of the class attributes of the element.

1. let div = document.createElement("div");
div.className = "foo";

2. our starting state: <div class="foo"></div>

console.log(div.outerHTML);

3. use the classList API to remove and add classes

div.classList.remove("foo");
div.classList.add("anotherclass");

4. <div class="anotherclass"></div>

console.log(div.outerHTML);

5. if visible is set remove it, otherwise add it

div.classList.toggle("visible");

6. add/remove visible, depending on test conditional, i less than 10

div.classList.toggle("visible", i < 10);

7. false

console.log(div.classList.contains("foo"));

8. add or remove multiple classes

div.classList.add("foo", "bar", "baz");
div.classList.remove("foo", "bar", "baz");

9. add or remove multiple classes using spread syntax

const cls = ["foo", "bar"];
div.classList.add(...cls);
div.classList.remove(...cls);

10. replace class "foo" with class "bar"

div.classList.replace("foo", "bar");


