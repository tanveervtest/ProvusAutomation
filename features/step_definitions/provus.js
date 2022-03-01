const {Given, When, Then} = require('cucumber');
const Selector = require('testcafe').Selector;
const ProvusPage = require('../support/pages/provusPage');

var rateCardName;
Given('I open Provus\'s login page', async function() {
    await testController.navigateTo('https://login.salesforce.com');
    // await testController.navigateTo('login.salesforce.com');
});

When('I am perform login through crdentials', async function () {    
    await this.addScreenshotToReport();
    //await testController.typeText(ProvusPage.provus.usernameTextBox(), 'imran@provusinc.com.next.auto');
    await testController.typeText(ProvusPage.provus.usernameTextBox(), 'imran@provusinc.com.auto');
    await testController.typeText(ProvusPage.provus.passwordTextBox(), 'salesforce@123');
    await testController.click(ProvusPage.provus.loginButton()).wait(10000);
  });

  When('I am clicking on Rate Cards', async function () {    
    //var rateCardsButton =Selector(() => document.querySelector('one-appnav').shadowRoot.querySelector('one-app-nav-bar').shadowRoot.querySelectorAll('one-app-nav-bar-item-root')[7].shadowRoot.querySelector('span.slds-truncate'));                                      
    await this.addScreenshotToReport();    
    //await testController.click(rateCardsButton);
    await testController.click(ProvusPage.provus.rateCardsButton()).wait(6000);
  });

  When('I am clicking on New Button', async function () {    
    //var newButton =Selector(() => document.querySelectorAll('a.forceActionLink')[0]);
    await this.addScreenshotToReport();    
    await testController.click(ProvusPage.provus.newButton()).wait(6000);
  });

  Then('I will enter Rate card name as {string}', async function (ratecard) {
    //var rateCardNameSelector =Selector(() => document.querySelector('records-modal-lwc-detail-panel-wrapper').shadowRoot.querySelector('records-lwc-detail-panel').shadowRoot.querySelector('records-base-record-form').shadowRoot.querySelector('records-lwc-record-layout').shadowRoot.querySelector('forcegenerated-detailpanel_psq__ratecard__c___012000000000000aaa___full___create___recordlayout2').shadowRoot.querySelector('records-record-layout-base-input').shadowRoot.querySelector('lightning-input').shadowRoot.querySelector('input.slds-input'));
    //var saveButton =Selector(() => document.querySelector('records-modal-lwc-detail-panel-wrapper').shadowRoot.querySelector('records-lwc-detail-panel').shadowRoot.querySelector('records-base-record-form').shadowRoot.querySelector('records-form-footer').shadowRoot.querySelector('runtime_platform_actions-actions-ribbon').shadowRoot.querySelectorAll('runtime_platform_actions-action-renderer')[2].shadowRoot.querySelector('lightning-button').shadowRoot.querySelector('button.slds-button.slds-button_brand'));
    var datetime = new Date().toLocaleString();
    rateCardName=ratecard+' '+datetime;
    await this.addScreenshotToReport();    
    await testController.typeText(ProvusPage.provus.rateCardNameSelector(),rateCardName);
    //await testController.click(saveButton);
  });

  Then('I will check active checkbox', async function () {    
    await this.addScreenshotToReport();    
    await testController.click(ProvusPage.provus.activeCheckBox());    
  });

  Then('I will enter aasigned to account as {string}', async function (assignedToAccountValue) {
    //var assignedToAccount =Selector(() => document.querySelector('records-modal-lwc-detail-panel-wrapper').shadowRoot.querySelector('records-lwc-detail-panel').shadowRoot.querySelector('records-base-record-form').shadowRoot.querySelector('records-lwc-record-layout').shadowRoot.querySelector('forcegenerated-detailpanel_psq__ratecard__c___012000000000000aaa___full___create___recordlayout2').shadowRoot.querySelectorAll('records-record-layout-lookup')[0].shadowRoot.querySelector('lightning-lookup').shadowRoot.querySelector('lightning-lookup-desktop').shadowRoot.querySelector('lightning-grouped-combobox').shadowRoot.querySelector('lightning-base-combobox').shadowRoot.querySelector('input.slds-combobox__input.slds-input'));
    await this.addScreenshotToReport();    
    await testController.typeText(ProvusPage.provus.assignedToAccount(),assignedToAccountValue);
  });

  Then('I will verify error as {string}', async function (errorValueExpected) {
    //var errorMessgeActual =Selector(() => document.querySelector('records-modal-lwc-detail-panel-wrapper').shadowRoot.querySelector('records-lwc-detail-panel').shadowRoot.querySelector('records-base-record-form').shadowRoot.querySelector('records-lwc-record-layout').shadowRoot.querySelector('forcegenerated-detailpanel_psq__ratecard__c___012000000000000aaa___full___create___recordlayout2').shadowRoot.querySelectorAll('lightning-input')[0].shadowRoot.querySelector('lightning-datepicker').shadowRoot.querySelector('div.slds-form-element__help')).with({boundTestRun: testController});        
    await this.addScreenshotToReport();      
    await testController.expect(ProvusPage.provus.errorMessgeActual().innerText).eql(errorValueExpected,'Error message verified','');
  });

  Then('I will verify We hit a snag error as {string}', async function (errorValueExpected) {    
    await this.addScreenshotToReport();      
    await testController.expect(ProvusPage.provus.errorMessgeSnagActual().innerText).eql(errorValueExpected,'Error message verified','');
  });

  Then('I will verify expiration date error as {string}', async function (errorValueExpected) {
    //var errorMessgeActual =Selector(() => document.querySelector('records-modal-lwc-detail-panel-wrapper').shadowRoot.querySelector('records-lwc-detail-panel').shadowRoot.querySelector('records-base-record-form').shadowRoot.querySelector('records-lwc-record-layout').shadowRoot.querySelector('forcegenerated-detailpanel_psq__ratecard__c___012000000000000aaa___full___create___recordlayout2').shadowRoot.querySelectorAll('lightning-input')[0].shadowRoot.querySelector('lightning-datepicker').shadowRoot.querySelector('div.slds-form-element__help')).with({boundTestRun: testController});        
    await this.addScreenshotToReport();      
    await testController.expect(ProvusPage.provus.expirationDateError().innerText).eql(errorValueExpected,'Error message verified','');
  });

  Then('I will enter Effective date as {string}', async function (input_EffectiveDate) {
    //var effectiveDate =Selector(() => document.querySelector('records-modal-lwc-detail-panel-wrapper').shadowRoot.querySelector('records-lwc-detail-panel').shadowRoot.querySelector('records-base-record-form').shadowRoot.querySelector('records-lwc-record-layout').shadowRoot.querySelector('forcegenerated-detailpanel_psq__ratecard__c___012000000000000aaa___full___create___recordlayout2').shadowRoot.querySelectorAll('lightning-input')[0].shadowRoot.querySelector('lightning-datepicker').shadowRoot.querySelector('input.slds-input'));
    await testController.typeText(ProvusPage.provus.effectiveDate(),input_EffectiveDate);
  });

  Then('I will enter Expiration date as {string}', async function (input_ExpirationDate) {
    //var expirationDate =Selector(() => document.querySelector('records-modal-lwc-detail-panel-wrapper').shadowRoot.querySelector('records-lwc-detail-panel').shadowRoot.querySelector('records-base-record-form').shadowRoot.querySelector('records-lwc-record-layout').shadowRoot.querySelector('forcegenerated-detailpanel_psq__ratecard__c___012000000000000aaa___full___create___recordlayout2').shadowRoot.querySelectorAll('lightning-input')[1].shadowRoot.querySelector('lightning-datepicker').shadowRoot.querySelector('input.slds-input'));
    await testController.typeText(ProvusPage.provus.expirationDate(),input_ExpirationDate);
  });

  Then('I will click on save button', async function () {
    //var saveButton =Selector(() => document.querySelector('records-modal-lwc-detail-panel-wrapper').shadowRoot.querySelector('records-lwc-detail-panel').shadowRoot.querySelector('records-base-record-form').shadowRoot.querySelector('records-form-footer').shadowRoot.querySelector('runtime_platform_actions-actions-ribbon').shadowRoot.querySelectorAll('runtime_platform_actions-action-renderer')[2].shadowRoot.querySelector('lightning-button').shadowRoot.querySelector('button.slds-button.slds-button_brand'));
    await testController.click(ProvusPage.provus.saveButton()).wait(6000);
  });

  // Quotes
  When('I will click on Quotes button', async function () {    
    //var quotesButton = XPathSelector('//div//one-app-nav-bar-item-root/a[@title="Quotes"]');
    await this.addScreenshotToReport();    
    //await testController.click(quotesButton);
    await testController.click(ProvusPage.provus.quotesButton()).wait(6000);
  });

  Then('I will enter Service start date as {string}', async function (input_ServiceStartDate) {    
    await testController.typeText(ProvusPage.provus.serviceStartDate(),input_ServiceStartDate);
  });

  Then('I will enter Service end date as {string}', async function (input_ServiceEndDate) {    
    await testController.typeText(ProvusPage.provus.serviceEndDate(),input_ServiceEndDate);
  });

  Then('I will verify rate card in dropdown', async function () {    
    await this.addScreenshotToReport();            
    await testController.scrollIntoView(ProvusPage.provus.rateCard_Quote(), { offsetX: 0, offsetY: 100 }).wait(6000);
    await testController.typeText(ProvusPage.provus.rateCard_Quote(), rateCardName).wait(6000);    
    await testController.expect(ProvusPage.provus.rateCardNameDropDown().innerText).eql(rateCardName,'Rate Card Verified','');
  });

  Then('I will select the rate card in dropdown', async function () {    
    await this.addScreenshotToReport();            
    // await testController.scrollIntoView(ProvusPage.provus.rateCard_Quote(), { offsetX: 0, offsetY: 100 }).wait(6000);
    // await testController.typeText(ProvusPage.provus.rateCard_Quote(), rateCardName).wait(6000);    
    //await testController.expect(ProvusPage.provus.rateCardNameDropDown().innerText).eql(rateCardName,'Rate Card Verified','');
    await testController.click(ProvusPage.provus.rateCardNameDropDown()).wait(4000);
  });

  Then('I will select Time Periods Alignmnet value as {string}', async function (input_TimePeriodsAlignment) {
    await this.addScreenshotToReport(); 
    const timePeriodsAlignment =Selector(() => document.querySelector('one-record-action-flexipage').shadowRoot.querySelector('forcegenerated-adg-rollup_component___force-generated__flexipage_-record-page___-p-s-q__-quote___-p-s-q__-quote__c___create').shadowRoot.querySelector('forcegenerated-flexipage_psq__quote_psq__quote__c__create_js').shadowRoot.querySelectorAll('records-record-picklist')[3].shadowRoot.querySelector('records-form-picklist').shadowRoot.querySelector('lightning-picklist').shadowRoot.querySelector('lightning-combobox').shadowRoot.querySelector('lightning-base-combobox').shadowRoot.querySelector('button.slds-combobox__input.slds-input_faux.slds-combobox__input-value'));               
    const calendar =Selector(() => document.querySelector('one-record-action-flexipage').shadowRoot.querySelector('forcegenerated-adg-rollup_component___force-generated__flexipage_-record-page___-p-s-q__-quote___-p-s-q__-quote__c___create').shadowRoot.querySelector('forcegenerated-flexipage_psq__quote_psq__quote__c__create_js').shadowRoot.querySelectorAll('records-record-picklist')[3].shadowRoot.querySelector('records-form-picklist').shadowRoot.querySelector('lightning-picklist').shadowRoot.querySelector('lightning-combobox').shadowRoot.querySelector('lightning-base-combobox').shadowRoot.querySelectorAll('lightning-base-combobox-item')[3].shadowRoot.querySelector('span.slds-truncate'));
    //const timePeriodsAlignment = Selector('#dropdown-element-898');
    //const dropdownOption = timePeriodsAlignment.find('div').nth(1).find('lightning-base-combobox-item').nth(3).find('span').nth(1).find('span');                                             
    //await testController.click(timePeriodsAlignment).click(dropdownOption.withText(input_TimePeriodsAlignment));
    await testController.click(timePeriodsAlignment).click(calendar).wait(4000);
  });

  Then('I will select Time Periods value as {string}', async function (input_TimePeriodsAlignment) {
    await this.addScreenshotToReport(); 
    const timePeriods =Selector(() => document.querySelector('one-record-action-flexipage').shadowRoot.querySelector('forcegenerated-adg-rollup_component___force-generated__flexipage_-record-page___-p-s-q__-quote___-p-s-q__-quote__c___create').shadowRoot.querySelector('forcegenerated-flexipage_psq__quote_psq__quote__c__create_js').shadowRoot.querySelectorAll('records-record-picklist')[4].shadowRoot.querySelector('records-form-picklist').shadowRoot.querySelector('lightning-picklist').shadowRoot.querySelector('lightning-combobox').shadowRoot.querySelector('lightning-base-combobox').shadowRoot.querySelector('button.slds-combobox__input.slds-input_faux.slds-combobox__input-value'));               
    const months =Selector(() => document.querySelector('one-record-action-flexipage').shadowRoot.querySelector('forcegenerated-adg-rollup_component___force-generated__flexipage_-record-page___-p-s-q__-quote___-p-s-q__-quote__c___create').shadowRoot.querySelector('forcegenerated-flexipage_psq__quote_psq__quote__c__create_js').shadowRoot.querySelectorAll('records-record-picklist')[4].shadowRoot.querySelector('records-form-picklist').shadowRoot.querySelector('lightning-picklist').shadowRoot.querySelector('lightning-combobox').shadowRoot.querySelector('lightning-base-combobox').shadowRoot.querySelectorAll('lightning-base-combobox-item')[1].shadowRoot.querySelector('span.slds-truncate'));
    await testController.click(timePeriods).click(months).wait(4000);
  });

  Then('I will select Time Periods Group Method value as {string}', async function (input_TimePeriodsGroup) {
    await this.addScreenshotToReport(); 
    const timePeriodsGroup =Selector(() => document.querySelector('one-record-action-flexipage').shadowRoot.querySelector('forcegenerated-adg-rollup_component___force-generated__flexipage_-record-page___-p-s-q__-quote___-p-s-q__-quote__c___create').shadowRoot.querySelector('forcegenerated-flexipage_psq__quote_psq__quote__c__create_js').shadowRoot.querySelectorAll('records-record-picklist')[5].shadowRoot.querySelector('records-form-picklist').shadowRoot.querySelector('lightning-picklist').shadowRoot.querySelector('lightning-combobox').shadowRoot.querySelector('lightning-base-combobox').shadowRoot.querySelector('button.slds-combobox__input.slds-input_faux.slds-combobox__input-value'));               
    const year =Selector(() => document.querySelector('one-record-action-flexipage').shadowRoot.querySelector('forcegenerated-adg-rollup_component___force-generated__flexipage_-record-page___-p-s-q__-quote___-p-s-q__-quote__c___create').shadowRoot.querySelector('forcegenerated-flexipage_psq__quote_psq__quote__c__create_js').shadowRoot.querySelectorAll('records-record-picklist')[5].shadowRoot.querySelector('records-form-picklist').shadowRoot.querySelector('lightning-picklist').shadowRoot.querySelector('lightning-combobox').shadowRoot.querySelector('lightning-base-combobox').shadowRoot.querySelectorAll('lightning-base-combobox-item')[2].shadowRoot.querySelector('span.slds-truncate'));
    await testController.scrollIntoView(timePeriodsGroup, { offsetX: 0, offsetY: 150 }).wait(6000);
    await testController.click(timePeriodsGroup).click(year).wait(4000);
  });

  Then('I will click on quote pop up save button', async function () {
    //var saveButton =Selector(() => document.querySelector('records-modal-lwc-detail-panel-wrapper').shadowRoot.querySelector('records-lwc-detail-panel').shadowRoot.querySelector('records-base-record-form').shadowRoot.querySelector('records-form-footer').shadowRoot.querySelector('runtime_platform_actions-actions-ribbon').shadowRoot.querySelectorAll('runtime_platform_actions-action-renderer')[2].shadowRoot.querySelector('lightning-button').shadowRoot.querySelector('button.slds-button.slds-button_brand'));
    await testController.click(ProvusPage.provus.saveButtonQuotePopUp()).wait(6000);
  });

  Then('I will enter Quote name as {string}', async function (inputQuoteName) {
    var datetime = new Date().toLocaleString();
    quoteName=inputQuoteName+' '+datetime;
    await this.addScreenshotToReport();    
    await testController.typeText(ProvusPage.provus.quoteNameSelector(),quoteName);
  });

  Then('I will verify {string} should be displayed in dropdown', async function (newRateCard) {
    await this.addScreenshotToReport();            
    await testController.scrollIntoView(ProvusPage.provus.rateCard_Quote(), { offsetX: 0, offsetY: 100 }).wait(6000);
    await testController.click(ProvusPage.provus.rateCard_Quote()).wait(6000);    
    await testController.expect(ProvusPage.provus.newRateCardQuote().innerText).eql(newRateCard,'Rate Card Verified','');
  });

  Then('I will click on add resource cancel button', async function () {      
    await testController.click(ProvusPage.provus.addResourceCancelButton()).wait(6000);    
  });

  Then('I will verify Quote Header name', async function () {
    await testController.expect(ProvusPage.provus.quoteHeader().innerText).eql(quoteName,'Quote Verified','');
  });

  Then('I will click on discount button', async function () {
    //const buttons = document.querySelector("button[name='PSQ__Quote__c.PSQ__Discount']");

    //await testController.click(buttons).wait(6000);    
    await testController.click(ProvusPage.provus.discountButton()).wait(6000);    
  });
