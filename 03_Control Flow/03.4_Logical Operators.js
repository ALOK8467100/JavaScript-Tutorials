// 03.4_Logical Operators

// Logical Operators

// And && , or || , Not !

// Example


// And && -->> if any condition is false , then hole condition is false.

// or ||  -->> if any condition is true , then hole statement is true.

// Not !  -->>  it changes from true to false & flase to true

// And , or , Not


// And &&

let password = "qwfwrgwy@";

if (password.length > 5 && password.includes('@')){
    console.log("Password Strength is Strong");
} else {
    console.log("Change your Password");
}


// or ||  

let passwords = "rewwdrwd";

if (passwords.length > 5 || passwords.includes('@')){
    console.log("Password Strength is Strong");
} else {
    console.log("Change your Password");
}

// Not !  -->> true to false and flase to true

let  status = false;
if(!status){
    console.log("Your status is = ", status)
}
