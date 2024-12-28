import $ from 'jquery';

class AddProductExtension {
    constructor() {
        this.mvxSubmit = $('#mvx_frontend_dashboard_product_submit');
        this.titleInput = $('input#post_title');
        this.productDescription = $('#tinymce p');
        this.scheduleSaleButton = $(".sale_schedule");
        this.regularPrice = $('#_regular_price');
        this.salePrice = $('#_sale_price');
        this.gtinInput = $('input[name="_mvx_gtin_code"]');
        this.productTitleSection = $('.product-title-wrap');
        this.virtualCheckbox = $('input#_virtual');
        this.downloadableCheckbox = $('input#_downloadable');
        this.serviceCatCheckbox = $('ul.product_cat input[value=53]'); //somehow also 53 for prod
        this.paperbackCatCheckbox = $('ul.product_cat input[value=60]'); //52 for prod
        this.hardcoverCatCheckbox = $('ul.product_cat input[value=59]'); //51 for prod
        this.ebookCatCheckbox = $('ul.product_cat input[value=51]'); //49 for prod
        this.audiobookCatCheckbox = $('ul.product_cat input[value=52]'); //50 for prod
        this.uncategorizedCatCheckbox = $('ul.product_cat input[value=16]'); //somehow also 16 for prod
        this.catCheckboxes = $('ul.product_cat input[type=checkbox]');
        this.events();
    }

    events(){
        this.scheduleSaleButton.on('click', this.checkSalesPrices.bind(this));
        this.gtinInput.on('focusout', this.checkIsbn.bind(this));
        this.regularPrice.on('focusout', this.checkPrices.bind(this));
        this.downloadableCheckbox.on('change', this.updateCheckboxesDownloadable.bind(this));
        this.virtualCheckbox.on('change', this.updateCheckboxesVirtual.bind(this));
        this.mvxSubmit.on('click', { prepend: true}, this.validateProductInfo.bind(this));
    }

    validateProductInfo() {
        if (this.titleInput.val() == ''){
            alert('Give your product a title.');
        }
        if ((this.virtualCheckbox.is(":checked") || this.serviceCatCheckbox.is(":checked")) && this.productDescription.text() == ''){
            alert('Add a description for your service.');
        }
    }

    updateCheckboxesDownloadable() {
        if (this.downloadableCheckbox.is(":checked")) {
            this.virtualCheckbox.prop('checked', false);
            this.serviceCatCheckbox.prop('checked', false);
            this.paperbackCatCheckbox.prop('checked', false);
            this.hardcoverCatCheckbox.prop('checked', false);
            this.uncategorizedCatCheckbox.prop('checked', false);
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
        } else {
            this.serviceCatCheckbox.prop('checked', false);
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
                        console.log(response);
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