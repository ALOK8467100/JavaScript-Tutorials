// 11.3_Callback Hell

/*
Callback Hell
Callback hell:  Nested callbacks stacks below one another forming forming a pyramid structure.(Pyramid of DOM)

This style of programming becomes differ to understand & manage.

Nesting if, if-else 
let age = 19;
if (age>=18) {
    if (age>=60){
        console.log("senior");
    {   else {
        consol.log(middle);
    }
    } else {
      console.log("child");      
}

Nesting for loop 

for(let i = 0; i < 5; i++){
    let str = "";
    for(let j = 0; j < 5; j++) {
        str = str + j;
    }
    console.log(i, str);
}

Both if-else and for-loop nesting means for-loop inside for-loop 
& same for if-else loop. 
*/


/*
Same as loop, callback also having nesting.
But if more Callback is done then it's create a problem of Callback Hell.
*/

/*
In this we get dataId and after that we also check next command by getNextData.
if any data get we also print after it with taking some time 
we assign 2000ms = 2sec
*/
function getData(dataId, getNextData) {
    setTimeout( () => {
        console.log("data", dataId);
        if(getNextData){
            getNextData();
        }
    }, 2000);
}


getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4, () => {

            });
        });
    });
});

/*
Here we use Nesting Callback 
In getData1 we nesting getData2 and in getData2 we nesting getData3. 

We get all getData(1),getData(2),getData(3) together.
But we want that getData(1) execute and after few-time, then getData(2) get executed and after that getData(3) executed.

*/



/*
Let's take Instagram login problem

When we login to Instagram 
first it's check UserName and after Password,
If UserName is not found in database then our program not goes to Password section .
And program terminates.
So, at the time of searching UserName in datbase if database is so big and huge,
So it takes time   
*/
// But is looking very complex having nested callback like this .
// So to overcome this we have Promises.