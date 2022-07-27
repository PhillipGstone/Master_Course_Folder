const submitBtn = document.getElementById("submitBtn")
const input = document.getElementById("toDoInput")
const list = document.getElementById("list")
const allListItems = document.querySelectorAll("li")
const removeBtn = document.getElementById("removeBtn")

submitBtn.addEventListener("click", () => {  // type in text box and click button to add to list.
    const listItem = document.createElement("li")
    listItem.textContent = input.value 
    list.appendChild(listItem)
})
allListItems.forEach((listItem) => {  // Click on a list item text to remove it.
    listItem.addEventListener("click", (event) => {  // "click" is the event the eventListener is listerning for.
        list.removeChild(event.target)
    })
});
removeBtn.addEventListener("click", () => {  // Buttom to remove last item.
    const lastLiItem = document.querySelector("li:last-child")
    list.removeChild(lastLiItem)
})
list.addEventListener("mouseover", (event) => {  // Mouse over event. Like Hover in CSS. 
    event.target.textContent = event.target.textContent.toUpperCase()
})
list.addEventListener("mouseout", (event) => {
    event.target.textContent = event.target.textContent.toLowerCase()
})

// Set Timeout. Click a button to show text then hide it again after a set time.
const surpriseBtn = document.getElementById("surpriseBtn")
const heading = document.getElementById("heading")

surpriseBtn.addEventListener("click", () => {
    heading.textContent = "SURPRISE!"
    setTimeout(() => {
        heading.textContent = ""
    }, 1050);
})

// My Pop-Up box. Hide and show a div Pop-Up box thing.
const closeBtn = document.getElementById("closeBtn")
const openBtn = document.getElementById("openBtn")

closeBtn.addEventListener("click", () => {
    closeBtn.parentNode.style.display = "none"
})
openBtn.addEventListener("click", () => {
    openBtn.previousElementSibling.style.display = "block"
})