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
    this.serviceCatCheckbox = jquery__WEBPACK_IMPORTED_MODULE_0___default()('ul.product_cat input[value=58]'); //58 for dev, 53 for prod
    this.paperbackCatCheckbox = jquery__WEBPACK_IMPORTED_MODULE_0___default()('ul.product_cat input[value=51]'); //51 for dev, 84 for prod
    this.hardcoverCatCheckbox = jquery__WEBPACK_IMPORTED_MODULE_0___default()('ul.product_cat input[value=50]'); //50 for dev, 85 for prod
    this.ebookCatCheckbox = jquery__WEBPACK_IMPORTED_MODULE_0___default()('ul.product_cat input[value=48]'); //48 for dev, 49 for prod
    this.audiobookCatCheckbox = jquery__WEBPACK_IMPORTED_MODULE_0___default()('ul.product_cat input[value=49]'); //49 for dev, 50 for prod
    this.physicalZineCheckbox = jquery__WEBPACK_IMPORTED_MODULE_0___default()('ul.product_cat input[value=55]'); //55 for dev, 86 for prod
    this.digitalZineCheckbox = jquery__WEBPACK_IMPORTED_MODULE_0___default()('ul.product_cat input[value=56]'); //56 for dev, 75 for prod
    this.uncategorizedCatCheckbox = jquery__WEBPACK_IMPORTED_MODULE_0___default()('ul.product_cat input[value=16]'); //16 for dev, somehow also 16 for prod
    this.catCheckboxes = jquery__WEBPACK_IMPORTED_MODULE_0___default()('ul.product_cat input[type=checkbox]');
    this.taxStatusDropdown = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#_tax_status');
    this.taxClassDropdown = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#_tax_class');
    this.titleInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()('span.editing-content > input#post_title');
    this.downloadableDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()('div.show_if_downloadable');
    this.couponTitle = jquery__WEBPACK_IMPORTED_MODULE_0___default()('div.coupon-primary-info input#post_title');
    this.weightField = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#shipping_product_data input#_weight');
    this.perProductInsert = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#shipping_product_data a.insert');
    this.reviewButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc_mvx_frontend_dashboard_product_check');
    this.uploadImgButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()('a.upload_image_button');
    this.events();
  }
  events() {
    this.scheduleSaleButton.on('click', this.checkSalesPrices.bind(this));
    this.gtinInput.on('focusout', this.checkIsbn.bind(this));
    this.regularPrice.on('focusout', this.checkPrices.bind(this));
    this.downloadableCheckbox.on('change', this.updateCheckboxesDownloadable.bind(this));
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
    this.reviewButton.on('click', this.reviewBookInfo.bind(this));
    this.uploadImgButton.on('click', () => {
      this.reviewButton.removeClass('hidden');
      this.mvxSubmit.addClass('hidden');
    });
  }
  deleteProductFile() {
    this.reviewButton.removeClass('hidden');
    this.mvxSubmit.addClass('hidden');
  }
  reviewBookInfo(e) {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('div.downloadable_files i.ico_delete_icon').length > -1) {
      let deleteProductButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()('div.downloadable_files a.delete');
      deleteProductButton.on('click', this.deleteProductFile.bind(this));
    }
    if (this.titleInput.val() == '') {
      alert('Give your product a title');
    } else {
      if (this.regularPrice.val() == '') {
        alert('Give your product a price. If you want to make it free, please set the price to 0.');
      } else {
        let imgSrc = jquery__WEBPACK_IMPORTED_MODULE_0___default()('a.upload_image_button img').attr('src');
        if (imgSrc.indexOf('/woocommerce-placeholder') !== -1) {
          alert('Upload an image for your product.');
        } else {
          if (this.audiobookCatCheckbox.is(":checked") == false && this.ebookCatCheckbox.is(":checked") == false && this.digitalZineCheckbox.is(":checked") == false && this.paperbackCatCheckbox.is(":checked") == false && this.hardcoverCatCheckbox.is(":checked") == false && this.physicalZineCheckbox.is(":checked") == false && this.serviceCatCheckbox.is(":checked") == false) {
            alert('Select your product category.');
          } else {
            if (this.audiobookCatCheckbox.is(":checked")) {
              if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('td.file_url_choose').length < 1) {
                alert('Click the Add File button and add your audiobook file.');
              } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('td.file_url > input').val() == '') {
                alert('Add your audiobook file.');
              } else {
                this.mvxSubmit.removeClass('hidden');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).addClass('hidden');
              }
            } else if (this.ebookCatCheckbox.is(":checked")) {
              if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('td.file_url_choose').length < 1) {
                alert('Click the Add File button and add your ebook file.');
              } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('td.file_url > input').val() == '') {
                alert('Add your ebook file.');
              } else {
                this.mvxSubmit.removeClass('hidden');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).addClass('hidden');
              }
            } else if (this.digitalZineCheckbox.is(":checked")) {
              if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('td.file_url_choose').length < 1) {
                alert('Click the Add File button and add your digital zine file.');
              } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('td.file_url > input').val() == '') {
                alert('Add your digital zine file.');
              } else {
                this.mvxSubmit.removeClass('hidden');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).addClass('hidden');
              }
            } else if (this.paperbackCatCheckbox.is(":checked")) {
              if (this.stockInput.val() == '' || Number(this.stockInput.val()) == 0 || isNaN(this.stockInput.val())) {
                alert('Enter the number of paperback books you have ready to ship in the Stock field on the Inventory tab. Enter the paperback weight in the Shipping tab.');
              } else if (this.weightField.val() == '') {
                alert("Enter your book's weight.");
              } else {
                this.mvxSubmit.removeClass('hidden');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).addClass('hidden');
              }
            } else if (this.hardcoverCatCheckbox.is(":checked")) {
              if (this.stockInput.val() == '' || Number(this.stockInput.val()) == 0 || isNaN(this.stockInput.val())) {
                alert('Enter the number of hardcover books you have ready to ship in the Stock field on the Inventory tab. Enter the hardcover weight in the Shipping tab.');
              } else if (this.weightField.val() == '') {
                alert("Enter your book's weight.");
              } else {
                this.mvxSubmit.removeClass('hidden');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).addClass('hidden');
              }
            } else if (this.physicalZineCheckbox.is(":checked")) {
              if (this.stockInput.val() == '' || Number(this.stockInput.val()) == 0 || isNaN(this.stockInput.val())) {
                alert('Enter the number of zines you have ready to ship in the Stock field on the Inventory tab.');
                this.stockInput.val(0);
              } else if (this.weightField.val() == '') {
                alert("Enter your zine's weight.");
              } else {
                this.mvxSubmit.removeClass('hidden');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).addClass('hidden');
              }
            } else if (this.serviceCatCheckbox.is(":checked")) {
              let productDescription = tinymce.activeEditor.getContent();
              if (productDescription == '') {
                alert('Give your service a description.');
              } else {
                this.mvxSubmit.removeClass('hidden');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).addClass('hidden');
              }
            } else {
              alert('Select a valid product category.');
            }
          }
        }
      }
    }
  }
  addShippingByWeight(e) {
    let weight = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).val());
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#shipping_product_data i.ico-delete-icon').trigger('click');
    this.perProductInsert.trigger('click');
    let perProductCost = jquery__WEBPACK_IMPORTED_MODULE_0___default()('td.item_cost input:visible');
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
    this.mvxSubmit.addClass('hidden');
    this.reviewButton.removeClass('hidden');
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
    this.mvxSubmit.addClass('hidden');
    this.reviewButton.removeClass('hidden');
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
      // if (this.productDescription.text() == ''){
      //     alert('Give your service a description.');
      // }
      this.taxClassDropdown.val('services-20030000');
      this.taxStatusDropdown.val('taxable');
      this.digitalZineCheckbox.prop('checked', false);
      this.physicalZineCheckbox.prop('checked', false);
      this.downloadableDiv.removeClass('block');
      this.downloadableDiv.attr('style', 'display: none');
      this.mvxSubmit.addClass('hidden');
      this.reviewButton.removeClass('hidden');
    } else {
      this.virtualCheckbox.prop('checked', false);
      this.mvxSubmit.addClass('hidden');
      this.reviewButton.removeClass('hidden');
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
        // alert('Enter the number of hardcover books you have ready to ship in the Stock field on the Inventory tab. Enter the hardcover weight in the Shipping tab.');
        this.stockInput.val(0);
      }
      this.taxClassDropdown.val('physical-books-35010000');
      this.taxStatusDropdown.val('taxable');
      this.digitalZineCheckbox.prop('checked', false);
      this.physicalZineCheckbox.prop('checked', false);
      this.serviceCatCheckbox.prop('checked', false);
      this.downloadableDiv.removeClass('block');
      this.downloadableDiv.attr('style', 'display: none');
      this.mvxSubmit.addClass('hidden');
      this.reviewButton.removeClass('hidden');
    } else {
      this.manageStockCheckbox.prop('checked', false);
      this.stockFieldGroup.css('display', 'none');
      this.mvxSubmit.addClass('hidden');
      this.reviewButton.removeClass('hidden');
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
        // alert('Enter the number of paperback books you have ready to ship in the Stock field on the Inventory tab. Enter the paperback weight in the Shipping tab.');
        this.stockInput.val(0);
      }
      this.taxClassDropdown.val('physical-books-35010000');
      this.taxStatusDropdown.val('taxable');
      this.digitalZineCheckbox.prop('checked', false);
      this.physicalZineCheckbox.prop('checked', false);
      this.serviceCatCheckbox.prop('checked', false);
      this.downloadableDiv.removeClass('block');
      this.downloadableDiv.attr('style', 'display: none');
      this.mvxSubmit.addClass('hidden');
      this.reviewButton.removeClass('hidden');
    } else {
      this.manageStockCheckbox.prop('checked', false);
      this.stockFieldGroup.css('display', 'none');
      this.mvxSubmit.addClass('hidden');
      this.reviewButton.removeClass('hidden');
    }
  }
  updateCheckboxesEbook() {
    if (this.ebookCatCheckbox.is(":checked")) {
      this.virtualCheckbox.prop('checked', false);
      this.downloadableCheckbox.prop('checked', true);
      this.virtualCheckbox.prop('checked', true);
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
      this.mvxSubmit.addClass('hidden');
      this.reviewButton.removeClass('hidden');
      // if ($('td.file_url_choose').length < 1){
      //     alert('Click the Add File button and add your ebook file.');
      // } else if ($('td.file_url > input').val() == '') {
      //     alert('Add your ebook file.');
      // }
    } else {
      this.downloadableCheckbox.prop('checked', false);
      this.mvxSubmit.addClass('hidden');
      this.reviewButton.removeClass('hidden');
    }
  }
  updateCheckboxesDigitalZine() {
    if (this.digitalZineCheckbox.is(":checked")) {
      this.virtualCheckbox.prop('checked', false);
      this.downloadableCheckbox.prop('checked', true);
      this.virtualCheckbox.prop('checked', true);
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
      this.mvxSubmit.addClass('hidden');
      this.reviewButton.removeClass('hidden');
      // if ($('td.file_url_choose').length < 1){
      //     alert('Click the Add File button and add your digital zine file.');
      // } else if ($('td.file_url > input').val() == '') {
      //     alert('Add your digital zine file.');
      // }
    } else {
      this.downloadableCheckbox.prop('checked', false);
      this.mvxSubmit.addClass('hidden');
      this.reviewButton.removeClass('hidden');
    }
  }
  updateCheckboxesPhysicalZine() {
    if (this.physicalZineCheckbox.is(":checked")) {
      this.virtualCheckbox.prop('checked', false);
      this.downloadableCheckbox.prop('checked', false);
      this.hardcoverCatCheckbox.prop('checked', false);
      this.uncategorizedCatCheckbox.prop('checked', false);
      this.ebookCatCheckbox.prop('checked', false);
      this.serviceCatCheckbox.prop('checked', false);
      this.audiobookCatCheckbox.prop('checked', false);
      this.manageStockCheckbox.prop('checked', true);
      this.stockFieldGroup.css('display', 'block');
      if (this.stockInput.val() == '' || Number(this.stockInput.val()) == 0 || isNaN(this.stockInput.val())) {
        // alert('Enter the number of zines you have ready to ship in the Stock field on the Inventory tab.');
        this.stockInput.val(0);
      }
      this.taxClassDropdown.val('physical-books-35010000');
      this.taxStatusDropdown.val('taxable');
      this.paperbackCatCheckbox.prop('checked', false);
      this.digitalZineCheckbox.prop('checked', false);
      this.downloadableDiv.removeClass('block');
      this.downloadableDiv.attr('style', 'display: none');
      this.mvxSubmit.addClass('hidden');
      this.reviewButton.removeClass('hidden');
    } else {
      this.manageStockCheckbox.prop('checked', false);
      this.stockFieldGroup.css('display', 'none');
      this.mvxSubmit.addClass('hidden');
      this.reviewButton.removeClass('hidden');
    }
  }
  updateCheckboxesAudiobook() {
    if (this.audiobookCatCheckbox.is(":checked")) {
      this.virtualCheckbox.prop('checked', false);
      this.downloadableCheckbox.prop('checked', true);
      this.virtualCheckbox.prop('checked', true);
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
      this.mvxSubmit.addClass('hidden');
      this.reviewButton.removeClass('hidden');
      // if ($('td.file_url_choose').length < 1){
      //     alert('Click the Add File button and add your audiobook file.');
      // } else if ($('td.file_url > input').val() == '') {
      //     alert('Add your audiobook file.');
      // }
    } else {
      this.downloadableCheckbox.prop('checked', false);
      this.mvxSubmit.addClass('hidden');
      this.reviewButton.removeClass('hidden');
    }
  }
  updateCheckboxesDownloadable() {
    if (this.downloadableCheckbox.is(":checked")) {
      this.taxStatusDropdown.val('taxable');
      this.downloadableDiv.addClass('block');
      this.downloadableDiv.attr('style', 'display: block');
    } else {
      this.ebookCatCheckbox.prop('checked', false);
      this.audiobookCatCheckbox.prop('checked', false);
      this.digitalZineCheckbox.prop('checked', false);
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

/***/ "./src/modules/NameYourPriceExtension.js":
/*!***********************************************!*\
  !*** ./src/modules/NameYourPriceExtension.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

class NYPExtension {
  constructor() {
    this.enableOverlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-mvx-nyp-enable--overlay');
    this.enableOverlayCloseButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-mvx-nyp-enable--overlay svg.search-overlay__close');
    this.enableOverlayLink = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-name-price-open-overlay');
    this.manageOverlayLink = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-name-price-manage-overlay');
    this.enableOverlayCancel = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-mvx-nyp-cancel-button');
    this.minPriceInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-mvx-nyp-min-price');
    this.maxPriceInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-mvx-nyp-max-price');
    this.enableButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-mvx-nyp-enable-button');
    this.lowMinWarning = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-mvx-nyp-enable--low-min-warning');
    this.negativeMinError = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-mvx-nyp-enable--negative-min-error');
    this.lowerMaxError = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-mvx-nyp-enable--lower-max-error');
    this.zeroMaxError = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-mvx-nyp-enable--zero-max-error');
    this.disableOverlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-mvx-nyp-disable--overlay');
    this.disableOverlayCloseButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-mvx-nyp-disable--overlay svg.search-overlay__close');
    this.disableOverlayCancel = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-mvx-nyp-disable-cancel-button');
    this.disableOverlayLink = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-name-price-disable-overlay-link');
    this.disableButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-mvx-nyp-disable-button');
    this.events();
  }
  events() {
    this.enableOverlayCloseButton.on('click', this.closeEnableOverlay.bind(this));
    this.enableOverlayCancel.on('click', this.closeEnableOverlay.bind(this));
    this.enableOverlayLink.on('click', this.openEnableOverlay.bind(this));
    this.manageOverlayLink.on('click', this.openEnableOverlay.bind(this));
    this.enableButton.on('click', this.enableSettings.bind(this));
    this.minPriceInput.on('change', this.validateMinMax.bind(this));
    this.maxPriceInput.on('change', this.validateMinMax.bind(this));
    this.disableOverlayCloseButton.on('click', this.closeDisableOverlay.bind(this));
    this.disableOverlayCancel.on('click', this.closeDisableOverlay.bind(this));
    this.disableOverlayLink.on('click', this.openDisableOverlay.bind(this));
    this.disableButton.on('click', this.disableSettings.bind(this));
  }
  closeEnableOverlay() {
    this.enableOverlay.addClass('hidden');
  }
  closeDisableOverlay() {
    this.disableOverlay.addClass('hidden');
  }
  openDisableOverlay(e) {
    this.disableButton.attr('data-id', jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('id'));
    this.disableOverlay.removeClass('hidden');
  }
  openEnableOverlay(e) {
    this.minPriceInput.val(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('min'));
    this.maxPriceInput.val(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('max'));
    this.enableButton.attr('data-id', jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('id'));
    this.enableButton.attr('data-category', jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('category'));
    this.enableButton.removeClass('hidden');
    this.lowMinWarning.addClass('hidden');
    this.negativeMinError.addClass('hidden');
    this.lowerMaxError.addClass('hidden');
    this.zeroMaxError.addClass('hidden');
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('category') == 55 || jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('category') == 50 || this.enableButton.data('category') == 86) {
      if (parseInt(this.minPriceInput.val(), 10) < 10) {
        this.lowMinWarning.removeClass('hidden');
      }
    }
    this.enableOverlay.removeClass('hidden');
  }
  disableSettings(e) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
      beforeSend: xhr => {
        xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
      },
      url: tomcBookorgData.root_url + '/wp-json/tomcMVXtendNYP/v1/disableNYP',
      type: 'POST',
      data: {
        'id': jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('id')
      },
      success: response => {
        location.reload(true);
      },
      failure: response => {
        //console.log(response);
      }
    });
  }
  enableSettings(e) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
      beforeSend: xhr => {
        xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
      },
      url: tomcBookorgData.root_url + '/wp-json/tomcMVXtendNYP/v1/enableNYP',
      type: 'POST',
      data: {
        'id': jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('id'),
        'min': this.minPriceInput.val(),
        'max': this.maxPriceInput.val()
      },
      success: response => {
        location.reload(true);
      },
      failure: response => {
        //console.log(response);
      }
    });
  }
  validateMinMax() {
    let allowEnable = true;
    if (parseInt(this.minPriceInput.val()) !== parseInt(this.minPriceInput.val())) {
      this.minPriceInput.val('');
    } else if (this.minPriceInput.val() != '') {
      this.minPriceInput.val(parseInt(this.minPriceInput.val()));
    }
    if (parseInt(this.maxPriceInput.val()) !== parseInt(this.maxPriceInput.val())) {
      this.maxPriceInput.val('');
    } else if (this.maxPriceInput.val() != '') {
      this.maxPriceInput.val(parseInt(this.maxPriceInput.val()));
    }
    if (this.maxPriceInput.val() < 0) {
      this.maxPriceInput.val(0);
    }
    if (parseInt(this.minPriceInput.val(), 10) < 0) {
      this.negativeMinError.removeClass('hidden');
      allowEnable = false;
    } else {
      this.negativeMinError.addClass('hidden');
    }
    if (parseInt(this.maxPriceInput.val(), 10) <= parseInt(this.minPriceInput.val(), 10) || this.minPriceInput.val() == '' && this.maxPriceInput.val() !== '') {
      this.lowerMaxError.removeClass('hidden');
      allowEnable = false;
    } else {
      this.lowerMaxError.addClass('hidden');
    }
    if (parseInt(this.maxPriceInput.val(), 10) < 1) {
      this.zeroMaxError.removeClass('hidden');
      allowEnable = false;
    } else {
      this.zeroMaxError.addClass('hidden');
    }
    if (this.enableButton.data('category') == 55 || this.enableButton.data('category') == 50 || this.enableButton.data('category') == 86) {
      //paperbacks, hardcovers, physical zines
      if (parseInt(this.minPriceInput.val(), 10) < 10 || this.minPriceInput.val() == '') {
        this.lowMinWarning.removeClass('hidden');
      } else {
        this.lowMinWarning.addClass('hidden');
      }
    }
    if (allowEnable) {
      this.enableButton.removeClass('hidden');
    } else {
      this.enableButton.addClass('hidden');
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NYPExtension);

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
/* harmony import */ var _modules_NameYourPriceExtension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/NameYourPriceExtension */ "./src/modules/NameYourPriceExtension.js");


const tomcAddProductExtension = new _modules_AddProductExtension__WEBPACK_IMPORTED_MODULE_0__["default"]();
const tomcNYPExtension = new _modules_NameYourPriceExtension__WEBPACK_IMPORTED_MODULE_1__["default"]();
})();

/******/ })()
;
//# sourceMappingURL=index.js.map