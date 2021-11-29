// JS for contact page
const search = document.querySelector(".search");
const butn = document.querySelector(".butn");
const input = document.querySelector(".input");



butn.addEventListener("click", () => { //search button becomes active upon clicks
    search.classList.toggle("active");
    input.focus();
})



