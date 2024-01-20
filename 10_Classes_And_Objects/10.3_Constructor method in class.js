// 10.3_Constructor method in class.js

/*
Constructor() method is :
    1. It is a reserved keyword.
    2. automatically invoked by new.
    3. When we make new object it automatically invoked.
    4. initalized object.

    We can make our new custom constructor.
*/

class ToyotaCar {
    constructor(brand){
        console.log("creating new object");
        this.brand = brand;
    }
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }
}

let fortuner = new ToyotaCar("fortuner");
let lexus = new ToyotaCar("lexus");