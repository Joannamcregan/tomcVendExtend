import $ from 'jquery';

class AddProductExtension {
    constructor() {
        this.scheduleSaleButton = $(".sale_schedule");
        this.regularPrice = $('#_regular_price');
        this.salePrice = $('#_sale_price');
        this.gtinInput = $('input[name="_mvx_gtin_code"]');
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
                    console.log(response);
                },
                failure: (response) => {
                    // console.log(response);
                }
            })
        }
    }
}

export default AddProductExtension;