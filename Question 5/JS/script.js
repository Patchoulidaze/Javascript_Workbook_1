function calc(num){
  let half = num/2
  let square = half**2
  let cirA = Math.PI*square**2
  let percent = cirA/cirA**2*100
  return("The result of halving " + num + " is " + half +", squaring the result is"
  + square + " using the resultant number as the radius for a circle nets you "
  + cirA + " and the percentage of the circle area over itself squared is "
  + percent)
}
calc (10)
