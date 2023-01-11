// let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

// console.log("the largest countries in the world in terms of population are:")
// for (let i=0; i<largeCountries.length; i++) {
//     console.log("-" + largeCountries[i])
// }

// let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// largeCountries.pop()
// largeCountries.push("Pakistan")
// largeCountries.shift()
// largeCountries.unshift("China")
// console.log(largeCountries)

// rock paper scissor
let hands = ["rock", "paper", "scissor"]

function getHand() {
    let randomIndex = Math.floor(Math.random() * 3)
    return hands[randomIndex]
}