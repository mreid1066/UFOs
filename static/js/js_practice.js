// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
  }

// Takes two numbers and adds them
function addition(a, b) {
    return a + b;
  }

// Print Functio using 4 and 5 as arguments
console.log(addition(4, 5));

// Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }

// Use 65 and 34 as the arguments for doubleAddition
console.log(doubleAddition(65, 34));

// Use an arrow function to simplify the simple JavaScript statement from above
printHello = () => "Hello there!";

// Original addition function
function addition(a, b) {
    return a + b;
  }

// Converted to an arrow function
addition = (a, b) => a + b;

// Convert the doubleAddition function to an arrow function
doubleAddition =(c, d) => addition(c, d) * 2;

// Skill Drill - Use doubleAddition function to find the total of 33 and 25
doubleAddition(33, 25)

// Practicing with loops
// Add the array
let friends = ["Sarah", "Greg", "Cindy", "Jeff"];

// Create a function that contains a loop
function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
 }

 // iterate through function using friends array
 listLoop(friends)

 // More practice
 let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

 for (var i = 0; i < vegetables.length; i++) {
    console.log("I love " + vegetables[i]);
}

// Iterate through numbers
for (var i = 0; i < 5; i++) {
    console.log("I am " + i);
 }

// forEach loop
let numbers = [1, 2 , 3, 4, 5, 6];
numbers.forEach(function(element) {
    console.log(element**2);
})

// If statements in JavaScript
// if-statement syntax
// if ( condition ) { code to execute }

// pseudocode practice
// if (a date is entered) {
//     Filter the default data to show only the date entered
// };