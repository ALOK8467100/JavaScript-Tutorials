// 10.6_Let's Practice.js

/* 
Q. You are creating a website for your college. Create a class User with 2 properties, name & email.
It also has a method called viewdata() that allow user to view website data.
*/

let DATA = "secreat information";

class User {
    constructor (name,email) {
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("data = ", DATA);
    }
}

let student1 = new User("Alok", "abc@gmail.com");
let student2 = new User("Ankit", "xyz@gmail.com");
let teacher1 = new User("HOD", "xyz@gmail.com");
let teacher2 = new User("DEAN`", "xyz@gmail.com");
