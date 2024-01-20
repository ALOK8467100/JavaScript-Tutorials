// 09.2_Event Object
/*
It is a special object that has details about event.
All event handler have access to the Event Object's properties and methods.

Syntax : 
node.event = (here is event object) => {
    handler event here
}
*/

let btn1 = document.querySelector("#btn1");
btn1.onclick = (evt) => {
    console.log(evt);
}
// We can get additonal information about the event we declared in js.

//  Like : Event type, client, twist , view, etc.