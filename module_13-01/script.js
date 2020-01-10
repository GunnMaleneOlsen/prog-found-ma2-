//question 1

var petArray = ["cat", "cow", "dog"];

//question 2
console.log(petArray[1]);

//question 3
petArray.push("sheep");

//question 4
console.log(petArray.length);

//question 5
var catObject = {
    name: "calico",
    colour: "orange, black, white",
    age: 5
}

//question 6
console.log("cats age:", catObject.age);

//question 7

var catArray = [
    {
        name: "calico",
        colour: "orange, black, white",
        age: "cats age:" + 5
    }
];
//question 8
for(var index = 0; index < catArray.length; index++){
    console.log(catArray[index].name);
    console.log(catArray[index].colour);
    console.log(catArray[index].age);
}

/*
console.log(catArray[index].name);
console.log(catArray[index].colour);
console.log(catArray[index].age);
*/

//question 9
function logToConsole(barn){
    console.log(barn)

};

logToConsole("barn");

//question 10
logToConsole("donkey");

