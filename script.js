let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
  return Math.floor(Math.random() * 10)
}

function compareGuesses(human_guess, computer_guess, secret_target) {
    if (human_guess < 0 || human_guess >= 10) {
  return alert("Number between 0 and 9")
    }
    const absolute_value_human = getAbsoluteDistance(human_guess, secret_target)
    const absolute_value_computer = getAbsoluteDistance(computer_guess,secret_target)
    if (absolute_value_human <= absolute_value_computer) {
    return true
    } else {
    return false
    }
    }

function updateScore(winner) {
  if (winner === "human") {
    humanScore += 1
  } else if (winner === "computer") {
    computerScore += 2
  } else {
    return "Error"
  }
}

function advanceRound() {
  currentRoundNumber += 1
}

function getAbsoluteDistance(x, y) {
  return Math.abs(x - y)
}


