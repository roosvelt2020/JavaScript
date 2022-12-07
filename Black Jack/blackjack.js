let firstCard = 10
let secondCard = 11
let hasBlackJack = false
let isAlive = true
let sum = firstCard + secondCard
let message = ""

if (sum <= 20) {
    message = "Do you want to draw a new card?"
} else if (sum === 21) {
    message = "Wohoo! You've got blackjack"
    hasBlackJack = true
} else {
    message = "You're out of the game! "
    isAlive = false
}

// CASH OUT:
console.log(hasBlackJack)