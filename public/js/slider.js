const slider = document.querySelector("section.products-banner .anim-slider");
const slide = document.querySelectorAll("section.products-banner .slide");

// button
const prevBtn = document.querySelector(".slider-wrap .anim-arrows a.prev");
const nextBtn = document.querySelector(".slider-wrap .anim-arrows a.next");

let counter = 1;
const size = slide[0].clientWidth;


// button listener
nextBtn.addEventListener('click', () => {
    event.preventDefault();

});