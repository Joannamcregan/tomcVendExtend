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
        this.paperbackCatCheckbox = $('ul.product_cat input[value=51]'); //51 for dev, 84 for prod
        this.hardcoverCatCheckbox = $('ul.product_cat input[value=50]'); //50 for dev, 85 for prod
        this.ebookCatCheckbox = $('ul.product_cat input[value=48]'); //48 for dev, 49 for prod
        this.audiobookCatCheckbox = $('ul.product_cat input[value=49]'); //49 for dev, 50 for prod
        this.physicalZineCheckbox = $('ul.product_cat input[value=55]'); //55 for dev, 76 for prod
        this.digitalZineCheckbox = $('ul.product_cat input[value=56]'); //56 for dev, 75 for prod
        this.uncategorizedCatCheckbox = $('ul.product_cat input[value=16]'); //16 for dev, somehow also 16 for prod
        this.catCheckboxes = $('ul.product_cat input[type=checkbox]');
        this.taxStatusDropdown = $('#_tax_status');
        this.taxClassDropdown = $('#_tax_class');
        this.titleInput = $('span.editing-content > input#post_title');
        this.downloadableDiv = $('div.show_if_downloadable');
        this.couponTitle = $('div.coupon-primary-info input#post_title');
        this.weightField = $('#shipping_product_data input#_weight');
        this.perProductInsert = $('#shipping_product_data a.insert');
        this.reviewButton = $('#tomc_mvx_frontend_dashboard_product_check');
        this.events();
    }

    events(){
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
    }

    reviewBookInfo(e){
        if ((this.audiobookCatCheckbox.is(":checked") == false) && (this.ebookCatCheckbox.is(":checked") == false) && (this.digitalZineCheckbox.is(":checked") == false) && (this.paperbackCatCheckbox.is(":checked") == false) && (this.hardcoverCatCheckbox.is(":checked") == false) && (this.physicalZineCheckbox.is(":checked") == false) && (this.serviceCatCheckbox.is(":checked") == false)){
            alert('Select your product category.');
        } else {
            if (this.audiobookCatCheckbox.is(":checked")){
                if ($('td.file_url_choose').length < 1){
                    alert('Click the Add File button and add your audiobook file.');
                } else if ($('td.file_url > input').val() == '') {
                    alert('Add your audiobook file.');
                } else {
                    this.mvxSubmit.removeClass('hidden');
                    $(e.target).addClass('hidden');
                }
            } else if (this.ebookCatCheckbox.is(":checked")){
                if ($('td.file_url_choose').length < 1){
                    alert('Click the Add File button and add your ebook file.');
                } else if ($('td.file_url > input').val() == '') {
                    alert('Add your ebook file.');
                } else {
                    this.mvxSubmit.removeClass('hidden');
                    $(e.target).addClass('hidden');
                }
            } else if (this.digitalZineCheckbox.is(":checked")){
                if ($('td.file_url_choose').length < 1){
                    alert('Click the Add File button and add your digital zine file.');
                } else if ($('td.file_url > input').val() == '') {
                    alert('Add your digital zine file.');
                } else {
                    this.mvxSubmit.removeClass('hidden');
                    $(e.target).addClass('hidden');
                }
            } else if (this.paperbackCatCheckbox.is(":checked")){
                if (this.stockInput.val() == '' || Number(this.stockInput.val()) == 0 || isNaN(this.stockInput.val())){
                    alert('Enter the number of paperback books you have ready to ship in the Stock field on the Inventory tab. Enter the paperback weight in the Shipping tab.');
                } else {
                    this.mvxSubmit.removeClass('hidden');
                    $(e.target).addClass('hidden');
                }
            } else if (this.hardcoverCatCheckbox.is(":checked")){
                if (this.stockInput.val() == '' || Number(this.stockInput.val()) == 0 || isNaN(this.stockInput.val())){
                    alert('Enter the number of hardcover books you have ready to ship in the Stock field on the Inventory tab. Enter the hardcover weight in the Shipping tab.');
                } else {
                    this.mvxSubmit.removeClass('hidden');
                    $(e.target).addClass('hidden');
                }
            } else if (this.physicalZineCheckbox.is(":checked")){
                if (this.stockInput.val() == '' || Number(this.stockInput.val()) == 0 || isNaN(this.stockInput.val())){
                    alert('Enter the number of zines you have ready to ship in the Stock field on the Inventory tab.');
                    this.stockInput.val(0);
                } else {
                    this.mvxSubmit.removeClass('hidden');
                    $(e.target).addClass('hidden');
                }
            }
        }

        // if (this.productDescription.text() == ''){
        //     alert('Give your service a description.');
        // }
        
        
        
        
        
        
    }

    addShippingByWeight(e) {
        let weight = parseFloat($(e.target).val());
        $('#shipping_product_data i.ico-delete-icon').trigger('click');
        this.perProductInsert.trigger('click');
        let perProductCost = $('td.item_cost input:visible');
        if (weight <= 1){
            perProductCost.val(4.47);
            perProductCost.attr("placeholder", "4.47");
        } else if (weight <= 2){
            perProductCost.val("5.22");
            perProductCost.attr("placeholder", "5.22");
        } else if (weight <= 3){
            perProductCost.val("5.97");
            perProductCost.attr("placeholder", "5.97");
        } else if (weight <= 4){
            perProductCost.val("6.72");
            perProductCost.attr("placeholder", "6.72");
        } else if (weight <= 5){
            perProductCost.val("7.47");
            perProductCost.attr("placeholder", "7.47");
        } else if (weight <= 6){
            perProductCost.val("8.22");
            perProductCost.attr("placeholder", "8.22");
        } else if (weight <= 7){
            perProductCost.val("8.97");
            perProductCost.attr("placeholder", "8.97");
        } else if (weight <= 8){
            perProductCost.val("9.72");
            perProductCost.attr("placeholder", "9.72");
        } else if (weight <= 9){
            perProductCost.val("10.47");
            perProductCost.attr("placeholder", "10.47");
        } else if (weight <= 10){
            perProductCost.val("11.22");
            perProductCost.attr("placeholder", "11.22");
        } else if (weight <= 11){
            perProductCost.val("11.97");
            perProductCost.attr("placeholder", "11.97");
        } else if (weight <= 12){
            perProductCost.val("12.72");
            perProductCost.attr("placeholder", "12.72");
        } else if (weight <= 13){
            perProductCost.val("13.47");
            perProductCost.attr("placeholder", "13.47");
        } else if (weight <= 14){
            perProductCost.val("14.22");
            perProductCost.attr("placeholder", "14.22");
        } else if (weight <= 15){
            perProductCost.val("14.97");
            perProductCost.attr("placeholder", "14.97");
        } else {
            alert('More than 15 lbs? Visit https://www.usps.com/ship/mail-shipping-services.htm#mediamail for rate info.')
        }
    }

    styleDashboardCouponOptions() {
        $('option[value="fixed_product"]').prop('selected', 'selected');
    }

    setTaxInfo() {
        if (this.downloadableCheckbox.is(":checked")){
            this.taxClassDropdown.val('digital-books-10302000');
        } else if (this.virtualCheckbox.is(":checked")){
            this.taxClassDropdown.val('services-20030000');
        } else {
            this.taxClassDropdown.val('physical-books-35010000');
        }
        this.taxStatusDropdown.val('taxable');
    }

    resetTaxClass() {
        if (this.downloadableCheckbox.is(":checked")){
            if (this.audiobookCatCheckbox.is(":checked")){
                this.taxClassDropdown.val('audiobooks-10301000')
            } else {
                this.taxClassDropdown.val('digital-books-10302000');
            }
        } else if (this.virtualCheckbox.is(":checked")){
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
            // if (this.productDescription.text() == ''){
            //     alert('Give your service a description.');
            // }
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
                // alert('Enter the number of hardcover books you have ready to ship in the Stock field on the Inventory tab. Enter the hardcover weight in the Shipping tab.');
                this.stockInput.val(0);
            }
            this.taxClassDropdown.val('physical-books-35010000');
            this.taxStatusDropdown.val('taxable');
            this.digitalZineCheckbox.prop('checked', false);
            this.physicalZineCheckbox.prop('checked', false);
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
                // alert('Enter the number of paperback books you have ready to ship in the Stock field on the Inventory tab. Enter the paperback weight in the Shipping tab.');
                this.stockInput.val(0);
            }
            this.taxClassDropdown.val('physical-books-35010000');
            this.taxStatusDropdown.val('taxable');
            this.digitalZineCheckbox.prop('checked', false);
            this.physicalZineCheckbox.prop('checked', false);
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
        if (this.ebookCatCheckbox.is(":checked")){
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
        if (this.digitalZineCheckbox.is(":checked")){
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
        if (this.physicalZineCheckbox.is(":checked")){
            this.virtualCheckbox.prop('checked', false);
            this.downloadableCheckbox.prop('checked', false);
            this.hardcoverCatCheckbox.prop('checked', false);
            this.uncategorizedCatCheckbox.prop('checked', false);
            this.ebookCatCheckbox.prop('checked', false);
            this.audiobookCatCheckbox.prop('checked', false);
            this.manageStockCheckbox.prop('checked', true);
            this.stockFieldGroup.css('display', 'block');
            if (this.stockInput.val() == '' || Number(this.stockInput.val()) == 0 || isNaN(this.stockInput.val())){
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
        if (this.audiobookCatCheckbox.is(":checked")){
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