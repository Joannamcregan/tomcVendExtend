import $ from 'jquery';

class NYPExtension {
    constructor() {
        this.enableOverlay = $('#tomc-mvx-nyp-enable--overlay');
        this.enableOverlayCloseButton = $('#tomc-mvx-nyp-enable--overlay svg.search-overlay__close');
        this.enableOverlayLink = $('#tomc-name-price-open-overlay');
        this.enableOverlayCancel = $('#tomc-mvx-nyp-cancel-button');
        this.minPriceInput = $('#tomc-mvx-nyp-min-price');
        this.maxPriceInput = $('#tomc-mvx-nyp-max-price');
        this.enableButton = $('#tomc-mvx-nyp-enable-button');
        this.events();
    }

    events(){
        this.enableOverlayCloseButton.on('click', this.closeEnableOverlay.bind(this));
        this.enableOverlayCancel.on('click', this.closeEnableOverlay.bind(this));
        this.enableOverlayLink.on('click', this.openEnableOverlay.bind(this));
    }

    closeEnableOverlay(){
        this.enableOverlay.addClass('hidden');
    }
    openEnableOverlay(e){
        this.minPriceInput.val($(e.target).data('min'));
        this.maxPriceInput.val($(e.target).data('max'));
        this.enableButton.attr('data-id', $(e.target).data('id'));
        this.enableOverlay.removeClass('hidden');
    }
}

export default NYPExtension;