const {Given, When, Then} = require('cucumber');
const { default: provusPage } = require('./provusPage');
const Selector = require('testcafe').Selector;

Given('I open Provus\'s login page', async function() {
    await testController.navigateTo('https://login.salesforce.com');
});

When('I am perform login through crdentials', async function () {
    var usernameTextBox = Selector('#username');
    var passwordTextBox = Selector('#password');
    var loginButton = Selector('#Login');
    await this.addScreenshotToReport();
    await testController.typeText(usernameTextBox, 'imran@provusinc.com.next.auto');
    await testController.typeText(passwordTextBox, 'salesforce@123');
    await testController.click(loginButton).wait(6000);
  });

  When('I am clicking on Rate Cards', async function () {    
    var rateCardsButton =Selector(() => document.querySelector('one-appnav').shadowRoot.querySelector('one-app-nav-bar').shadowRoot.querySelectorAll('one-app-nav-bar-item-root')[7].shadowRoot.querySelector('a.slds-context-bar__label-action.dndItem'));
    await this.addScreenshotToReport();    
    await testController.click(rateCardsButton).wait(6000);
  });

  When('I am clicking on New Button', async function () {    
    var newButton =Selector(() => document.querySelectorAll('a.forceActionLink')[0]);
    await this.addScreenshotToReport();    
    await testController.click(newButton).wait(6000);
  });

  Then('I will enter Rate card name as {string}', async function (ratecard) {
    var rateCardNameSelector =Selector(() => document.querySelector('records-modal-lwc-detail-panel-wrapper').shadowRoot.querySelector('records-lwc-detail-panel').shadowRoot.querySelector('records-base-record-form').shadowRoot.querySelector('records-lwc-record-layout').shadowRoot.querySelector('forcegenerated-detailpanel_psq__ratecard__c___012000000000000aaa___full___create___recordlayout2').shadowRoot.querySelector('records-record-layout-base-input').shadowRoot.querySelector('lightning-input').shadowRoot.querySelector('input.slds-input'));
    var saveButton =Selector(() => document.querySelector('records-modal-lwc-detail-panel-wrapper').shadowRoot.querySelector('records-lwc-detail-panel').shadowRoot.querySelector('records-base-record-form').shadowRoot.querySelector('records-form-footer').shadowRoot.querySelector('runtime_platform_actions-actions-ribbon').shadowRoot.querySelectorAll('runtime_platform_actions-action-renderer')[2].shadowRoot.querySelector('lightning-button').shadowRoot.querySelector('button.slds-button.slds-button_brand'));
    var datetime = new Date().toLocaleString();
    var rateCardName=ratecard+' '+datetime;
    await this.addScreenshotToReport();    
    await testController.typeText(rateCardNameSelector,rateCardName);
    //await testController.click(saveButton);
  });

  Then('I will enter aasigned to account as {string}', async function (assignedToAccountValue) {
    var assignedToAccount =Selector(() => document.querySelector('records-modal-lwc-detail-panel-wrapper').shadowRoot.querySelector('records-lwc-detail-panel').shadowRoot.querySelector('records-base-record-form').shadowRoot.querySelector('records-lwc-record-layout').shadowRoot.querySelector('forcegenerated-detailpanel_psq__ratecard__c___012000000000000aaa___full___create___recordlayout2').shadowRoot.querySelectorAll('records-record-layout-lookup')[0].shadowRoot.querySelector('lightning-lookup').shadowRoot.querySelector('lightning-lookup-desktop').shadowRoot.querySelector('lightning-grouped-combobox').shadowRoot.querySelector('lightning-base-combobox').shadowRoot.querySelector('input.slds-combobox__input.slds-input'));
    await this.addScreenshotToReport();    
    await testController.typeText(assignedToAccount,assignedToAccountValue);
  });

  Then('I will verify error as {string}', async function (errorValueExpected) {
    var errorMessgeActual =Selector(() => document.querySelector('records-modal-lwc-detail-panel-wrapper').shadowRoot.querySelector('records-lwc-detail-panel').shadowRoot.querySelector('records-base-record-form').shadowRoot.querySelector('records-lwc-record-layout').shadowRoot.querySelector('forcegenerated-detailpanel_psq__ratecard__c___012000000000000aaa___full___create___recordlayout2').shadowRoot.querySelectorAll('lightning-input')[0].shadowRoot.querySelector('lightning-datepicker').shadowRoot.querySelector('div.slds-form-element__help')).with({boundTestRun: testController});
        
    await this.addScreenshotToReport();      
    //console.log('Hello World');
    //console.log(errorMessgeActual.innerText);
    await testController.expect(errorMessgeActual.innerText).eql(errorValueExpected,'values equal','');
  });

  Then('I will enter Effective date as {string}', async function (input_EffectiveDate) {
    var effectiveDate =Selector(() => document.querySelector('records-modal-lwc-detail-panel-wrapper').shadowRoot.querySelector('records-lwc-detail-panel').shadowRoot.querySelector('records-base-record-form').shadowRoot.querySelector('records-lwc-record-layout').shadowRoot.querySelector('forcegenerated-detailpanel_psq__ratecard__c___012000000000000aaa___full___create___recordlayout2').shadowRoot.querySelectorAll('lightning-input')[0].shadowRoot.querySelector('lightning-datepicker').shadowRoot.querySelector('input.slds-input'));
    await testController.typeText(effectiveDate,input_EffectiveDate);
  });

  Then('I will enter Expiration date as {string}', async function (input_ExpirationDate) {
    var expirationDate =Selector(() => document.querySelector('records-modal-lwc-detail-panel-wrapper').shadowRoot.querySelector('records-lwc-detail-panel').shadowRoot.querySelector('records-base-record-form').shadowRoot.querySelector('records-lwc-record-layout').shadowRoot.querySelector('forcegenerated-detailpanel_psq__ratecard__c___012000000000000aaa___full___create___recordlayout2').shadowRoot.querySelectorAll('lightning-input')[1].shadowRoot.querySelector('lightning-datepicker').shadowRoot.querySelector('input.slds-input'));
    await testController.typeText(expirationDate,input_ExpirationDate);
  });

  Then('I will click on save button', async function () {
    var saveButton =Selector(() => document.querySelector('records-modal-lwc-detail-panel-wrapper').shadowRoot.querySelector('records-lwc-detail-panel').shadowRoot.querySelector('records-base-record-form').shadowRoot.querySelector('records-form-footer').shadowRoot.querySelector('runtime_platform_actions-actions-ribbon').shadowRoot.querySelectorAll('runtime_platform_actions-action-renderer')[2].shadowRoot.querySelector('lightning-button').shadowRoot.querySelector('button.slds-button.slds-button_brand'));
    await testController.click(saveButton).wait(6000);
  });