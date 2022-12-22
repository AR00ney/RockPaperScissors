totalScore = { computerScore: 0, playerScore: 0 }

// get random comp choice 
function getComputerChoice() {
  let rpsChoice = ['Rock', 'Paper', 'Scissors']
  let randomNumber = Math.floor(Math.random() * 3)
  
  return rpsChoice[randomNumber]
}

// get result of player and comp choice work out score
function getResult(playerChoice, computerChoice) {
  let score;
  if (playerChoice == computerChoice) {
    score = 0
  } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score = 1
  } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    score = 1
  } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    score = 1
  } else {
    score = -1
  }
  return score
}

// show result in div work out win/lose/draw
function showResult(score, playerChoice, computerChoice) {
  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')
  if (score == 0) {
    resultDiv.innerText = 'Draw'
  } else if (score == -1) {
    resultDiv.innerText = 'Lose'
  } else {
    resultDiv.innerText = 'Win'
  }
  handsDiv.innerText = `You: ${playerChoice} 
      vs 
Bot: ${computerChoice}`
  playerScoreDiv.innerText = `Your score is ${totalScore['playerScore']}
Bot score is: ${totalScore['computerScore']}`
}

// on click get results call showResults
function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice, computerChoice)
  totalScore['playerScore'] += score
  const score2 = getResult(computerChoice, playerChoice)
  totalScore['computerScore'] += score2
  showResult(score, playerChoice, computerChoice)
}

// play game function button onclick
function playGame() {
  const rpsButtons = document.querySelectorAll('.rpsButton')
  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
  })
  const endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame(totalScore)
}

// end game reset scores and text
function endGame(totalScore) {
  totalScore['playerScore'] = 0
  totalScore['computerScore'] = 0
  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')

  resultDiv.innerText = ''
  handsDiv.innerText = ''
  playerScoreDiv.innerText = ''
}

// call playGame
playGame()