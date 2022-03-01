const {Selector} = require('testcafe');

// Selectors

function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}

exports.provus = {
    url: function() {
        return 'https://github.com/';
    },
    searchBox: function() {
        return select('.header-search-input');
    },
    firstSearchResult: function() {
        return Selector('.repo-list-item').nth(0).with({boundTestRun: testController});
    },
    loginButton: function() {
        return select('.btn.btn-primary.btn-block');
    },
    loginErrorMessage: function() {
        return select('#js-flash-container > div > div');
    },
    searchButton: function() {
        return select('.header-search-input');
    },
    firstSearchResult: function() {
        return Selector('.repo-list-item').nth(0).with({boundTestRun: testController});
    },
    // Provus
    usernameTextBox: function() {
        return Selector('#username');
    },
    passwordTextBox: function() {
        return Selector('#password');
    },
    loginButton: function() {
        return Selector('#Login');
    },
    rateCardsButton: function() {
        return Selector(() => document.querySelector('one-appnav').shadowRoot.querySelector('one-app-nav-bar').shadowRoot.querySelectorAll('one-app-nav-bar-item-root')[7].shadowRoot.querySelector('span.slds-truncate'));                                      
    },
    newButton: function() {
        return Selector(() => document.querySelectorAll('a.forceActionLink')[0]);
    },
    rateCardNameSelector: function() {
        return Selector(() => document.querySelector('records-modal-lwc-detail-panel-wrapper').shadowRoot.querySelector('records-lwc-detail-panel').shadowRoot.querySelector('records-base-record-form').shadowRoot.querySelector('records-lwc-record-layout').shadowRoot.querySelector('forcegenerated-detailpanel_psq__ratecard__c___012000000000000aaa___full___create___recordlayout2').shadowRoot.querySelector('records-record-layout-base-input').shadowRoot.querySelector('lightning-input').shadowRoot.querySelector('input.slds-input'));
    },
    assignedToAccount: function() {
        return Selector(() => document.querySelector('records-modal-lwc-detail-panel-wrapper').shadowRoot.querySelector('records-lwc-detail-panel').shadowRoot.querySelector('records-base-record-form').shadowRoot.querySelector('records-lwc-record-layout').shadowRoot.querySelector('forcegenerated-detailpanel_psq__ratecard__c___012000000000000aaa___full___create___recordlayout2').shadowRoot.querySelectorAll('records-record-layout-lookup')[0].shadowRoot.querySelector('lightning-lookup').shadowRoot.querySelector('lightning-lookup-desktop').shadowRoot.querySelector('lightning-grouped-combobox').shadowRoot.querySelector('lightning-base-combobox').shadowRoot.querySelector('input.slds-combobox__input.slds-input'));
    },
    errorMessgeActual: function() {
        return Selector(() => document.querySelector('records-modal-lwc-detail-panel-wrapper').shadowRoot.querySelector('records-lwc-detail-panel').shadowRoot.querySelector('records-base-record-form').shadowRoot.querySelector('records-lwc-record-layout').shadowRoot.querySelector('forcegenerated-detailpanel_psq__ratecard__c___012000000000000aaa___full___create___recordlayout2').shadowRoot.querySelectorAll('lightning-input')[0].shadowRoot.querySelector('lightning-datepicker').shadowRoot.querySelector('div.slds-form-element__help')).with({boundTestRun: testController});
    },
    effectiveDate: function() {
        return Selector(() => document.querySelector('records-modal-lwc-detail-panel-wrapper').shadowRoot.querySelector('records-lwc-detail-panel').shadowRoot.querySelector('records-base-record-form').shadowRoot.querySelector('records-lwc-record-layout').shadowRoot.querySelector('forcegenerated-detailpanel_psq__ratecard__c___012000000000000aaa___full___create___recordlayout2').shadowRoot.querySelectorAll('lightning-input')[0].shadowRoot.querySelector('lightning-datepicker').shadowRoot.querySelector('input.slds-input'));
    },
    expirationDate: function() {
        return Selector(() => document.querySelector('records-modal-lwc-detail-panel-wrapper').shadowRoot.querySelector('records-lwc-detail-panel').shadowRoot.querySelector('records-base-record-form').shadowRoot.querySelector('records-lwc-record-layout').shadowRoot.querySelector('forcegenerated-detailpanel_psq__ratecard__c___012000000000000aaa___full___create___recordlayout2').shadowRoot.querySelectorAll('lightning-input')[1].shadowRoot.querySelector('lightning-datepicker').shadowRoot.querySelector('input.slds-input'));
    },
    activeCheckBox: function() {
        return Selector(() => document.querySelector('records-modal-lwc-detail-panel-wrapper').shadowRoot.querySelector('records-lwc-detail-panel').shadowRoot.querySelector('records-base-record-form').shadowRoot.querySelector('records-lwc-record-layout').shadowRoot.querySelector('forcegenerated-detailpanel_psq__ratecard__c___012000000000000aaa___full___create___recordlayout2').shadowRoot.querySelector('records-record-layout-checkbox').shadowRoot.querySelector('lightning-input').shadowRoot.querySelector('input'));
    },
    saveButton: function() {
        return Selector(() => document.querySelector('records-modal-lwc-detail-panel-wrapper').shadowRoot.querySelector('records-lwc-detail-panel').shadowRoot.querySelector('records-base-record-form').shadowRoot.querySelector('records-form-footer').shadowRoot.querySelector('runtime_platform_actions-actions-ribbon').shadowRoot.querySelectorAll('runtime_platform_actions-action-renderer')[2].shadowRoot.querySelector('lightning-button').shadowRoot.querySelector('button.slds-button.slds-button_brand'));
    },
    // Quotes
    quotesButton: function() {
        return Selector(() => document.querySelector('one-appnav').shadowRoot.querySelector('one-app-nav-bar').shadowRoot.querySelectorAll('one-app-nav-bar-item-root')[4].shadowRoot.querySelector('span.slds-truncate'));
        //return Selector(() => "a[title=\"Quotes\"]");
    },
    serviceStartDate: function() {
        return Selector(() => document.querySelector('one-record-action-flexipage').shadowRoot.querySelector('forcegenerated-adg-rollup_component___force-generated__flexipage_-record-page___-p-s-q__-quote___-p-s-q__-quote__c___create').shadowRoot.querySelector('forcegenerated-flexipage_psq__quote_psq__quote__c__create_js').shadowRoot.querySelectorAll('lightning-input')[1].shadowRoot.querySelector('lightning-datepicker').shadowRoot.querySelector('input.slds-input'));
    },
    serviceEndDate: function() {
        return Selector(() => document.querySelector('one-record-action-flexipage').shadowRoot.querySelector('forcegenerated-adg-rollup_component___force-generated__flexipage_-record-page___-p-s-q__-quote___-p-s-q__-quote__c___create').shadowRoot.querySelector('forcegenerated-flexipage_psq__quote_psq__quote__c__create_js').shadowRoot.querySelectorAll('lightning-input')[2].shadowRoot.querySelector('lightning-datepicker').shadowRoot.querySelector('input.slds-input'));
    },
    rateCard_Quote: function() {
        return Selector(() => document.querySelector('one-record-action-flexipage').shadowRoot.querySelector('forcegenerated-adg-rollup_component___force-generated__flexipage_-record-page___-p-s-q__-quote___-p-s-q__-quote__c___create').shadowRoot.querySelector('forcegenerated-flexipage_psq__quote_psq__quote__c__create_js').shadowRoot.querySelector('records-record-layout-lookup').shadowRoot.querySelector('lightning-lookup').shadowRoot.querySelector('lightning-lookup-desktop').shadowRoot.querySelector('lightning-grouped-combobox').shadowRoot.querySelector('lightning-base-combobox').shadowRoot.querySelector('input.slds-combobox__input.slds-input'));
    },
    rateCardNameDropDown: function() {
        return Selector(() => document.querySelector('one-record-action-flexipage').shadowRoot.querySelector('forcegenerated-adg-rollup_component___force-generated__flexipage_-record-page___-p-s-q__-quote___-p-s-q__-quote__c___create').shadowRoot.querySelector('forcegenerated-flexipage_psq__quote_psq__quote__c__create_js').shadowRoot.querySelector('records-record-layout-lookup').shadowRoot.querySelector('lightning-lookup').shadowRoot.querySelector('lightning-lookup-desktop').shadowRoot.querySelector('lightning-grouped-combobox').shadowRoot.querySelector('lightning-base-combobox').shadowRoot.querySelectorAll('lightning-base-combobox-item')[1].shadowRoot.querySelector('lightning-base-combobox-formatted-text.slds-truncate')).with({boundTestRun: testController});
    },
    errorMessgeSnagActual: function() {
        return Selector(() => document.querySelector('records-record-edit-error-header').shadowRoot.querySelector('h2.slds-truncate.slds-text-heading_medium')).with({boundTestRun: testController});
    },
    expirationDateError: function() {
        return Selector(() => document.querySelector('records-modal-lwc-detail-panel-wrapper').shadowRoot.querySelector('records-lwc-detail-panel').shadowRoot.querySelector('records-base-record-form').shadowRoot.querySelector('records-lwc-record-layout').shadowRoot.querySelector('forcegenerated-detailpanel_psq__ratecard__c___012000000000000aaa___full___create___recordlayout2').shadowRoot.querySelectorAll('lightning-input')[1].shadowRoot.querySelector('lightning-datepicker').shadowRoot.querySelector('div.slds-form-element__help')).with({boundTestRun: testController});
    },
    saveButtonQuotePopUp: function() {
        return Selector(() => document.querySelector('one-record-action-flexipage').shadowRoot.querySelector('forcegenerated-adg-rollup_component___force-generated__flexipage_-record-page___-p-s-q__-quote___-p-s-q__-quote__c___create').shadowRoot.querySelector('forcegenerated-flexipage_psq__quote_psq__quote__c__create_js').shadowRoot.querySelector('record_flexipage-record-page-decorator').shadowRoot.querySelector('records-form-footer').shadowRoot.querySelector('runtime_platform_actions-actions-ribbon').shadowRoot.querySelectorAll('runtime_platform_actions-action-renderer')[2].shadowRoot.querySelector('lightning-button').shadowRoot.querySelector('button.slds-button.slds-button_brand'));
    },                        
    quoteNameSelector: function() {
        return Selector(() => document.querySelector('one-record-action-flexipage').shadowRoot.querySelector('forcegenerated-adg-rollup_component___force-generated__flexipage_-record-page___-p-s-q__-quote___-p-s-q__-quote__c___create').shadowRoot.querySelector('forcegenerated-flexipage_psq__quote_psq__quote__c__create_js').shadowRoot.querySelector('records-record-layout-base-input').shadowRoot.querySelector('lightning-input').shadowRoot.querySelector('input.slds-input'));
    },
    newRateCardQuote: function() {
        return Selector(() => document.querySelector('one-record-action-flexipage').shadowRoot.querySelector('forcegenerated-adg-rollup_component___force-generated__flexipage_-record-page___-p-s-q__-quote___-p-s-q__-quote__c___create').shadowRoot.querySelector('forcegenerated-flexipage_psq__quote_psq__quote__c__create_js').shadowRoot.querySelector('records-record-layout-lookup').shadowRoot.querySelector('lightning-lookup').shadowRoot.querySelector('lightning-lookup-desktop').shadowRoot.querySelector('lightning-grouped-combobox').shadowRoot.querySelector('lightning-base-combobox').shadowRoot.querySelector('lightning-base-combobox-item').shadowRoot.querySelector('span.slds-truncate')).with({boundTestRun: testController});
    },
    addResourceCancelButton: function() {
        return Selector(() => document.querySelector('psq-resource-role-dialog').shadowRoot.querySelectorAll('lightning-button')[0].shadowRoot.querySelector('button.slds-button.slds-button_neutral')).with({boundTestRun: testController});
    },
    quoteHeader: function() {
        return Selector(() => document.querySelectorAll('one-record-home-flexipage2')[3].shadowRoot.querySelector('forcegenerated-adg-rollup_component___force-generated__flexipage_-record-page___-p-s-q__-quote___-p-s-q__-quote__c___-v-i-e-w').shadowRoot.querySelector('forcegenerated-flexipage_psq__quote_psq__quote__c__view_js').shadowRoot.querySelector('records-lwc-highlights-panel').shadowRoot.querySelector('records-lwc-record-layout').shadowRoot.querySelector('forcegenerated-highlightspanel_psq__quote__c___012000000000000aaa___compact___view___recordlayout2').shadowRoot.querySelectorAll('lightning-formatted-text')[0]).with({boundTestRun: testController});
    },
    discountButton: function() {
        return Selector(() => document.querySelector(button[name='PSQ__Quote__c.PSQ__Discount']));
    },
};
