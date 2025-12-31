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
        this.noMinError = $('#tomc-mvx-nyp-enable--no-min-error');
        this.lowMinWarning = $('#tomc-mvx-nyp-enable--low-min-warning');
        this.events();
    }

    events(){
        this.enableOverlayCloseButton.on('click', this.closeEnableOverlay.bind(this));
        this.enableOverlayCancel.on('click', this.closeEnableOverlay.bind(this));
        this.enableOverlayLink.on('click', this.openEnableOverlay.bind(this));
        this.manageOverlayLink.on('click', this.openEnableOverlay.bind(this));
        this.enableButton.on('click', this.enableSettings.bind(this));
    }

    closeEnableOverlay(){
        this.enableOverlay.addClass('hidden');
    }
    openEnableOverlay(e){
        this.minPriceInput.val($(e.target).data('min'));
        this.maxPriceInput.val($(e.target).data('max'));
        this.enableButton.attr('data-id', $(e.target).data('id'));
        this.enableButton.attr('data-category', $(e.target).data('category'));
        this.enableOverlay.removeClass('hidden');
    }
    enableSettings(e){
        //move this into a function that conditionally shows/hides messages and enable button when the value in the min/max inputs is changed
        if (($(e.target).data('category') == 51) || $(e.target).data('category') == 50){ //paperback: 51 for dev, 84 for prod; hardcover: 50 for dev, 85 for prod
            if (parseInt(this.minPriceInput.val, 10) < 1){
                this.noMinError.removeClass('hidden');
                this.lowMinWarning.addClass('hidden');
            } else if (parseInt(this.minPriceInput.val, 10) < 10){
                this.noMinError.addClass('hidden');
                this.lowMinWarning.removeClass('hidden');
            }
        }
    }
}

export default NYPExtension;