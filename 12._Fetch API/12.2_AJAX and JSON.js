// 12.2_AJAX and JSON
/*
Understanding Terms

*   AJAX: it Asynchronous JS & XML
*   JSON: it JavaScript Object Notation
*   json() method : return a second promise that resolve with the result of parsing the response body text as JSON.
*        (Input in JSON, output is JS object)


 The data we get is in (json) but we want our data in JS Object
 * Its return input in JSON and output in JS object
*/

const URL = "https://cat-fact.herokuapp.com/facts"

const getFacts = async () => {
    console.log("getting data....")
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data);   
    console.log("********");    
    console.log(data[0]);       // Now if i want to print particular data like data[0], data[1], data[2] .. etc
    console.log(data[0].text);   // We can print specific data from perticular array like (data[0].text)
} 




(async function (){
    console.log("Now we use fetch API using async function ");
    await getFacts();
    console.log("Data Recieved : Work Done");
}) ();
