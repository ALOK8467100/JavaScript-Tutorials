// 08.3_Let's Practice

/*
Q. Create a new button element. Give it a text "click me", background color of red & text color of white.
    Insert the button as the first element inside the body tag.
*/

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

let body = document.querySelector("body")
body.prepend(newBtn);

/* 1. ClassList
 collection of the class attributes of the element.

1. let div = document.createElement("div");
div.className = "foo";

2. our starting state: <div class="foo"></div>

console.log(div.outerHTML);

3. use the classList API to remove and add classes

div.classList.remove("foo");
div.classList.add("anotherclass");

4. <div class="anotherclass"></div>

console.log(div.outerHTML);

5. if visible is set remove it, otherwise add it

div.classList.toggle("visible");

6. add/remove visible, depending on test conditional, i less than 10

div.classList.toggle("visible", i < 10);

7. false

console.log(div.classList.contains("foo"));

8. add or remove multiple classes

div.classList.add("foo", "bar", "baz");
div.classList.remove("foo", "bar", "baz");

9. add or remove multiple classes using spread syntax

const cls = ["foo", "bar"];
div.classList.add(...cls);
div.classList.remove(...cls);

10. replace class "foo" with class "bar"

div.classList.replace("foo", "bar");

*/
