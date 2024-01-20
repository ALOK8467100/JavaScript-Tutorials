// 10.8_Error_Handling

// We use error handling to avoide error in our code.

let a = 5;
let b = 10;

console.log("a =", a);
console.log("b =", b);
console.log("a + b =",a + b);

try{
    console.log("a + b", a + c);
} catch (err) {
    console.log(err);
}

console.log("a + b =",a + b);
console.log("a + b =",a + b);
console.log("a + b =",a + b);
console.log("a + b =",a + b);
console.log("a + b =",a + b);

// In this sum instead of a + b, we write a + c
// So, basically it stop at this line .
// But by using try catch we grt our error in text and remaning code is run properly 