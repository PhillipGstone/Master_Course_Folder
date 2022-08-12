function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`); // when trgating a class make sure to add . or will not work.
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
}

function removeTransition(event) {
    if (event.propertyName !== "transform") return;
    this.classList.remove("playing");
    
}
const keys = document.querySelectorAll(".key")
keys.forEach(key => key.addEventListener("transitionend", removeTransition))

window.addEventListener("keydown", playSound);

function clapAudio() {
    const audio = document.querySelector(`audio[data-key="65"]`);
    const key = document.querySelector(`.key[data-key="65"]`);
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
}
function hihatAudio() {
    const audio = document.querySelector(`audio[data-key="83"]`);
    const key = document.querySelector(`.key[data-key="83"]`);
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
}
function kickAudio() {
    const audio = document.querySelector(`audio[data-key="68"]`);
    const key = document.querySelector(`.key[data-key="68"]`);
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
}
function openhatAudio() {
    const audio = document.querySelector(`audio[data-key="70"]`);
    const key = document.querySelector(`.key[data-key="70"]`);
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
}
function boomAudio() {
    const audio = document.querySelector(`audio[data-key="71"]`);
    const key = document.querySelector(`.key[data-key="71"]`);
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
}
function rideAudio() {
    const audio = document.querySelector(`audio[data-key="72"]`);
    const key = document.querySelector(`.key[data-key="72"]`);
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
}
function snareAudio() {
    const audio = document.querySelector(`audio[data-key="74"]`);
    const key = document.querySelector(`.key[data-key="74"]`);
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
}
function tomAudio() {
    const audio = document.querySelector(`audio[data-key="75"]`);
    const key = document.querySelector(`.key[data-key="75"]`);
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
}
function tinkAudio() {
    const audio = document.querySelector(`audio[data-key="76"]`);
    const key = document.querySelector(`.key[data-key="76"]`);
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
}

function darkmodetoggle() {
    let element = document.body;  // Variable . Looking at the base and picking body.
    let mainbox = document.getElementsByClassName("main-box");
    let mainText = document.getElementsByClassName("main-text");
    let state = localStorage.getItem("state");

    element.classList.toggle("dark-mode"); // using Veribale then toggle what we called it on .html page. Don't forget to link it tho. 


    for (const box of mainbox) {
        box.classList.toggle("dark-mode-b");  
    }

    for (const text of mainText) {
        text.classList.toggle("dark-mode-b");
    }

    if (state !=="dark") {
        localStorage.setItem("state", "dark"); 
    } else {
        localStorage.setItem("state", "light"); 
    }
}

function darkCheck() {
    let element = document.body;  
    let mainbox = document.getElementsByClassName("main-box");
    let mainText = document.getElementsByClassName("main-text");
    let state = localStorage.getItem("state")

    if (state =="dark") {
        element.classList.toggle("dark-mode");  
    

        for (const box of mainbox) {
            box.classList.toggle("dark-mode-b");  
        }
    
        for (const text of mainText) {
            text.classList.toggle("dark-mode-b");
        }
    }
}
