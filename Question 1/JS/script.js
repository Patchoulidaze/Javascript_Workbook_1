let pInt = prompt ("Please enter an integer")

var counter = 0; 
let sum = 0
for(let x = 0; x<= pInt; x++){
  counter++;
  sum = sum + x
  console.log("Sum is "+ sum +" after adding "+ x);
  console.log("Number of loops is "+ counter);
}
let avg = sum/counter
console.log("The average of your inputted integer is "+ avg)
