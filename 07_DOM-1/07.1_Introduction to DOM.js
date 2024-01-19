// 07.1_Introduction to DOM

alert("hello");

/* Window Object
    The window object represent an open window in a browser. 
    It is Browser's object (not JavaScript's) & is automatically created by browser.
    It is a global object with lots of properties & methods. 
*/
console.log(window);

/*
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

*/

// BY the help of JavaScript we can print our html document and every single portion through it.
console.dir(document);
console.dir(document.body);
console.dir(document.head);

