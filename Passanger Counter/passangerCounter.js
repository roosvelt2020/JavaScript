let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

// increment function
function increment() {
    count = count + 1
    countEl.textContent = count
}

// save function
function save() {
    let countstr = count + " - "
    //textContent is used rather than innerText because, it shows even elements that are non human readable, like spaces
    saveEl.innerText = saveEl.textContent + countstr
    console.log(count)
}