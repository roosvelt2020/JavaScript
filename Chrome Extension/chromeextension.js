// function saveLead() {
//     document.write("Button Clicked. YOU CAN NOW MAKE A GAME")
// }
// commented out above because using 
// addEventListiner in js file is more professional
// than using onclick in the html file

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        //below is syntax for template strings. its necessary because you can then break it into several lines for readability
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
    `
        // another way to do the above line
        // create element
        // set text content
        // append to ul
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
   }
   ulEl.innerHTML = listItems
}