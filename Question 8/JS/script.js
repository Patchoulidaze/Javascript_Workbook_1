var string = "FOX"
var inari = string.split('');

var guess = []
for(let i = 0; i < inari.length; i++){
  guess.push("_");
}

function predictLetter(letter){
  let congrats = false
  for(let i = 0; i < inari.length; i++){
    if(letter.toUpperCase()==inari[i].toUpperCase()){
      guess[i] = letter
      congrats = true
    }
  }
  console.log("The letter you have used is " + letter)
  if (congrats){
    console.log("Congratulations! You have found a new letter!")
  }
}
while (guess.includes("_")){
  predictLetter (prompt("please enter a letter")) 
}
console.log("You are a winner!")
