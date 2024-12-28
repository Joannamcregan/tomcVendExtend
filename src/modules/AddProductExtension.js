import $ from 'jquery';

class AddProductExtension {
    constructor() {
        this.scheduleSaleButton = $(".sale_schedule");
        this.regularPrice = $('#_regular_price');
        this.salePrice = $('#_sale_price');
        this.gtinInput = $('input[name="_mvx_gtin_code"]');
        this.productTitleSection = $('.product-title-wrap');
        this.serviceCheckbox = $('ul.taxonomy-widget input[value=53]');
        this.events();
    }

    events(){
        this.scheduleSaleButton.on('click', this.checkPrices.bind(this));
        this.gtinInput.on('focusout', this.checkIsbn.bind(this));
        this.regularPrice.on('focusout', this.checkForHighPrice.bind(this));
    }

    checkForHighPrice() {
        if (this.regularPrice.val() === ''){
            alert('Be sure to enter a price.');
        } else if (Number(this.regularPrice.val()) === 0) {
            alert("You made your product free, which is awesome, but make sure that's what you intended to do before proceeding.")
        } else if (isNaN(this.regularPrice.val())){
            alert("Your product's price must be a number.");
            this.regularPrice.val('');
        } else if (Number(this.regularPrice.val()) > 9500){
            alert("You set the price at $" + this.regularPrice.val() + ', which is more than the $9500 limit.');
            this.regularPrice.val('');
        } else if (Number(this.regularPrice.val()) > 50 && !(this.serviceCheckbox.is(":checked"))){
            alert('You set the price at $' + this.regularPrice.val() + ". Make sure that's the right amount before proceeding (and be sure to check the 'Services' box if you're offering a service).");
        }
    }

    checkPrices() {  
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