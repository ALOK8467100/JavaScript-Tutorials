// 09.3_Event Listeners

/*
In Event Listener it wait for the Event call and when it comes it execute.
We can create multiple Event Listener for a single Event. 

1. node.addEventListner(event, callback)   * callback is noting but handler.
2. node.removeEventListner(event, callback)

*/
// 1. How to add event listener
// node.addEventListener(event, callback)
let btn1 = document.querySelector("#btn1");


btn1.addEventListener("click", () => {
    console.log("button1 was clicked hello ");
});

btn1.addEventListener("click", () => {
    console.log("button1 was clicked Not hello ");
});

// 2. How to remove event listener
//    node.removeEventListener(event, callback)
//    For removing the handler we need to place that functio in a variable.

btn1.addEventListener("click", () => {
    console.log("button1 was clicked hello 1");
});

btn1.addEventListener("click", () => {
    console.log("button1 was clicked hello 2");
});

const hello3 =  () => {
    console.log("button1 was clicked hello 3");
};

btn1.addEventListener("click",hello3);

btn1.addEventListener("click", () => {
    console.log("button1 was clicked hello 4");
});

// Now we want to remove hello 3 function so for that we declare it in a variable.
// Now we remove the hello3

btn1.removeEventListener("click", hello3);  // It removed