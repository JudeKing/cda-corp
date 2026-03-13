import '../scss/style.scss';
import './carousel-modal';
import './testimonial-slider';
import './mobile-projects-nav';


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn-with-arrow a').forEach(btn => {
        btn.innerHTML += `
    <svg data-bbox="9 70.9 181 59" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        <g>
            <path d="M159 70.9l-2.2 2.4L183.6 99H9v3h174.6l-26.2 25.3 2.1 2.6 30.5-29.3-31-29.7z"></path>
        </g>
    </svg>`;
    });
})

