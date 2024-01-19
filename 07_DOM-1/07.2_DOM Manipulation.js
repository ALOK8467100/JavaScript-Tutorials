// 07.2_DOM Manipulation

// For Dynamic changes and maniplation we use JS.  

//  NOw see some DOM Maniplation in JS.

// 1. Selecting with id: 
//    document.getElementById("myId")
//    Every element have unique and only one id.
//    id represented by #

let heading = document.getElementById("heading");
console.dir(heading);

// 2. Selection with class:
//    document.getElementByClassName("classname");
//    When we want to put multiple element in same category then we use class. 
//    classs represented by (.)

let headings = document.getElementsByClassName("sub-heading");
console.dir(headings);
console.log(headings)

// 3. Selecting with tag
//   document.getElementBYTagName("p")

let para = document.getElementsByTagName("p")
console.log(para);
console.dir(para);

// 4. Query Selector
//  In query selector we can pass id, class, tag name.
//  Syntax :
//  document.querySelector("myId/ myClass/ tag")   == it return first element.

//  document.querySelectorAll("myId/ myClass/ tag")   == it return a NOdeList.


let firstElement = document.querySelector("p")
console.log(firstElement);
console.dir(firstElement);


let allElement = document.querySelector("p")
console.log(allElement);
console.dir(allElement);

//  Same for class name but when we put className in query selector we have to put (.class) in it.
//  Same for id , we need to put (#id)