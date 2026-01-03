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
    console.log(numb2);
  }
  numb2++;
}

// Subtask-2:
// Find all the even numbers from 78 to 98.

let numb3 = 78;
while (numb3 <= 98) {
  if (numb3 % 2 === 0) {
    console.log(numb3);
  }
  numb3++;
}
