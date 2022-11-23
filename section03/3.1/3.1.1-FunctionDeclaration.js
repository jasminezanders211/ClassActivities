// TODO: using the function expressions below, refactor them into function declarations
// 1)
// Function Expression
const greet = function() {
  console.log("Hello!");
};

// Refractored function...
function greet() {
  console.log("Hello!");
};

 // 2)
 // Function Expression
const threeModTwo = function() {
  console.log(3 % 2);
};

// Refactored function...
function theeModeTwo(){
  console.log(3 % 2);

};

// 3)
// Funtion Expression:
let age = 18;
const checkDrivingAge = function() {
  if (age >= 16) {
    console.log(true);
  } else {
    console.log(false);
  }
};

// Refactored function...
function checkDrivingAge() {
  if (age >= 16) {
    console.log(true);
  } else {
    console.log(false);
  }
};
