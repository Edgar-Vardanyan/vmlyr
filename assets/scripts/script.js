let scrollPos = window.scrollY;
const header = document.querySelector(".main-header");
const header_height = header.offsetHeight;

const add_class_on_scroll = () => header.classList.add("header-scroll");
const remove_class_on_scroll = () => header.classList.remove("header-scroll");

window.addEventListener('scroll', function () {
    scrollPos = window.scrollY;

    if (scrollPos >= header_height) {
        add_class_on_scroll();
    } else {
        remove_class_on_scroll();
    }

});

function reveal() {
    let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);