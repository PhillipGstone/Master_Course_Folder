document.getElementById("listWrapper") // Document where to look like the document is all not just one page. getElementById to search for a spicithic ID #

document.querySelector("listItem") // Returns the first element that matches the specified selector. All examples select the same element. Item 1
document.querySelector("listWrapper li:nth-child(1)") // nth not zero index
document.querySelector("li")

document.getElementsByTagName("li")  // Returns a collection of elements with the specified tag name. Returns a collection even if it only finds 1 element. Item 1 - 4

document.getElementsByClassName("listItems")[2] // Pick a certern element within a collection of elements. Item 3

// Looping though element. Select multiple Items and change the colour of them in JS though a for loop.
const listItems = document.getElementsByTagName("li")
for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.color = "blue"
}
// or
const listItemss = document.querySelectorAll(".listItems")

for (let i = 0; i < listItemss.length; i++) {
    listItemss[i].style.color = "blue"
}

// Click event Example. Click anywhere to change the header.
const header = document.getElementById("headingB")

document.addEventListener("click", () => {
    header.textContent = "It's Changed!"
})

// Sets or returns the HTML content of the specified element.
const list = document.getElementById("listWrapperC")

list.innerHTML = "<li>New List Item</li>" // use innerHTML to make it work just like in HTML or you'd see the <li> tags.

// Using .style gives you access to all CSS properties. properties must be typed using camelCase in JS.
const headerD = document.getElementById("headingD")
const listD = document.querySelector("ul")
const listItemsD = document.getElementsByClassName("listItemD")

headerD.style.border = "3px solid green"
listD.style.backgroundColor = "yellow";
listItemsD[1].style.display= "none";

// This method adds a function that will be called when the specified event is triggered.
const mainHead = document.getElementById("mainHeading")

mainHead.addEventListener("mouseover", () => {
    mainHead.textContent = mainHead.textContent.toUpperCase()
})
mainHead.addEventListener("mouseout", () => {
    mainHead.textContent = mainHead.textContent.toLowerCase()
})

// You can get the text typed in an input box by using the value property
const boxHeading = document.getElementById("boxHeading")
const input = document.getElementById("inputBox")
const submitbtn = document.getElementById("submit")

submitbtn.addEventListener("click", () => {
    boxHeading.textContent = input.value 
})


const image = document.getElementById("myImage")
const btn = document.getElementById("pictureButton")

// image.src = "images/image2.jpg"

// btn.addEventListener("click", () => {
//     image.src = "images/image2.jpg"
// })

let counter = 0
function diffPic() {
    if (counter == 0){
    btn.addEventListener("click", () => {
        image.src = "images/image2.png"
    })
    counter = 1
    } else {
    btn.addEventListener("click", () => {
        image.src = "images/image1.png"
    })
    counter = 0
    }
}

document.addEventListener("click", (event) => {
    console.log(event)
    console.log(event.target)
})

const thePic = document.getElementById("thePicture")
const inputBox = document.getElementById("inputBoxB")
const submitbutton = document.getElementById("submitButton")

submitbutton.addEventListener("click", () => {
    image.src = inputBox.value 
})


const colourChange = document.getElementById("colourChange")
const inputBoxC = document.getElementById("inputBoxC")
const subbtn = document.getElementById("theSubmitButton")

subbtn.addEventListener("click", () => {
    colourChange.style.color = inputBoxC.value
}) 
