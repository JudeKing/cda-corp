
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('cda-testimonial-slider');
    console.log(slider)
    if (!slider) return;

    const slides = slider.querySelectorAll('.cda-testimonial-slider__slide');
    const dots = slider.querySelectorAll('.cda-testimonial-slider__dot');
    const prevBtn = slider.querySelector('.cda-testimonial-slider__arrow--prev');
    const nextBtn = slider.querySelector('.cda-testimonial-slider__arrow--next');

    let current = 0;
    let timer = null;
    const autoplay = slider.dataset.autoplay === 'true';
    const interval = parseInt(slider.dataset.interval, 10) || 5000;

    function goToSlide(index) {
        slides[current].classList.remove('is-active');
        if (dots[current]) dots[current].classList.remove('is-active');

        current = (index + slides.length) % slides.length;

        slides[current].classList.add('is-active');
        if (dots[current]) dots[current].classList.add('is-active');
    }

    function nextSlide() {
        goToSlide(current + 1);
    }

    function prevSlide() {
        goToSlide(current - 1);
    }

    function startAutoplay() {
        if (!autoplay || slides.length < 2) return;
        stopAutoplay();
        timer = setInterval(nextSlide, interval);
    }

    function stopAutoplay() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function () {
            nextSlide();
            startAutoplay();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function () {
            prevSlide();
            startAutoplay();
        });
    }

    dots.forEach(dot => {
        dot.addEventListener('click', function () {
            goToSlide(parseInt(this.dataset.index, 10));
            startAutoplay();
        });
    });

    slider.addEventListener('mouseenter', stopAutoplay);
    slider.addEventListener('mouseleave', startAutoplay);

    startAutoplay();
});