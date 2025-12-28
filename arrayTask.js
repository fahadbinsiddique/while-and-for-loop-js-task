/*js-array-tasks 

1. Declare an array 
Declare an array with 5 elements containing fruits 
console log the 3rd index element 
change the value of the 2nd index element to jambura 
console log the final array */

let numb1 = ["fruit-1", "fruit-2", "fruit-3", "fruit-4", "fruit-5"];
console.log(numb1[3]);
numb1[2] = "jambura";
console.log(numb1);

/*2. Add or remove elements 
Declare an array of 3 tourist destinations 
Add a new tourist destination to your tourist array 
Add two more to your array 
Remove the last tourist destination you have added 
display the final array as output */

let numb2 = ["tourist-1", "tourist-2", "tourist-3"];
numb2.push("tourist-new");
console.log("adding a new tourist destination", numb2);
numb2.push("tourist-new-1", "tourist-new-2");
console.log("adding two more", numb2);
numb2.pop();
console.log("remove and final", numb2);
