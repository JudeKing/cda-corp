/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/carousel-modal.js"
/*!**********************************!*\
  !*** ./src/js/carousel-modal.js ***!
  \**********************************/
() {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
document.addEventListener('DOMContentLoaded', function () {
  var modal = document.getElementById('cdaProjectModal');
  var track = document.getElementById('cdaProjectModalTrack');
  if (!modal || !track) return;
  var closeBtn = modal.querySelector('.cda-project-modal__close');
  var prevBtn = modal.querySelector('.cda-project-modal__nav--prev');
  var nextBtn = modal.querySelector('.cda-project-modal__nav--next');
  var currentSlide = 0;
  var totalSlides = 0;
  function updateSlider() {
    track.style.transform = "translateX(-".concat(currentSlide * 100, "%)");
    var slides = track.querySelectorAll('.cda-project-modal__slide');
    slides.forEach(function (slide, index) {
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
    slides.forEach(function (slide) {
      var slideItem = document.createElement('div');
      slideItem.className = 'cda-project-modal__slide';
      var slideClone = slide.cloneNode(true);
      var imageCol = slideClone.querySelector('.wp-block-column:first-child');
      if (imageCol) {
        var wrapper = document.createElement('div');
        wrapper.className = 'cda-slide-image-wrapper';
        var prev = document.createElement('button');
        prev.className = 'cda-testimonial-slider__arrow cda-testimonial-slider__arrow--prev';
        prev.type = 'button';
        prev.setAttribute('aria-label', 'Previous slide');
        prev.innerHTML = '<span></span>';
        var next = document.createElement('button');
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
  document.addEventListener('click', function (e) {
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
    var source = postEl.querySelector('.cda-project-source');
    if (!source) return;
    var temp = document.createElement('div');
    temp.innerHTML = source.innerHTML;
    var slides = temp.querySelectorAll('.wp-block-columns.project-slide');
    if (!slides.length) return;
    console.log(source);
    buildSlides(_toConsumableArray(slides));
    openModal();
  }
  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('.wp-block-post .wp-block-button__link, .wp-block-post .projects__project, .wp-block-post');
    if (!trigger) {
      console.log('not here');
      return;
    }
    ;
    var postEl = trigger.closest('.wp-block-post');
    if (!postEl) return;
    e.preventDefault();
    openProjectFromPost(postEl);
    console.log(postEl);
  });
  document.addEventListener('keydown', function (e) {
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
  nextBtn === null || nextBtn === void 0 || nextBtn.addEventListener('click', function () {
    if (!totalSlides) return;
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  });
  prevBtn === null || prevBtn === void 0 || prevBtn.addEventListener('click', function () {
    if (!totalSlides) return;
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
  });
  closeBtn === null || closeBtn === void 0 || closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });
  document.querySelectorAll('.cda-project-modal__close').forEach(function (btn) {
    btn.innerHTML = '';
    btn.insertAdjacentHTML('beforeend', "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">\n        <g>\n            <path d=\"M60 60l80 80M140 60l-80 80\"\n                fill=\"none\"\n                stroke=\"currentColor\"\n                stroke-width=\"10\"\n                stroke-linecap=\"round\"/>\n        </g>\n    </svg>\n        ");
    btn.style.width = '4rem';
  });
});

/***/ },

/***/ "./src/js/mobile-projects-nav.js"
/*!***************************************!*\
  !*** ./src/js/mobile-projects-nav.js ***!
  \***************************************/
() {

document.addEventListener("DOMContentLoaded", function () {
  var buttonContainers = document.querySelectorAll(".projects__header-banner .wp-block-buttons");
  if (!buttonContainers.length) return;
  buttonContainers.forEach(function (container) {
    var links = container.querySelectorAll(".btn-with-arrow a");
    if (!links.length) return;
    var mobileNav = document.createElement("div");
    mobileNav.className = "mobile-service-nav";
    var toggleBtn = document.createElement("button");
    toggleBtn.className = "mobile-service-nav__toggle";
    toggleBtn.type = "button";
    toggleBtn.setAttribute("aria-expanded", "false");
    toggleBtn.innerHTML = "\n            <span>Browse Categories</span>\n            <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n                <path d=\"M6 9l6 6 6-6\"/>\n            </svg>\n        ";
    var panel = document.createElement("div");
    panel.className = "mobile-service-nav__panel";
    links.forEach(function (link) {
      var _link$childNodes$;
      var item = document.createElement("a");
      item.className = "mobile-service-nav__link";
      console.log(link);
      item.href = link.href;
      var linkText = ((_link$childNodes$ = link.childNodes[0]) === null || _link$childNodes$ === void 0 || (_link$childNodes$ = _link$childNodes$.textContent) === null || _link$childNodes$ === void 0 ? void 0 : _link$childNodes$.trim()) || link.textContent.trim();
      item.textContent = linkText;
      panel.appendChild(item);
    });
    toggleBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      document.querySelectorAll(".mobile-service-nav.is-open").forEach(function (openNav) {
        if (openNav !== mobileNav) {
          openNav.classList.remove("is-open");
          var openBtn = openNav.querySelector(".mobile-service-nav__toggle");
          if (openBtn) openBtn.setAttribute("aria-expanded", "false");
        }
      });
      var isOpen = mobileNav.classList.toggle("is-open");
      toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    mobileNav.appendChild(toggleBtn);
    mobileNav.appendChild(panel);
    container.parentNode.insertBefore(mobileNav, container);
  });
  document.addEventListener("click", function (e) {
    document.querySelectorAll(".mobile-service-nav.is-open").forEach(function (nav) {
      if (!nav.contains(e.target)) {
        nav.classList.remove("is-open");
        var btn = nav.querySelector(".mobile-service-nav__toggle");
        if (btn) btn.setAttribute("aria-expanded", "false");
      }
    });
  });
});

/***/ },

/***/ "./src/js/testimonial-slider.js"
/*!**************************************!*\
  !*** ./src/js/testimonial-slider.js ***!
  \**************************************/
() {

document.addEventListener('DOMContentLoaded', function () {
  var slider = document.getElementById('cda-testimonial-slider');
  console.log(slider);
  if (!slider) return;
  var slides = slider.querySelectorAll('.cda-testimonial-slider__slide');
  var dots = slider.querySelectorAll('.cda-testimonial-slider__dot');
  var prevBtn = slider.querySelector('.cda-testimonial-slider__arrow--prev');
  var nextBtn = slider.querySelector('.cda-testimonial-slider__arrow--next');
  var current = 0;
  var timer = null;
  var autoplay = slider.dataset.autoplay === 'true';
  var interval = parseInt(slider.dataset.interval, 10) || 5000;
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
  dots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      goToSlide(parseInt(this.dataset.index, 10));
      startAutoplay();
    });
  });
  slider.addEventListener('mouseenter', stopAutoplay);
  slider.addEventListener('mouseleave', startAutoplay);
  startAutoplay();
});

/***/ },

/***/ "./src/scss/style.scss"
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _carousel_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel-modal */ "./src/js/carousel-modal.js");
/* harmony import */ var _carousel_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_carousel_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _testimonial_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./testimonial-slider */ "./src/js/testimonial-slider.js");
/* harmony import */ var _testimonial_slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_testimonial_slider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mobile_projects_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobile-projects-nav */ "./src/js/mobile-projects-nav.js");
/* harmony import */ var _mobile_projects_nav__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mobile_projects_nav__WEBPACK_IMPORTED_MODULE_3__);




document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.btn-with-arrow a').forEach(function (btn) {
    btn.innerHTML += "\n    <svg data-bbox=\"9 70.9 181 59\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">\n        <g>\n            <path d=\"M159 70.9l-2.2 2.4L183.6 99H9v3h174.6l-26.2 25.3 2.1 2.6 30.5-29.3-31-29.7z\"></path>\n        </g>\n    </svg>";
  });
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map