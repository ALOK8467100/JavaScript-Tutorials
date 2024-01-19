# DOM-2 (Document Object Model)

## 08.1_Attributes in DoM-2

Attributes

1. getAttribute(attr)  * to get the attribute value

let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);


2. setAttribute(attr, value)  * to get the attribute value
```
let para = document.querySelector("p");
console.log(para.setAttribute("class", "newClass"));
```
Class chabges to newClass


3. Style
node.style
```
let dive = document.querySelector("div")
console.log(div);
console.log(div.style);
```
by using JS style we change the color size and other properties also of div.
```
div.style.backgroundColor = "red"
div.style.fontSize = "20px";
```


## 08.2_Insert & Delete Element in DOM

Now how to add New element 
for it we have to create first and then add.


We have four main insert method 


1. node.append(el) * adds at the end of node(inside)
```
let newBtn = document.createElement("button");
newBtn.innerText = "clickme!";
console.log(newBtn);
```

I want to access that button inside div at end.
```
let div = document.querySelector("div")
div.append(newBtn);
```
2. node.prepend(el) * adds at the start of node(inside)
```
let onBtn = document.createElement("button");
onBtn.innerText = "clickme!";
let dive = document.querySelector("div")
dive.prepend(onBtn);
```
3. node.before(el) * adds before the node (outside)
```
let Btn = document.createElement("button");
Btn.innerText = "clickme!";
let di = document.querySelector("div");
dive.before(Btn);
```
4. node.after(el)  * adds after the node (outside)
```
let Bt = document.createElement("button");
Bt.innerText = "clickme!";
let dev = document.querySelector("div");
dive.after(Bt);
```
5. Delete Element

node.remove()  * remove the node

same first access and then remove it.
Suppose we want to delete para.

```
let para = document.querySelector("p");
para.remove();  // Now para removed.
```


## 08.3_Let's Practice


Q. Create a new button element. Give it a text "click me", background color of red & text color of white.
Insert the button as the first element inside the body tag.

```
let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

let body = document.querySelector("body")
body.prepend(newBtn);
```

##### ClassList
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

