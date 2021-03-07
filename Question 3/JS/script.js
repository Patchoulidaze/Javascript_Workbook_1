let fInt = prompt ("Please enter your first number between 0 to 20")
let sInt = prompt ("Please enter your second number between 0 to 20")

if (fInt > sInt){
  console.log('In ascending order, ' + sInt + " , " + fInt)
}
else if (fInt < sInt){
  console.log('In ascending order, ' + fInt + " , " + sInt)
}
else{
  console.log("Both numbers are equal!")
}