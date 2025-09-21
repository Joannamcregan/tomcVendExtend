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
    this.paperbackCatCheckbox = jquery__WEBPACK_IMPORTED_MODULE_0___default()('ul.product_cat input[value=52]'); //51 for dev, 52 for prod
    this.hardcoverCatCheckbox = jquery__WEBPACK_IMPORTED_MODULE_0___default()('ul.product_cat input[value=51]'); //50 for dev, 51 for prod
    this.ebookCatCheckbox = jquery__WEBPACK_IMPORTED_MODULE_0___default()('ul.product_cat input[value=49]'); //51 for dev, 49 for prod
    this.audiobookCatCheckbox = jquery__WEBPACK_IMPORTED_MODULE_0___default()('ul.product_cat input[value=50]'); //49 for dev, 50 for prod
    this.physicalZineCheckbox = jquery__WEBPACK_IMPORTED_MODULE_0___default()('ul.product_cat input[value=76]');
    this.digitalZineCheckbox = jquery__WEBPACK_IMPORTED_MODULE_0___default()('ul.product_cat input[value=75]');
    this.uncategorizedCatCheckbox = jquery__WEBPACK_IMPORTED_MODULE_0___default()('ul.product_cat input[value=16]'); //16 for dev, somehow also 16 for prod
    this.catCheckboxes = jquery__WEBPACK_IMPORTED_MODULE_0___default()('ul.product_cat input[type=checkbox]');
    this.taxStatusDropdown = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#_tax_status');
    this.taxClassDropdown = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#_tax_class');
    this.titleInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()('span.editing-content > input#post_title');
    this.downloadableDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()('div.show_if_downloadable');
    this.couponTitle = jquery__WEBPACK_IMPORTED_MODULE_0___default()('div.coupon-primary-info input#post_title');
    this.weightField = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#shipping_product_data input#_weight');
    this.perProductInsert = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#shipping_product_data a.insert');
    this.events();
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
    this.physicalZineCheckbox.on('change', this.updateCheckboxesPhysicalZine.bind(this));
    this.digitalZineCheckbox.on('change', this.updateCheckboxesDigitalZine.bind(this));
    this.mvxSubmit.on('click', this.showWaitMessage.bind(this));
    this.taxStatusDropdown.on('change', this.resetTaxStatus.bind(this));
    this.taxClassDropdown.on('change', this.resetTaxClass.bind(this));
    this.titleInput.on('click', this.setTaxInfo.bind(this));
    this.couponTitle.on('change', this.styleDashboardCouponOptions.bind(this));
    this.weightField.on('change', this.addShippingByWeight.bind(this));
  }
  addShippingByWeight(e) {
    console.log('the weight changed to ' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).val());
    let perProductCost = jquery__WEBPACK_IMPORTED_MODULE_0___default()('td.item_cost input:visible');
    let weight = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).val());
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#shipping_product_data i.ico-delete-icon').trigger('click');
    this.perProductInsert.trigger('click');
    if (weight <= 1) {
      perProductCost.val(4.47);
      perProductCost.attr("placeholder", "4.47");
    } else if (weight <= 2) {
      perProductCost.val("5.22");
      perProductCost.attr("placeholder", "5.22");
    } else if (weight <= 3) {
      perProductCost.val("5.97");
      perProductCost.attr("placeholder", "5.97");
    } else if (weight <= 4) {
      perProductCost.val("6.72");
      perProductCost.attr("placeholder", "6.72");
    } else if (weight <= 5) {
      perProductCost.val("7.47");
      perProductCost.attr("placeholder", "7.47");
    } else if (weight <= 6) {
      perProductCost.val("8.22");
      perProductCost.attr("placeholder", "8.22");
    } else if (weight <= 7) {
      perProductCost.val("8.97");
      perProductCost.attr("placeholder", "8.97");
    } else if (weight <= 8) {
      perProductCost.val("9.72");
      perProductCost.attr("placeholder", "9.72");
    } else if (weight <= 9) {
      perProductCost.val("10.47");
      perProductCost.attr("placeholder", "10.47");
    } else if (weight <= 10) {
      perProductCost.val("11.22");
      perProductCost.attr("placeholder", "11.22");
    } else if (weight <= 11) {
      perProductCost.val("11.97");
      perProductCost.attr("placeholder", "11.97");
    } else if (weight <= 12) {
      perProductCost.val("12.72");
      perProductCost.attr("placeholder", "12.72");
    } else if (weight <= 13) {
      perProductCost.val("13.47");
      perProductCost.attr("placeholder", "13.47");
    } else if (weight <= 14) {
      perProductCost.val("14.22");
      perProductCost.attr("placeholder", "14.22");
    } else if (weight <= 15) {
      perProductCost.val("14.97");
      perProductCost.attr("placeholder", "14.97");
    } else {
      alert('More than 15 lbs? Visit https://www.usps.com/ship/mail-shipping-services.htm#mediamail for rate info.');
    }
  }
  styleDashboardCouponOptions() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('option[value="fixed_product"]').prop('selected', 'selected');
  }
  setTaxInfo() {
    if (this.downloadableCheckbox.is(":checked")) {
      this.taxClassDropdown.val('digital-books-10302000');
    } else if (this.virtualCheckbox.is(":checked")) {
      this.taxClassDropdown.val('services-20030000');
    } else {
      this.taxClassDropdown.val('physical-books-35010000');
    }
    this.taxStatusDropdown.val('taxable');
  }
  resetTaxClass() {
    if (this.downloadableCheckbox.is(":checked")) {
      if (this.audiobookCatCheckbox.is(":checked")) {
        this.taxClassDropdown.val('audiobooks-10301000');
      } else {
        this.taxClassDropdown.val('digital-books-10302000');
      }
    } else if (this.virtualCheckbox.is(":checked")) {
      this.taxClassDropdown.val('services-20030000');
    } else {
      this.taxClassDropdown.val('physical-books-35010000');
    }
    alert('Tax class is determined by product type.');
  }
  resetTaxStatus() {
    this.taxStatusDropdown.val('taxable');
    alert('Tax status must be set to Taxable.');
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
      this.taxClassDropdown.val('services-20030000');
      this.taxStatusDropdown.val('taxable');
      this.digitalZineCheckbox.prop('checked', false);
      this.physicalZineCheckbox.prop('checked', false);
      this.downloadableDiv.removeClass('block');
      this.downloadableDiv.attr('style', 'display: none');
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
      this.taxClassDropdown.val('physical-books-35010000');
      this.taxStatusDropdown.val('taxable');
      this.digitalZineCheckbox.prop('checked', false);
      this.physicalZineCheckbox.prop('checked', false);
      this.downloadableDiv.removeClass('block');
      this.downloadableDiv.attr('style', 'display: none');
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
      this.taxClassDropdown.val('physical-books-35010000');
      this.taxStatusDropdown.val('taxable');
      this.digitalZineCheckbox.prop('checked', false);
      this.physicalZineCheckbox.prop('checked', false);
      this.downloadableDiv.removeClass('block');
      this.downloadableDiv.attr('style', 'display: none');
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
      this.taxClassDropdown.val('digital-books-10302000');
      this.taxStatusDropdown.val('taxable');
      this.digitalZineCheckbox.prop('checked', false);
      this.physicalZineCheckbox.prop('checked', false);
      this.downloadableDiv.addClass('block');
      this.downloadableDiv.attr('style', 'display: block');
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('td.file_url_choose').length < 1) {
        alert('Click the Add File button and add your ebook file.');
      } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('td.file_url > input').val() == '') {
        alert('Add your ebook file.');
      }
    } else {
      this.downloadableCheckbox.prop('checked', false);
    }
  }
  updateCheckboxesDigitalZine() {
    if (this.digitalZineCheckbox.is(":checked")) {
      this.virtualCheckbox.prop('checked', false);
      this.downloadableCheckbox.prop('checked', true);
      this.paperbackCatCheckbox.prop('checked', false);
      this.hardcoverCatCheckbox.prop('checked', false);
      this.uncategorizedCatCheckbox.prop('checked', false);
      this.serviceCatCheckbox.prop('checked', false);
      this.audiobookCatCheckbox.prop('checked', false);
      this.taxClassDropdown.val('digital-books-10302000');
      this.taxStatusDropdown.val('taxable');
      this.physicalZineCheckbox.prop('checked', false);
      this.ebookCatCheckbox.prop('checked', false);
      this.downloadableDiv.addClass('block');
      this.downloadableDiv.attr('style', 'display: block');
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('td.file_url_choose').length < 1) {
        alert('Click the Add File button and add your digital zine file.');
      } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('td.file_url > input').val() == '') {
        alert('Add your digital zine file.');
      }
    } else {
      this.downloadableCheckbox.prop('checked', false);
    }
  }
  updateCheckboxesPhysicalZine() {
    if (this.physicalZineCheckbox.is(":checked")) {
      this.virtualCheckbox.prop('checked', false);
      this.downloadableCheckbox.prop('checked', false);
      this.hardcoverCatCheckbox.prop('checked', false);
      this.uncategorizedCatCheckbox.prop('checked', false);
      this.ebookCatCheckbox.prop('checked', false);
      this.audiobookCatCheckbox.prop('checked', false);
      this.manageStockCheckbox.prop('checked', true);
      this.stockFieldGroup.css('display', 'block');
      if (this.stockInput.val() == '' || Number(this.stockInput.val()) == 0 || isNaN(this.stockInput.val())) {
        alert('Enter the number of zines you have ready to ship in the Stock field on the Inventory tab.');
        this.stockInput.val(0);
      }
      this.taxClassDropdown.val('physical-books-35010000');
      this.taxStatusDropdown.val('taxable');
      this.paperbackCatCheckbox.prop('checked', false);
      this.digitalZineCheckbox.prop('checked', false);
      this.downloadableDiv.removeClass('block');
      this.downloadableDiv.attr('style', 'display: none');
    } else {
      this.manageStockCheckbox.prop('checked', false);
      this.stockFieldGroup.css('display', 'none');
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
      this.taxClassDropdown.val('audiobooks-10301000');
      this.taxStatusDropdown.val('taxable');
      this.digitalZineCheckbox.prop('checked', false);
      this.physicalZineCheckbox.prop('checked', false);
      this.downloadableDiv.addClass('block');
      this.downloadableDiv.attr('style', 'display: block');
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('td.file_url_choose').length < 1) {
        alert('Click the Add File button and add your audiobook file.');
      } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('td.file_url > input').val() == '') {
        alert('Add your audiobook file.');
      }
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
      if (this.audiobookCatCheckbox.is(":checked")) {
        this.taxClassDropdown.val('audiobooks-10301000');
      } else {
        this.taxClassDropdown.val('digital-books-10302000');
      }
      this.taxStatusDropdown.val('taxable');
      this.downloadableDiv.addClass('block');
      this.downloadableDiv.attr('style', 'display: block');
    } else {
      this.ebookCatCheckbox.prop('checked', false);
      this.audiobookCatCheckbox.prop('checked', false);
      this.taxClassDropdown.val('physical-books-35010000');
      this.taxStatusDropdown.val('taxable');
      this.downloadableDiv.removeClass('block');
      this.downloadableDiv.attr('style', 'display: none');
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
      this.taxClassDropdown.val('services-20030000');
      this.taxStatusDropdown.val('taxable');
      this.downloadableDiv.removeClass('block');
      this.downloadableDiv.attr('style', 'display: none');
    } else {
      this.serviceCatCheckbox.prop('checked', false);
      this.taxClassDropdown.val('physical-books-35010000');
      this.taxStatusDropdown.val('taxable');
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