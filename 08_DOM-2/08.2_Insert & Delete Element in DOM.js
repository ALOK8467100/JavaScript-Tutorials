// 08.2_Insert & Delete Element in DOM

// Now how to add New element 
// for it we have to create first and then add.


// We have four main insert method 


// 1. node.append(el) * adds at the end of node(inside)
let newBtn = document.createElement("button");
newBtn.innerText = "clickme!";
console.log(newBtn);


// I want to access that button inside div at end.

let div = document.querySelector("div")
div.append(newBtn);

// 2. node.prepend(el) * adds at the start of node(inside)

let onBtn = document.createElement("button");
onBtn.innerText = "clickme!";
let dive = document.querySelector("div")
dive.prepend(onBtn);

// 3. node.before(el) * adds before the node (outside)

let Btn = document.createElement("button");
Btn.innerText = "clickme!";
let di = document.querySelector("div");
dive.before(Btn);

// 4. node.after(el)  * adds after the node (outside)

let Bt = document.createElement("button");
Bt.innerText = "clickme!";
let dev = document.querySelector("div");
dive.after(Bt);

// 5. Delete Element
//  node.remove()  * remove the node
//  same first access and then remove it.
//  Suppose we want to delete para.

let para = document.querySelector("p");
para.remove();  // Now para removed.
