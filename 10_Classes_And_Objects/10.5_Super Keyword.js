// 10.5_Super Keyword

/*
Super keyword is very important for Inheritance.
The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

    super(args) 

    here we use super keyword to access parent class.
    We cannot directly access the parent class, for this we have to use super() keyword
*/

class Person {
    constructor() {
        console.log("enter in parent constructor")
    }
}

class Engineer extends Person {
    constructor(branch) {
        console.log("enter in child constructor");
        super(); // here we use super keyword.
        this.branch = branch;
        console.log("exit from child constructor");
    }

    work(){

        super.eat()
        console.log("solve problem");
    }
}

let engobj = new Engineer("Chemical engg");
