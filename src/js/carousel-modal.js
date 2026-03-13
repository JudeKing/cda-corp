document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('cdaProjectModal');
    const track = document.getElementById('cdaProjectModalTrack');

    if (!modal || !track) return;

    const closeBtn = modal.querySelector('.cda-project-modal__close');
    const prevBtn = modal.querySelector('.cda-project-modal__nav--prev');
    const nextBtn = modal.querySelector('.cda-project-modal__nav--next');

    let currentSlide = 0;
    let totalSlides = 0;

    function updateSlider() {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
        const slides = track.querySelectorAll('.cda-project-modal__slide');

        slides.forEach((slide, index) => {
            slide.classList.toggle('is-active', index === currentSlide);
        });
    }

    function openModal() {
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('cda-project-modal-open');
    }

    function closeModal() {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('cda-project-modal-open');
        track.innerHTML = '';
        currentSlide = 0;
        totalSlides = 0;
    }

    function buildSlides(slides) {
        track.innerHTML = '';

        slides.forEach((slide) => {

            const slideItem = document.createElement('div');
            slideItem.className = 'cda-project-modal__slide';

            const slideClone = slide.cloneNode(true);

            const imageCol = slideClone.querySelector('.wp-block-column:first-child');

            if (imageCol) {

                const wrapper = document.createElement('div');
                wrapper.className = 'cda-slide-image-wrapper';

                const prev = document.createElement('button');
                prev.className = 'cda-testimonial-slider__arrow cda-testimonial-slider__arrow--prev';
                prev.type = 'button';
                prev.setAttribute('aria-label', 'Previous slide');
                prev.innerHTML = '<span></span>';

                const next = document.createElement('button');
                next.className = 'cda-testimonial-slider__arrow cda-testimonial-slider__arrow--next';
                next.type = 'button';
                next.setAttribute('aria-label', 'Next slide');
                next.innerHTML = '<span></span>';

                imageCol.parentNode.insertBefore(wrapper, imageCol);
                wrapper.appendChild(prev);
                wrapper.appendChild(imageCol);
                wrapper.appendChild(next);
            }

            slideItem.appendChild(slideClone);
            track.appendChild(slideItem);
        });

        totalSlides = slides.length;
        currentSlide = 0;
        updateSlider();
    }

    document.addEventListener('click', (e) => {

        if (e.target.closest('.project-slide .cda-testimonial-slider__arrow--next')) {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
        }

        if (e.target.closest('.project-slide .cda-testimonial-slider__arrow--prev')) {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlider();
        }

    });

    function openProjectFromPost(postEl) {
        const source = postEl.querySelector('.cda-project-source');
        if (!source) return;

        const temp = document.createElement('div');
        temp.innerHTML = source.innerHTML;

        const slides = temp.querySelectorAll('.wp-block-columns.project-slide');

        if (!slides.length) return;
        console.log(source)

        buildSlides([...slides]);
        openModal();
    }

    document.addEventListener('click', (e) => {
        const trigger = e.target.closest('.wp-block-post .wp-block-button__link, .wp-block-post .projects__project, .wp-block-post');
        if (!trigger) {console.log('not here');return};

        const postEl = trigger.closest('.wp-block-post');
        if (!postEl) return;

        e.preventDefault();
        openProjectFromPost(postEl);
        console.log(postEl);
    });

    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('is-open')) return;

        if (e.key === 'Escape') {
            closeModal();
        } else if (e.key === 'ArrowRight') {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
        } else if (e.key === 'ArrowLeft') {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlider();
        }
    });

    nextBtn?.addEventListener('click', () => {
        if (!totalSlides) return;
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    });

    prevBtn?.addEventListener('click', () => {
        if (!totalSlides) return;
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    });

    closeBtn?.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.querySelectorAll('.cda-project-modal__close').forEach(btn => {
        btn.innerHTML = '';
        btn.insertAdjacentHTML('beforeend', `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        <g>
            <path d="M60 60l80 80M140 60l-80 80"
                fill="none"
                stroke="currentColor"
                stroke-width="10"
                stroke-linecap="round"/>
        </g>
    </svg>
        `);

        btn.style.width = '4rem'
    });
});