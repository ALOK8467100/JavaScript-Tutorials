// 10.2_Classes in JS

/* Classes in JS

Class is a program-code template for creating objects.
Those object will have some state (variable) & some behaviour (functions) inside it.
Classes  gives template to the objects.
when we need to store bulk similar data, then we use Classes.
When we made objects by using Classes then it have some state(Variables) & some behaviour (functions) inside it.


Class Syntax :

class MyCLass{
    constructor() {}
    myMethod() {}
}

let myObj = new MyClass();
*/

class ToyotaCar {
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }
}

let fortuner = new ToyotaCar();
let lexus = new ToyotaCar();

// Here we use the same template ToyataCar for fortuner and lexus.