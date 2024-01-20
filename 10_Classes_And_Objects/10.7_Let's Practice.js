// 10.7_Let's Practice

/*
Q. Create a new class Admin which inherit from User.
Add a new method called editData to Admin that allows it to edit website data.
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

class Admin extends User {
    constructor(name,email) {
        super(name,email)
    }
    editData () {
        DATA = "Data is changed to some new value"
    }
}



let stud1 = new User("Alok", "abc@gmail.com");
let stud2 = new User("Ankit", "xyz@gmail.com");
let teac1 = new User("HOD", "xyz@gmail.com");
let teac2 = new User("DEAN`", "xyz@gmail.com");

let admin1 = new Admin("admin", "admin@gmail.com");