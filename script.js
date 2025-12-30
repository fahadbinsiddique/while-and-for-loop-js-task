// While Loop:

// Problem-1:
// I will invest at least 6 hrs every single day for next 60 days! this
// message 60 times. So display this.

let numb1 = 1;
while (numb1 <= 60) {
  console.log(
    numb1,
    ":I will invest at least 6 hrs every single day for next 60 days!"
  );

  numb1++;
}

/*Problem-2 : 
Subtask-1: 
Find all the odd numbers from 61 to 100. */

let numb2 = 61;
while (numb2 <= 100) {
  if (numb2 % 2 === 1) {
    console.log("problem-2: Subtusk-1", numb2);
  }
  numb2++;
}

// Subtask-2:
// Find all the even numbers from 78 to 98.

let numb3 = 78;
while (numb3 <= 98) {
  if (numb3 % 2 === 0) {
    console.log("problem-2: Subtusk-2", numb3);
  }
  numb3++;
}

// Problem-3 :

// Subtask-1:
// Display sum of all the odd numbers from 81 to 131.

let numb4 = 81;
let total4 = 0;
while (numb4 <= 131) {
  if (numb4 % 2 === 1) {
    total4 = total4 + numb4;
  }
  numb4++;
}
console.log("Problem-3: Subtask-1:", total4);

//Subtask-2:
// Display sum of all the even numbers from 206 to 311.

let numb5 = 206;
let total5 = 0;
while (numb5 <= 311) {
  if (numb5 % 2 === 0) {
    total5 = total5 + numb5;
  }
  numb5++;
}
console.log("problem-3: Subtusk-2", total5);

