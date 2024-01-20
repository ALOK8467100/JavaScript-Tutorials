/*
Classes and Objects

Prototypes in JS
1. A javaScript object is an entity having state and behavior (properties and method).
2. JS objects have a special properties called prototype.
3. We can set prototype using  (proto)

** if object & prototype have same method, object's method will be used. 
*/

const student = {
    fullName : "Alok",
    marks : 76,
    printmarks : function () {
        console.log("marks = ", this.marks);
    },
};
/*
We can also use .this to represent that object.
Like : this.marks is same as student.marks.
prototype is always come inside object.
Prototype  is reference to an object.

If we write any knd of function and we need to use it again 
So, for this we use prototype 

example : one object having employee and inside it conatin function calcTax
suppose a new employee join the comapny then we dont need to write the function again.
we use prototype for this.
*/

const employee = {
    calTax() {
        console.log("tax rate is 10%");
    },
};

const karanArjun = {
    salary : 50000,
};

karanArjun.__proto__ = employee
