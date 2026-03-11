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
      slideItem.innerHTML = slide.outerHTML;
      track.appendChild(slideItem);
    });
    totalSlides = slides.length;
    currentSlide = 0;
    updateSlider();
  }
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


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map