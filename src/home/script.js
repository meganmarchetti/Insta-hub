// JS for home page
const search = document.querySelector(".search");
const butn = document.querySelector(".butn");
const input = document.querySelector(".input");
const contents = document.querySelectorAll(".content");
const counters = document.querySelectorAll(".counter");
const followers = document.getElementById("ctr");

butn.addEventListener("click", () => { //search button becomes active upon clicks
    search.classList.toggle("active");
    input.focus();
})

window.addEventListener("scroll", checkBoxes);

checkBoxes();//scrolling animation

function checkBoxes() { //checks content box location in relation to point towards bottom of screen for scroll animation
    const triggerBottom = window.innerHeight / 5 * 4;//create trigger point

    contents.forEach(content => {
        const contentTop = content.getBoundingClientRect().top;//grab top of box

        if(contentTop < triggerBottom) {
            content.classList.add("show");
        } else {
            content.classList.remove("show");
        }
    })
}



counters.forEach(counter => { //counter increment animation
    counter.innerText = "0";

    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const c = +counter.innerText;

        const increment = target / 200;

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
    }

    updateCounter();
})


