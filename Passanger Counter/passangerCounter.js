let count = 0

// increment function
function increment() {
    count = count + 1
    document.getElementById("count-el").innerHTML = count
}

// save function
function save() {
    console.log(count)
}