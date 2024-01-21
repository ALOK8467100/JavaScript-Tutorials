// 12.3_API USES

const URL = "https://cat-fact.herokuapp.com/facts"


const factPara = document.querySelector("#fact");

const btn = document.querySelector("#btn");


const getFacts = async () => {
    console.log("getting data....")
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data);   
    console.log("********");    
    console.log(data[0]);       // Now if i want to print particular data like data[0], data[1], data[2] .. etc
    console.log(data[0].text);   // We can print specific data from perticular array like (data[0].text)

    factPara.innerText = data[0].text; // here we put our particular text inside our innerText to shown in html  
} 

btn.addEventListener("click", getFacts);