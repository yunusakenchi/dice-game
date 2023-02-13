let player1Score = 0
let player2Score = 0
let player1Turn = true

let player1DiceCount = 0
let player2DiceCount = 0 

const message = document.getElementById("message")
const player1ScoreBoard = document.getElementById("player1-score-board")
const player2ScoreBoard = document.getElementById("player2-score-board")
const player1Dice = document.getElementById("player1-dice")
const player2Dice = document.getElementById("player2-dice")
const rollBtn = document.getElementById("roll-btn")
const resetBtn = document.getElementById("reset-btn")


function showBtn() {
    message.textContent = "Player 1 Turn"
    player1Score = 0
    player2Score = 0
    player1Turn = true

    player1ScoreBoard.textContent = 0
    player2ScoreBoard.textContent = 0
    player1DiceCount = 0 
    player2DiceCount = 0 
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    rollBtn.style.margin = "0 auto"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
}

rollBtn.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 6 + 1)

    if (player1Turn) {
        player1Score += randomNumber
        player1ScoreBoard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
        player1DiceCount++ 
    } else {
        player2Score += randomNumber
        player2ScoreBoard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
        player2DiceCount++ 
    }

    player1Turn = !player1Turn 

    if (player1Score >= 20 && player1DiceCount === player2DiceCount) {
        message.textContent = "Player 1 won!"
        rollBtn.style.display = "none"
        resetBtn.style.display = "block"
        resetBtn.style.margin = "0 auto"

    } else if (player2Score >= 20) {
        message.textContent = "Player 2 won!"
        rollBtn.style.display = "none"
        resetBtn.style.display = "block"
        resetBtn.style.margin = "0 auto"
    }
})

resetBtn.addEventListener("click", function() {
    showBtn()
})
