// Your code here
const characterBar = document.getElementById("character-bar");
const votesForm = document.getElementById("votes-form");
// const addCharacterForm = document.getElementById("character-form");
// const detailedInfo = document.getElementById("detailed-info");
// const characterInfo = document.getElementById("character-info");
const name = document.getElementById("name");
const image = document.getElementById("image");

votesForm.addEventListener ("click" , () => {
    e.preventDefault ()
    votesForm.innerText = target.value
     let currentCount = votesForm.innerText
     votesForm.innerText = parseInt(currentCount) + 1
} )

picture.addEventListener("mouseover", (e) => {
    e.preventDefault()
 

})
image.addEventListener('mouseout', () => {
   image.style.display = "none";


const request = async () => {
    let req = await fetch("http://localhost:3000/characters")
    let res = req.json ()
    // res.forEach ((animals)) , () => {

    // }
}}







request ()