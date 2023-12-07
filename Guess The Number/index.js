
let randomNumber = Math.round( (Math.random()*100 +1) ) ;  
console.log(randomNumber);


 const  submit = document.querySelector("#subt") ; 
 const userInput = document.querySelector("#guessField") ; 
 const guessSlot = document.querySelector(".guesses") ; 
 const remaining = document.querySelector(".lastResult") ; 
 const lowORHi = document.querySelector(".lowOrHi")
  const startOver = document.querySelector(".resultParas")
  const p = document.createElement('p') ; 
   
  let  prevGuess = [] ; 
  let numGuess = 1 ; 
  let playGame = true ;
    if(playGame) {
       submit.addEventListener('click' , function(event) { 
           event.preventDefault() ; 
           const guess = parseInt(userInput.value) ; 
           console.log(guess);
           validateGuess(guess) ; 
       }) ; 
    }
   
function validateGuess(guess) { 
    if(isNaN(guess)) {
        alert("Enter a Valid Number") ; } 
        else if (guess<1 ) {
            alert("Please enter a Number Greater Than 1") ; 
        }
        else if (guess>100 ) {
            alert("Please Enter a Number less Than 100") ;
        }
        else {
            prevGuess.push(guess) ; 
            if(numGuess ===11) {
                displayGuess(guess) ; 
                displayMsg(`Game Over. Random Number Was ${randomNumber}`)
                endGame()
               }
               else{
                    displayGuess(guess) ; 
                    checkGuess(guess) ; 
               }
        }
    }


function checkGuess(guess)
{
    if(guess === randomNumber){
        displayMsg("You guess it right") ; 
    endGame() ; }
    else if (guess<randomNumber) { 
       displayMsg("Number is too Low ") 
    }
    else if(guess>randomNumber) {
        displayMsg("number is too high") ; 
    }
}

 function displayMsg(msg) { 
      lowORHi.innerHTML= `<h2>${msg}</h2>`

 }
  
function displayGuess(guess) { 
   userInput.value = " " ; 
   guessSlot.innerHTML += `${guess}  `
   numGuess++ ; 
   remaining.innerHTML= `${11-numGuess}`
}

function endGame() { 
   userInput.value= " "
   userInput.setAttribute('disabled', '') ;
   p.classList.add('button') ; 
   p.innerHTML = `<h2 id="newGame" > Start New Game </h2>`; 
   startOver.appendChild(p)
   playGame= false ; 
   newGame() ;
}

function newGame() { 
      let newGameButton = document.querySelector("#newGame" ) ;
      newGameButton.addEventListener('click' ,function(event) {
       let randomNumber = Math.round( (Math.random()*100 +1) ) ;  
       prevGuess= [] ; 
       numGuess= 1 ; 
       guessSlot.innerHTML= ' '
       remaining.innerHTML = `${11- numGuess}`
       userInput.removeAttribute('disabled')
       startOver.removeChild(p) ; 
       playGame = true ;
      })

}


  
