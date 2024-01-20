// 09_EVENTS

// 09.1_Events

/*
The change in the state of an object is known as an Event.
Events are fired to notify code of "interesting chabge" that may affect code execution.

1. Mouse events (click, double click etc. )
2. Keyboard events (keypress, keyup, keydown)
3. Form events (submit etc.)
4. Print event & many more
*/

/* Syntax for Events:

node.event = () => {
     handle the event here
}
*/

let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a = 25;
    a++;
    console.log(a); // 
}

let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("you are inside div");
}

/*
    1. JavaScript code gives more priority then inline JavaSrript code
    2. IF we declare more tham one handler with same name then the latest will be executed and overright the last one.
    3. So to overcome this problem we use Event Listeners (09.3_Event Listeners)

*/