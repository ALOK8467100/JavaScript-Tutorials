// 07.2_DOM Manipulation

/* Properties of DOM

tagName : return tag for element nodes.
innerText : return the text content of the element and all its childern.
innerHTML : return the plain text or HTML container in the element.
textContent : return textual content even for hidden elements.

*/

/*
 In DOM it have parent-child relation & we can print that also. 
 In DOM it has three section.
    1. text nodes   2. comments  3. elements
    we mainly work on elements.
    We can access both parent and child in DOM.
    In DOM we can also access by firstchild and lastchild.
*/

console.dir(document.body.firstChild);

// 2. innerText
let div = document.querySelector("div")
console.dir(div)
console.dir(div.innerText)

// 3. innerHTML
//  It show text with html tag.
// By use of innerHTML we set the value of HTML. 
console.dir(div)
console.dir(div.innerHTML)

//  4. textContent 
//  By use of textContent we see the hidden html text also.