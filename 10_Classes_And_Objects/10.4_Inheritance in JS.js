// 10.4_Inheritance in JS

/*
Inheritance is passing down properties & method form parent class to child class. 
Syntax : 

class Parent {

}
class Child extends Parents{

}

Suppose in class-1 have p1, p2, m1, m2.
And we want to access all properties of class-1 to class-2 
So, we use inheritance for it.
As, Class-1 is acting as Parent and Class-2 is acting as Child.

* If Child & Parents have same method, Child's mehtods will be used. [Method Overriding]
*/

class Parent {
    hello() {
        console.log("hello");
    }
}

class Child extends Parent{

}

let obj = new Child();


/* Now see one more example.
   class person is one class and Engineer is another class.
   person class have eat() and sleep() function and Engineer class has work() function.
   Burt we want to access this sleep() and eat() function with Engineer class.
   So, for this we use Inheritance So person class become parent and Engineer class become child 
   we use this syntax:

   class Engineer extends Person {

   }

   After that we take a new variable alokobj to show the result in console.
*/

class Person{
    eat() {
        console.log("eat new dishes");
    }

    sleep() {
        console.log("sleep on time");
    }
}

class Engineer extends Person{
    work () {
        console.log("solve problem")
    }
}

let engobj = new Engineer();