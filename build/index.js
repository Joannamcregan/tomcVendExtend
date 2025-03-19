/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/AddProductExtension.js":
/*!********************************************!*\
  !*** ./src/modules/AddProductExtension.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

class AddProductExtension {
  constructor() {
    this.mvxSubmit = jquery__WEBPACK_IMPORTED_MODULE_0___default()('input#mvx_frontend_dashboard_product_submit');
    this.titleInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()('input#post_title');
    this.productDescription = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tinymce p');
    this.scheduleSaleButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sale_schedule");
    this.regularPrice = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#_regular_price');
    this.salePrice = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#_sale_price');
    this.manageStockCheckbox = jquery__WEBPACK_IMPORTED_MODULE_0___default()('input#_manage_stock');
    this.stockFieldGroup = jquery__WEBPACK_IMPORTED_MODULE_0___default()('div.stock_fields');
    this.stockInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()('input#_stock');
    this.gtinInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="_mvx_gtin_code"]');
    this.productTitleSection = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.product-title-wrap');
    this.virtualCheckbox = jquery__WEBPACK_IMPORTED_MODULE_0___default()('input#_virtual');
    this.downloadableCheckbox = jquery__WEBPACK_IMPORTED_MODULE_0___default()('input#_downloadable');
    this.serviceCatCheckbox = jquery__WEBPACK_IMPORTED_MODULE_0___default()('ul.product_cat input[value=53]'); //53 for dev, somehow also 53 for prod
    this.paperbackCatCheckbox = jquery__WEBPACK_IMPORTED_MODULE_0___default()('ul.product_cat input[value=52]'); //60 for dev, 52 for prod
    this.hardcoverCatCheckbox = jquery__WEBPACK_IMPORTED_MODULE_0___default()('ul.product_cat input[value=51]'); //59 for dev, 51 for prod
    this.ebookCatCheckbox = jquery__WEBPACK_IMPORTED_MODULE_0___default()('ul.product_cat input[value=49]'); //51 for dev, 49 for prod
    this.audiobookCatCheckbox = jquery__WEBPACK_IMPORTED_MODULE_0___default()('ul.product_cat input[value=50]'); //52 for dev, 50 for prod
    this.uncategorizedCatCheckbox = jquery__WEBPACK_IMPORTED_MODULE_0___default()('ul.product_cat input[value=16]'); //16 for dev, somehow also 16 for prod
    this.catCheckboxes = jquery__WEBPACK_IMPORTED_MODULE_0___default()('ul.product_cat input[type=checkbox]');
    this.taxStatusDropdown = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#_tax_status');
    this.taxClassDropdown = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#_tax_class');
    this.events();
    this.taxClass = '';
  }
  events() {
    this.scheduleSaleButton.on('click', this.checkSalesPrices.bind(this));
    this.gtinInput.on('focusout', this.checkIsbn.bind(this));
    this.regularPrice.on('focusout', this.checkPrices.bind(this));
    this.downloadableCheckbox.on('change', this.updateCheckboxesDownloadable.bind(this));
    this.virtualCheckbox.on('change', this.updateCheckboxesVirtual.bind(this));
    this.serviceCatCheckbox.on('change', this.updateCheckboxesService.bind(this));
    this.paperbackCatCheckbox.on('change', this.updateCheckboxesPaperback.bind(this));
    this.hardcoverCatCheckbox.on('change', this.updateCheckboxesHardcover.bind(this));
    this.ebookCatCheckbox.on('change', this.updateCheckboxesEbook.bind(this));
    this.audiobookCatCheckbox.on('change', this.updateCheckboxesAudiobook.bind(this));
    this.mvxSubmit.on('click', this.showWaitMessage.bind(this));
  }
  showWaitMessage() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-mvx--add-product-wait-message').css('display', 'block');
  }
  updateCheckboxesService() {
    if (this.serviceCatCheckbox.is(":checked")) {
      this.virtualCheckbox.prop('checked', true);
      this.downloadableCheckbox.prop('checked', false);
      this.paperbackCatCheckbox.prop('checked', false);
      this.hardcoverCatCheckbox.prop('checked', false);
      this.uncategorizedCatCheckbox.prop('checked', false);
      this.ebookCatCheckbox.prop('checked', false);
      this.audiobookCatCheckbox.prop('checked', false);
      if (this.productDescription.text() == '') {
        alert('Give your service a description.');
      }
    } else {
      this.virtualCheckbox.prop('checked', false);
    }
  }
  updateCheckboxesHardcover() {
    if (this.hardcoverCatCheckbox.is(":checked")) {
      this.virtualCheckbox.prop('checked', false);
      this.downloadableCheckbox.prop('checked', false);
      this.paperbackCatCheckbox.prop('checked', false);
      this.uncategorizedCatCheckbox.prop('checked', false);
      this.ebookCatCheckbox.prop('checked', false);
      this.audiobookCatCheckbox.prop('checked', false);
      this.manageStockCheckbox.prop('checked', true);
      this.stockFieldGroup.css('display', 'block');
      if (this.stockInput.val() == '' || Number(this.stockInput.val()) == 0 || isNaN(this.stockInput.val())) {
        alert('Enter the number of paperbacks you have ready to ship in the Stock field on the Inventory tab.');
        this.stockInput.val(0);
      }
    } else {
      this.manageStockCheckbox.prop('checked', false);
      this.stockFieldGroup.css('display', 'none');
    }
  }
  updateCheckboxesPaperback() {
    if (this.paperbackCatCheckbox.is(":checked")) {
      this.virtualCheckbox.prop('checked', false);
      this.downloadableCheckbox.prop('checked', false);
      this.hardcoverCatCheckbox.prop('checked', false);
      this.uncategorizedCatCheckbox.prop('checked', false);
      this.ebookCatCheckbox.prop('checked', false);
      this.audiobookCatCheckbox.prop('checked', false);
      this.manageStockCheckbox.prop('checked', true);
      this.stockFieldGroup.css('display', 'block');
      if (this.stockInput.val() == '' || Number(this.stockInput.val()) == 0 || isNaN(this.stockInput.val())) {
        alert('Enter the number of paperbacks you have ready to ship in the Stock field on the Inventory tab.');
        this.stockInput.val(0);
      }
    } else {
      this.manageStockCheckbox.prop('checked', false);
      this.stockFieldGroup.css('display', 'none');
    }
  }
  updateCheckboxesEbook() {
    if (this.ebookCatCheckbox.is(":checked")) {
      this.virtualCheckbox.prop('checked', false);
      this.downloadableCheckbox.prop('checked', true);
      this.paperbackCatCheckbox.prop('checked', false);
      this.hardcoverCatCheckbox.prop('checked', false);
      this.uncategorizedCatCheckbox.prop('checked', false);
      this.serviceCatCheckbox.prop('checked', false);
      this.audiobookCatCheckbox.prop('checked', false);
    } else {
      this.downloadableCheckbox.prop('checked', false);
    }
  }
  updateCheckboxesAudiobook() {
    if (this.audiobookCatCheckbox.is(":checked")) {
      this.virtualCheckbox.prop('checked', false);
      this.downloadableCheckbox.prop('checked', true);
      this.paperbackCatCheckbox.prop('checked', false);
      this.hardcoverCatCheckbox.prop('checked', false);
      this.uncategorizedCatCheckbox.prop('checked', false);
      this.serviceCatCheckbox.prop('checked', false);
      this.ebookCatCheckbox.prop('checked', false);
    } else {
      this.downloadableCheckbox.prop('checked', false);
    }
  }
  updateCheckboxesDownloadable() {
    if (this.downloadableCheckbox.is(":checked")) {
      this.virtualCheckbox.prop('checked', false);
      this.serviceCatCheckbox.prop('checked', false);
      this.paperbackCatCheckbox.prop('checked', false);
      this.hardcoverCatCheckbox.prop('checked', false);
      this.uncategorizedCatCheckbox.prop('checked', false);
      this.taxClass = 'digital-and-virtual-products';
      this.taxClassDropdown.val('digital-and-virtual-products');
      console.log(this.taxClass);
    } else {
      this.ebookCatCheckbox.prop('checked', false);
      this.audiobookCatCheckbox.prop('checked', false);
    }
  }
  updateCheckboxesVirtual() {
    if (this.virtualCheckbox.is(":checked")) {
      this.downloadableCheckbox.prop('checked', false);
      this.serviceCatCheckbox.prop('checked', true);
      this.paperbackCatCheckbox.prop('checked', false);
      this.hardcoverCatCheckbox.prop('checked', false);
      this.uncategorizedCatCheckbox.prop('checked', false);
      this.ebookCatCheckbox.prop('checked', false);
      this.audiobookCatCheckbox.prop('checked', false);
      if (this.productDescription.text() == '') {
        alert('Give your service a description.');
      }
    } else {
      this.serviceCatCheckbox.prop('checked', false);
    }
  }
  checkPrices() {
    if (this.regularPrice.val() === '') {
      alert('Be sure to enter a price.');
    } else if (isNaN(this.regularPrice.val())) {
      alert("Your product's price must be a number.");
      this.regularPrice.val('');
    } else if (Number(this.regularPrice.val()) > 50 && !this.virtualCheckbox.is(":checked")) {
      alert('You set the price at $' + this.regularPrice.val() + ". Make sure that's the right amount before proceeding.");
    }
  }
  checkSalesPrices() {
    if (this.regularPrice.val() === '' || this.salePrice.val() === '') {
      alert('To schedule a sale, enter a value for the regular price and sale price.');
    }
    if (Number(this.salePrice.val()) >= Number(this.regularPrice.val())) {
      alert('Make sure your sale price is less than the regular price.');
    }
  }
  checkIsbn() {
    let isbnEntered = this.gtinInput.val();
    if (isbnEntered != '') {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        beforeSend: xhr => {
          xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
        },
        url: tomcBookorgData.root_url + '/wp-json/tomcMVXtend/v1/checkIfAssigned',
        type: 'GET',
        data: {
          'ISBNEntered': Number(isbnEntered)
        },
        success: response => {
          if (response > 0) {
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-vendxtend--dupliacteISBNError').length < 1) {
              let alertMessage = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<p />').attr('id', 'tomc-vendxtend--dupliacteISBNError');
              this.productTitleSection.append(alertMessage);
            }
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-vendxtend--dupliacteISBNError').html('Our records show that the ISBN you entered, ' + response + ', is already registered to an existing product.');
            this.gtinInput.val('');
          } else {
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-vendxtend--dupliacteISBNError').length < 1) {
              let alertMessage = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<p />').attr('id', 'tomc-vendxtend--dupliacteISBNError');
              this.productTitleSection.append(alertMessage);
            }
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-vendxtend--dupliacteISBNError').html('');
          }
        },
        failure: response => {
          // console.log(response);
        }
      });
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddProductExtension);

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

module.exports = window["jQuery"];

/***/ })

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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_AddProductExtension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/AddProductExtension */ "./src/modules/AddProductExtension.js");

const tomcAddProductExtension = new _modules_AddProductExtension__WEBPACK_IMPORTED_MODULE_0__["default"]();
})();

/******/ })()
;
//# sourceMappingURL=index.js.map