/* JS for Insta Page */
const boxes = document.querySelectorAll(".box");
const search = document.querySelector('.search');
const butn = document.querySelector('.butn');
const input = document.querySelector('.input');

butn.addEventListener("click", () => { //search button becomes active upon clicks
    search.classList.toggle("active");
    input.focus();
})

window.addEventListener("scroll", checkBoxes);

checkBoxes();//scrolling animation

function checkBoxes() { //checks content box location in relation to point towards bottom of screen for scroll animation
    const triggerBottom = window.innerHeight / 5 * 4;//create trigger point

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;//grab top of box

        if(boxTop < triggerBottom) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    })
}

