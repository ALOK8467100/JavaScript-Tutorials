/*
If Current mode is light then change it into dark and vice versa.
*/


let modeBtn = document.querySelector("#mode");

let currMode = "Light";

modeBtn.addEventListener("click", () => {
    if(currMode === "light"){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }else{
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currMode);
})