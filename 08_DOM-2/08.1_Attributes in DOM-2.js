// DOM-2 (Document Object Model)

// 08.1_Attributes in DoM-2

// Attributes

// 1. getAttribute(attr)  * to get the attribute value

let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);


// 2. setAttribute(attr, value)  * to get the attribute value

let para = document.querySelector("p");
console.log(para.setAttribute("class", "newClass"));
// Class chabges to newClass


// 3. Style
//  node.style

let dive = document.querySelector("div")
console.log(div);
console.log(div.style);
// by using JS style we change the color size and other properties also of div.
div.style.backgroundColor = "red"
div.style.fontSize = "20px";

