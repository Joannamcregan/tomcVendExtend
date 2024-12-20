import $ from 'jquery';

class AddProductExtension {
    constructor() {
        this.scheduleSaleButton = $(".sale_schedule");
        this.regularPrice = $('#_regular_price');
        this.salePrice = $('#_sale_price');
        this.gtinInput = $('input[name="_mvx_gtin_code"]');
        this.productTitleSection = $('.product-title-wrap');
        this.events();
    }

    events(){
        this.scheduleSaleButton.on('click', this.checkPrices.bind(this));
        this.gtinInput.on('focusout', this.checkIsbn.bind(this));
    }

    checkPrices() {  
        if (this.regularPrice.val() === '' || this.salePrice.val() === ''){
            alert('To schedule a sale, enter a value for the regular price and sale price.')
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