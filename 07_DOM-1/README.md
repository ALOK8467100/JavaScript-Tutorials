# DOM-1

## 07.1_Introduction to DOM
```
alert("hello");
```

Window Object
    The window object represent an open window in a browser. 
    It is Browser's object (not JavaScript's) & is automatically created by browser.
    It is a global object with lots of properties & methods. 
```    
console.log(window);
```

What is DOOM ?
 When a web page is loaded, the browser creates a Document Object Model (DOM) of the page.

 console.log()   * it only print that element or text
 console.dir()   * it print with its properties and methods.
 For printing Document or Object we use .dir

                                        Window
                                           |
                                            Document
                                            |
                                            Html
                                            |
                                        /       \
                                      head       body
                                        |        |
                            meta,title,link     div, script 


BY the help of JavaScript we can print our html document and every single portion through it.
```
console.dir(document);
console.dir(document.body);
console.dir(document.head);
```


## 07.2_DOM Manipulation

For Dynamic changes and maniplation we use JS.  

NOw see some DOM Maniplation in JS.

1. Selecting with id:
   
1. document.getElementById("myId")
2. Every element have unique and only one id.
3. id represented by #
```
let heading = document.getElementById("heading");
console.dir(heading);
```
2. Selection with class:
   
document.getElementByClassName("classname");
When we want to put multiple element in same category then we use class. 
classs represented by (.)
```
let headings = document.getElementsByClassName("sub-heading");
console.dir(headings);
console.log(headings)
```
3. Selecting with tag

document.getElementBYTagName("p")
```
let para = document.getElementsByTagName("p")
console.log(para);
console.dir(para);
```
4. Query Selector

In query selector we can pass id, class, tag name.
Syntax :
document.querySelector("myId/ myClass/ tag")   == it return first element.

document.querySelectorAll("myId/ myClass/ tag")   == it return a NOdeList.

```
let firstElement = document.querySelector("p")
console.log(firstElement);
console.dir(firstElement);
```
```
let allElement = document.querySelector("p")
console.log(allElement);
console.dir(allElement);
```
Same for class name but when we put className in query selector we have to put (.class) in it.
Same for id , we need to put (#id)


## 07.2_DOM Manipulation

Properties of DOM

1. tagName : return tag for element nodes.
2. innerText : return the text content of the element and all its childern.
3. innerHTML : return the plain text or HTML container in the element.
4. textContent : return textual content even for hidden elements.


 In DOM it have parent-child relation & we can print that also. 
 In DOM it has three section.
    1. text nodes   2. comments  3. elements
    we mainly work on elements.
    We can access both parent and child in DOM.
    In DOM we can also access by firstchild and lastchild.
```
console.dir(document.body.firstChild);
```
2. innerText
```
let div = document.querySelector("div")
console.dir(div)
console.dir(div.innerText)
```
3. innerHTML
It show text with html tag.
By use of innerHTML we set the value of HTML.
```
console.dir(div)
console.dir(div.innerHTML)
```
4. textContent
By use of textContent we see the hidden html text also.


## 07.4_Practice Question

Let's Practice


Q. Create a H2 heading element with text- "Hello JavaScript". Append "for Web developemnt" to this text using JS.

    1. access element
    2. property- change innerText.

```
let h2 = document.querySelector("h2");

console.dir(h2.innerText);

h2.innerText = h2.innerText + " for Web development";
```

Q. Create 3 div with common class name - "box". Access them & add some unique text to each of them.

```
let divs = document.querySelectorAll(".box");
console.log(divs);

for (div of divs) {
    console.log(div.innerText)
}

divs[0].innerText = "new unique value of 1";
divs[1].innerText = "new unique value of 2";
divs[2].innerText = "new unique value of 2";
```
