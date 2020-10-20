class App {
    constructor() {
        this.indexSlide = 0;
        this.slides = document.querySelectorAll("section#banner .caption .slide");
        // slider banner main
        this.slideWP();
        // mobile menu responsive
        this.mobileMenu();
        // slider banner product
        this.slideProducts();
        // effect click cursor
    }

    slideWP() {
        this.hoverScallImg();
        this.slideAction();
        this.autoSlide();
    }

    hoverScallImg() {
        let imgMoving = document.querySelectorAll(".moving");
        imgMoving.forEach(nodeItem => nodeItem.addEventListener('mousemove', this.animateIt));
        imgMoving.forEach(nodeItem => nodeItem.addEventListener('mouseleave', this.animateIt));
        // window.addEventListener('mousemove', this.editPositionCursor);
    }

    animateIt(e) {
        let { offsetX: x, offsetY: y } = e, { offsetWidth: width, offsetHeight: height } = this;
        let move = 50;
        let xMove = x / width * (move * 2) - move;
        let yMove = y / height * (move * 2) - move;
        let cursor = document.querySelector(".cursor");
        e.target.style.transform = `translate(${ xMove }px, ${ yMove }px`;
        if (e.type === 'mouseleave') {
            e.target.style.transform = '';
        }
    }

    slideAction() {
        let btnNext = document.querySelector(".controlsSlider .next");
        let btnPrev = document.querySelector(".controlsSlider .prev");
        btnNext.addEventListener('click', () => { this.nextSlide() });
        btnPrev.addEventListener('click', () => { this.prevSlide() });
    }
    nextSlide() {
        if (this.indexSlide === this.slides.length - 1) {
            this.indexSlide = 0;
        } else {
            this.indexSlide++;
        }
        this.changeSlide();
    }
    prevSlide() {
        if (this.indexSlide === 0) {
            this.indexSlide = this.slides.length - 1;
        } else {
            this.indexSlide--;
        }
        this.changeSlide();
    }
    changeSlide() {
        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].classList.remove('active');
        }
        this.slides[this.indexSlide].classList.add('active');
    }
    autoSlide() {
        let btnNext = document.querySelector(".controlsSlider .next");
        setTimeout(() => {
            btnNext.click();
        }, 10000);
    }

    mobileMenu() {
        let menuEl = document.querySelector(".mobile-site");
        let btnToggle = document.querySelector(".btn-icon");
        let widthOfMenuMobile = menuEl.clientWidth;
        let timer = document.querySelector(".hot-count-down-time");
        btnToggle.addEventListener('click', () => {
            menuEl.classList.toggle('open');
            if (menuEl.classList.contains('open')) {
                menuEl.style.transform = `translateX(0)`;
                btnToggle.classList.remove('open-act');
                btnToggle.classList.add('close-act');
                timer.style.display = 'none';
            } else {
                menuEl.style.transform = `translateX(${-1 * widthOfMenuMobile}px)`;
                btnToggle.classList.remove('close-act');
                btnToggle.classList.add('open-act');
                timer.style.display = 'block';
            }
        });
    }

    slideProducts() {
        let prevBtn = document.querySelector(".slider-wrap .anim-arrows a.prev");
        let nextBtn = document.querySelector(".slider-wrap .anim-arrows a.next");
        let slide = document.querySelectorAll("section.products-banner .slide");
        let index = 0;
        nextBtn.addEventListener('click', () => {
            event.preventDefault();
            if (index >= slide.length - 1) {
                index = 0;
            } else {
                index++;
            }
            this.actionSlideProd(index);
        });
        prevBtn.addEventListener('click', () => {
            event.preventDefault();
            if (index <= 0) {
                index = slide.length - 1;
            } else {
                index--;
            }
            this.actionSlideProd(index);
        });
    }

    actionSlideProd(index) {
        let slide = document.querySelectorAll("section.products-banner .slide");
        slide.forEach(item => {
            item.classList.remove('active')
            item.children[0].classList.remove('slideOutLeft');
            item.children[0].classList.remove('slideInRight');
        });
        let indexNext = null;
        if (indexNext <= 0) {
            indexNext = slide.length - 1
        } else {
            indexNext = index - 1;
        }
        slide[index].classList.add('active');
        slide[indexNext].children[0].classList.add('slideOutLeft');
        slide[index].children[0].classList.add('slideInRight');
    }
}

var app = new App();