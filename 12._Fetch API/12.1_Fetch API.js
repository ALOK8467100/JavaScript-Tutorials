// 12_Fetch API

// 12.1_Fetch API

/*
The Fetch API provides an interface for fetching (sending/recieving) resources.
It uses Request and Response object.
The fetch() method is used to fetch a resources (data).
Fetch always return a promise.

Syntax:

let promise = fetch(url, [options])

*/
// Here we made URL and assign thr https to it.

const URL = "https://cat-fact.herokuapp.com/facts"

// By doing this code we access our URL objects in console

let promise = fetch(URL);
console.log(promise)

console.log("**********");
// We have .then(), .catch() and async-await to access promises 
// But we use async-await.

/*
For Async function we made a function name getFacts.
Inside this getFact we put our async function.
And fetch(URL) using under async function so, we add await before fetch(URL).
And we remove promise by response because fetch(URL) return some thing to us and it is more redable as programmer.
*/

const getFacts = async () => {
    console.log("getting data....")
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data);   // here we with the help of response we print many things like
}                            // response.status, response.type, response.ok etc gives more details about URL which we requested.

/* Now again we have to type getFacts in console for geeting things.
    So, we use IIFE to avoide it.
*/

(async function (){
    console.log("Now we use fetch API using async function ");
    await getFacts();
    console.log("Data Recieved : Work Done");
}) ();


/*
let promise = fetch(url,[options])
And it use two things Request and Response

When we use fetch method and not send any options to it ,
Then it basically use GET request.
In Internet we have various types of request like : GET, DELETE, POST, UPDATE, 
*/
