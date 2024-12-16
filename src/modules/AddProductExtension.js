import $ from 'jquery';

class AddProductExtension {
    constructor() {
        this.scheduleSaleButton = $(".sale_schedule");
        this.regularPrice = $('#_regular_price');
        this.salePrice = $('#_sale_price');
        this.events();
    }

    events(){
        this.scheduleSaleButton.on('click', this.checkPrices.bind(this));
    }

    checkPrices() {  
        if (this.regularPrice.val() === '' || this.salePrice.val() === ''){
            alert('To schedule a sale, enter a value for the regular price and sale price.')
        }
        if (Number(this.salePrice.val()) >= Number(this.regularPrice.val())){
            alert('Make sure your sale price is less than the regular price.');
        } 
    }
}

export default AddProductExtension;