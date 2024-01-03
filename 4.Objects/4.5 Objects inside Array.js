// Object inside Array

// In this array it has two objects inside the array
let blockList = [{userName:"John", reason:"Abusive content"},{userName:"Anil", reason:"lack of attendence"}]

console.log(blockList)

for(let i = 0; i<blockList.length; i++){
    console.log(blockList[i])  // by using blockList[i].userName we can access only name
                               // if we put blockList[i].username.
} 

// In this we can use this  ${} template also for more clearity

for(let i = 0; i<blockList.length; i++){
    console.log(` User ${blockList[i].userName} Blocked due to ${blockList[i].reason}`)
}