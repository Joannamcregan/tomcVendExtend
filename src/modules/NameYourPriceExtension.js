import $ from 'jquery';

class NYPExtension {
    constructor() {
        this.enableOverlay = $('#tomc-mvx-nyp-enable--overlay');
        this.enableOverlayCloseButton = $('#tomc-mvx-nyp-enable--overlay svg.search-overlay__close');
        this.enableOverlayLink = $('#tomc-name-price-open-overlay');
        this.manageOverlayLink = $('#tomc-name-price-manage-overlay');
        this.enableOverlayCancel = $('#tomc-mvx-nyp-cancel-button');
        this.minPriceInput = $('#tomc-mvx-nyp-min-price');
        this.maxPriceInput = $('#tomc-mvx-nyp-max-price');
        this.enableButton = $('#tomc-mvx-nyp-enable-button');
        this.lowMinWarning = $('#tomc-mvx-nyp-enable--low-min-warning');
        this.negativeMinError = $('#tomc-mvx-nyp-enable--negative-min-error');
        this.lowerMaxError = $('#tomc-mvx-nyp-enable--lower-max-error');
        this.zeroMaxError = $('#tomc-mvx-nyp-enable--zero-max-error');
        this.disableOverlay = $('#tomc-mvx-nyp-disable--overlay');
        this.disableOverlayCloseButton = $('#tomc-mvx-nyp-disable--overlay svg.search-overlay__close');
        this.disableOverlayCancel = $('#tomc-mvx-nyp-disable-cancel-button');
        this.disableOverlayLink = $('#tomc-name-price-disable-overlay-link');
        this.disableButton = $('#tomc-mvx-nyp-disable-button');
        this.events();
    }

    events(){
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

    closeEnableOverlay(){
        this.enableOverlay.addClass('hidden');
    }
    closeDisableOverlay(){
        this.disableOverlay.addClass('hidden');
    }
    openDisableOverlay(e){
        this.disableButton.attr('data-id', $(e.target).data('id'));
        this.disableOverlay.removeClass('hidden');
    }
    openEnableOverlay(e){
        this.minPriceInput.val($(e.target).data('min'));
        this.maxPriceInput.val($(e.target).data('max'));
        this.enableButton.attr('data-id', $(e.target).data('id'));
        this.enableButton.attr('data-category', $(e.target).data('category'));
        this.enableButton.removeClass('hidden');
        this.lowMinWarning.addClass('hidden');
        this.negativeMinError.addClass('hidden');
        this.lowerMaxError.addClass('hidden');
        this.zeroMaxError.addClass('hidden');
        if (($(e.target).data('category') == 55) || ($(e.target).data('category') == 50) || (this.enableButton.data('category') == 86)){
            if (parseInt(this.minPriceInput.val(), 10) < 10){
                this.lowMinWarning.removeClass('hidden');
            }
        }
        this.enableOverlay.removeClass('hidden');
    }
    disableSettings(e){
        $.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
            },
            url: tomcBookorgData.root_url + '/wp-json/tomcMVXtendNYP/v1/disableNYP',
            type: 'POST',
            data: {
                'id' : $(e.target).data('id')
            },
            success: (response) => {
                location.reload(true);
            },
            failure: (response) => {
                //console.log(response);
            }
        })
    }
    enableSettings(e){
        $.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
            },
            url: tomcBookorgData.root_url + '/wp-json/tomcMVXtendNYP/v1/enableNYP',
            type: 'POST',
            data: {
                'id' : $(e.target).data('id'),
                'min' : this.minPriceInput.val(),
                'max' : this.maxPriceInput.val()
            },
            success: (response) => {
                location.reload(true);
            },
            failure: (response) => {
                //console.log(response);
            }
        })
    }
    validateMinMax(){
        let allowEnable = true;
        if (parseInt(this.minPriceInput.val()) !== parseInt(this.minPriceInput.val())){
            this.minPriceInput.val('');
        } else if (this.minPriceInput.val() != ''){
            this.minPriceInput.val(parseInt(this.minPriceInput.val()));
        }
        if (parseInt(this.maxPriceInput.val()) !== parseInt(this.maxPriceInput.val())){
            this.maxPriceInput.val('');
        } else if (this.maxPriceInput.val() != ''){
            this.maxPriceInput.val(parseInt(this.maxPriceInput.val()));
        }
        if (this.maxPriceInput.val() < 0){
            this.maxPriceInput.val(0);
        }
        if ((parseInt(this.minPriceInput.val(), 10) < 0)){
            this.negativeMinError.removeClass('hidden');
            allowEnable = false;
        } else {
            this.negativeMinError.addClass('hidden');
        }
        if ((parseInt(this.maxPriceInput.val(), 10) <= parseInt(this.minPriceInput.val(), 10)) || (this.minPriceInput.val() == '' && this.maxPriceInput.val() !== '')){
            this.lowerMaxError.removeClass('hidden');
            allowEnable = false;
        } else {
            this.lowerMaxError.addClass('hidden');
        }
        if (parseInt(this.maxPriceInput.val(), 10) < 1){
            this.zeroMaxError.removeClass('hidden');
            allowEnable = false;
        } else {
            this.zeroMaxError.addClass('hidden');
        }
        if ((this.enableButton.data('category') == 55) || (this.enableButton.data('category') == 50) || (this.enableButton.data('category') == 86)){ //paperbacks, hardcovers, physical zines
            if ((parseInt(this.minPriceInput.val(), 10) < 10) || (this.minPriceInput.val() == '')){
                this.lowMinWarning.removeClass('hidden');
            } else {
                this.lowMinWarning.addClass('hidden');
            }
        }
        if (allowEnable){
            this.enableButton.removeClass('hidden');
        } else {
            this.enableButton.addClass('hidden');
        }
    }
}

export default NYPExtension;