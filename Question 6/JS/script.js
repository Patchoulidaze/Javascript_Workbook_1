function calculate(num1,opr,num2){
  if (opr=="+"){
    return num1 + num2
  }
  else if (opr =="-"){
    return num1 - num2
  }
  else if (opr =="*"){
    return num1 * num2
  }
  else if(opr =="/"){
    if (num2 == 0){
      return "infinity"
    }
    return num1 / num2
  }
  else {
    return "Your operator is not valid"
  }
}
console.log(calculate(4, "+", 6)); // Must show 10
console.log(calculate(4, "-", 6)); // Must show -2
console.log(calculate(2, "*", 0)); // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity
console.log(calculate(12, "**", 2));