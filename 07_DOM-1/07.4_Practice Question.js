// 07.4_Practice Question

// Let's Practice

/*
Q. Create a H2 heading element with text- "Hello JavaScript". Append "for Web developemnt" to this text using JS.

    1. access element
    2. property- change innerText.
*/

let h2 = document.querySelector("h2");

console.dir(h2.innerText);

h2.innerText = h2.innerText + " for Web development";


/* 
Q. Create 3 div with common class name - "box". Access them & add some unique text to each of them.
    
*/

let divs = document.querySelectorAll(".box");
console.log(divs);

for (div of divs) {
    console.log(div.innerText)
}

divs[0].innerText = "new unique value of 1";
divs[1].innerText = "new unique value of 2";
divs[2].innerText = "new unique value of 2";