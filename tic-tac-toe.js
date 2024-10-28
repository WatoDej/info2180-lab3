let newgame = document.getElementById('btn')

document.querySelectorAll("#board > div").forEach(div => div.classList.add("square")); //should cause all divs under board to have the id square now

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("#board > div").forEach(div => div.classList.add("square"));//for excercise 1 
});

let boardsquares = Array.from(document.getElementsByClassName('square'))