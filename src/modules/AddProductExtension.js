import $ from 'jquery';

class AddProductExtension {
    constructor() {
        this.mvxSubmit = $('input#mvx_frontend_dashboard_product_submit');
        this.titleInput = $('input#post_title');
        this.productDescription = $('#tinymce p');
        this.scheduleSaleButton = $(".sale_schedule");
        this.regularPrice = $('#_regular_price');
        this.salePrice = $('#_sale_price');
        this.manageStockCheckbox = $('input#_manage_stock');
        this.stockFieldGroup = $('div.stock_fields');
        this.stockInput = $('input#_stock');
        this.gtinInput = $('input[name="_mvx_gtin_code"]');
        this.productTitleSection = $('.product-title-wrap');
        this.virtualCheckbox = $('input#_virtual');
        this.downloadableCheckbox = $('input#_downloadable');
        this.serviceCatCheckbox = $('ul.product_cat input[value=53]'); //53 for dev, somehow also 53 for prod
        this.paperbackCatCheckbox = $('ul.product_cat input[value=52]'); //60 for dev, 52 for prod
        this.hardcoverCatCheckbox = $('ul.product_cat input[value=51]'); //59 for dev, 51 for prod
        this.ebookCatCheckbox = $('ul.product_cat input[value=49]'); //51 for dev, 49 for prod
        this.audiobookCatCheckbox = $('ul.product_cat input[value=50]'); //52 for dev, 50 for prod
        this.uncategorizedCatCheckbox = $('ul.product_cat input[value=16]'); //16 for dev, somehow also 16 for prod
        this.catCheckboxes = $('ul.product_cat input[type=checkbox]');
        this.taxStatusDropdown = $('#_tax_status');
        this.taxClassDropdown = $('#_tax_class');
        this.titleInput = $('span.editing').find('#post_title');
        this.events();
    }

    events(){
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
        this.taxStatusDropdown.on('change', this.resetTaxStatus.bind(this));
        this.taxClassDropdown.on('change', this.resetTaxClass.bind(this));
        this.titleInput.on('click', this.setTaxInfo.bind(this));
    }

    setTaxInfo() {
        console.log('called');
    }

    resetTaxClass() {
        if (this.downloadableCheckbox.is(":checked") || this.virtualCheckbox.is(":checked")){
            this.taxClassDropdown.val('digital-and-virtual-products');
        } else {
            this.taxClassDropdown.val('physical-products');
        }
        alert('Tax class is determined by product type.');
    }

    resetTaxStatus() {
        this.taxStatusDropdown.val('taxable');
        alert('Tax status must be set to Taxable.');
    }

    showWaitMessage() {
        $('#tomc-mvx--add-product-wait-message').css('display', 'block');
    }

    updateCheckboxesService() {
        if (this.serviceCatCheckbox.is(":checked")){
            this.virtualCheckbox.prop('checked', true);
            this.downloadableCheckbox.prop('checked', false);
            this.paperbackCatCheckbox.prop('checked', false);
            this.hardcoverCatCheckbox.prop('checked', false);
            this.uncategorizedCatCheckbox.prop('checked', false);
            this.ebookCatCheckbox.prop('checked', false);
            this.audiobookCatCheckbox.prop('checked', false);
            if (this.productDescription.text() == ''){
                alert('Give your service a description.');
            }
            this.taxClassDropdown.val('digital-and-virtual-products');
            this.taxStatusDropdown.val('taxable');
        } else {
            this.virtualCheckbox.prop('checked', false);
        }
    }

    updateCheckboxesHardcover() {
        if (this.hardcoverCatCheckbox.is(":checked")){
            this.virtualCheckbox.prop('checked', false);
            this.downloadableCheckbox.prop('checked', false);
            this.paperbackCatCheckbox.prop('checked', false);
            this.uncategorizedCatCheckbox.prop('checked', false);
            this.ebookCatCheckbox.prop('checked', false);
            this.audiobookCatCheckbox.prop('checked', false);
            this.manageStockCheckbox.prop('checked', true);
            this.stockFieldGroup.css('display', 'block');
            if (this.stockInput.val() == '' || Number(this.stockInput.val()) == 0 || isNaN(this.stockInput.val())){
                alert('Enter the number of paperbacks you have ready to ship in the Stock field on the Inventory tab.');
                this.stockInput.val(0);
            }
            this.taxClassDropdown.val('physical-products');
            this.taxStatusDropdown.val('taxable');
        } else {
            this.manageStockCheckbox.prop('checked', false);
            this.stockFieldGroup.css('display', 'none');
        }
    }

    updateCheckboxesPaperback() {
        if (this.paperbackCatCheckbox.is(":checked")){
            this.virtualCheckbox.prop('checked', false);
            this.downloadableCheckbox.prop('checked', false);
            this.hardcoverCatCheckbox.prop('checked', false);
            this.uncategorizedCatCheckbox.prop('checked', false);
            this.ebookCatCheckbox.prop('checked', false);
            this.audiobookCatCheckbox.prop('checked', false);
            this.manageStockCheckbox.prop('checked', true);
            this.stockFieldGroup.css('display', 'block');
            if (this.stockInput.val() == '' || Number(this.stockInput.val()) == 0 || isNaN(this.stockInput.val())){
                alert('Enter the number of paperbacks you have ready to ship in the Stock field on the Inventory tab.');
                this.stockInput.val(0);
            }
            this.taxClassDropdown.val('physical-products');
            this.taxStatusDropdown.val('taxable');
        } else {
            this.manageStockCheckbox.prop('checked', false);
            this.stockFieldGroup.css('display', 'none');
        }
    }

    updateCheckboxesEbook() {
        if (this.ebookCatCheckbox.is(":checked")){
            this.virtualCheckbox.prop('checked', false);
            this.downloadableCheckbox.prop('checked', true);
            this.paperbackCatCheckbox.prop('checked', false);
            this.hardcoverCatCheckbox.prop('checked', false);
            this.uncategorizedCatCheckbox.prop('checked', false);
            this.serviceCatCheckbox.prop('checked', false);
            this.audiobookCatCheckbox.prop('checked', false);
            this.taxClassDropdown.val('digital-and-virtual-products');
            this.taxStatusDropdown.val('taxable');
        } else {
            this.downloadableCheckbox.prop('checked', false);
        }
    }

    updateCheckboxesAudiobook() {
        if (this.audiobookCatCheckbox.is(":checked")){
            this.virtualCheckbox.prop('checked', false);
            this.downloadableCheckbox.prop('checked', true);
            this.paperbackCatCheckbox.prop('checked', false);
            this.hardcoverCatCheckbox.prop('checked', false);
            this.uncategorizedCatCheckbox.prop('checked', false);
            this.serviceCatCheckbox.prop('checked', false);
            this.ebookCatCheckbox.prop('checked', false);
            this.taxClassDropdown.val('digital-and-virtual-products');
            this.taxStatusDropdown.val('taxable');
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
            this.taxClassDropdown.val('digital-and-virtual-products');
            this.taxStatusDropdown.val('taxable');
        } else {
            this.ebookCatCheckbox.prop('checked', false);
            this.audiobookCatCheckbox.prop('checked', false);
            this.taxClassDropdown.val('physical-products');
            this.taxStatusDropdown.val('taxable');
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
            if (this.productDescription.text() == ''){
                alert('Give your service a description.');
            }
            this.taxClassDropdown.val('digital-and-virtual-products');
            this.taxStatusDropdown.val('taxable');
        } else {
            this.serviceCatCheckbox.prop('checked', false);
            this.taxClassDropdown.val('physical-products');
            this.taxStatusDropdown.val('taxable');
        }
    }

    checkPrices() {
        if (this.regularPrice.val() === ''){
            alert('Be sure to enter a price.');
        } else if (isNaN(this.regularPrice.val())){
            alert("Your product's price must be a number.");
            this.regularPrice.val('');
        } else if (Number(this.regularPrice.val()) > 50 && !(this.virtualCheckbox.is(":checked"))){
            alert('You set the price at $' + this.regularPrice.val() + ". Make sure that's the right amount before proceeding.");
        }
    }

    checkSalesPrices() {  
        if (this.regularPrice.val() === '' || this.salePrice.val() === ''){
            alert('To schedule a sale, enter a value for the regular price and sale price.');
        }
        if (Number(this.salePrice.val()) >= Number(this.regularPrice.val())){
            alert('Make sure your sale price is less than the regular price.');
        } 
    }

    checkIsbn() {
        let isbnEntered = this.gtinInput.val();
        if (isbnEntered != '') {
            $.ajax({
                beforeSend: (xhr) => {
                    xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
                },
                url: tomcBookorgData.root_url + '/wp-json/tomcMVXtend/v1/checkIfAssigned',
                type: 'GET',
                data: {
                    'ISBNEntered' : Number(isbnEntered)
                },
                success: (response) => {
                    if (response > 0){
                        if ($('#tomc-vendxtend--dupliacteISBNError').length < 1) {
                            let alertMessage = $('<p />').attr('id', 'tomc-vendxtend--dupliacteISBNError');
                            this.productTitleSection.append(alertMessage);
                        }
                        $('#tomc-vendxtend--dupliacteISBNError').html('Our records show that the ISBN you entered, ' + response + ', is already registered to an existing product.');
                        this.gtinInput.val('');
                    } else {
                        if ($('#tomc-vendxtend--dupliacteISBNError').length < 1) {
                            let alertMessage = $('<p />').attr('id', 'tomc-vendxtend--dupliacteISBNError');
                            this.productTitleSection.append(alertMessage);
                        }
                        $('#tomc-vendxtend--dupliacteISBNError').html('');
                    }
                },
                failure: (response) => {
                    // console.log(response);
                }
            })
        }
    }
}

export default AddProductExtension;