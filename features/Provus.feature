Feature: Ratecard Functionality

  Verify RateCard Functionality

    Scenario: Login into Provus
    Given I open Provus's login page
    When I am perform login through crdentials
    When I am clicking on Rate Cards
    When I am clicking on New Button    
    Then I will enter Rate card name as 'Rate card 1'
    Then I will enter aasigned to account as 'account one'
    Then I will verify error as 'Complete this field.'

    Scenario: Create a Rate Card
    Given I open Provus's login page
    When I am perform login through crdentials
    When I am clicking on Rate Cards
    When I am clicking on New Button    
    Then I will enter Rate card name as 'Rate Card'
    Then I will enter Effective date as '2/21/2022'
    Then I will enter Expiration date as '3/21/2022'
    Then I will click on save button

    Scenario: Create a Rate Card and validate rate card in quote
    Given I open Provus's login page
    When I am perform login through crdentials
    When I am clicking on Rate Cards
    When I am clicking on New Button    
    Then I will enter Rate card name as 'Rate Card'
    Then I will check active checkbox
    Then I will enter Effective date as '2/1/2022'
    Then I will enter Expiration date as '2/28/2022'
    Then I will click on save button
    When I will click on Quotes button
    When I am clicking on New Button
    Then I will enter Service start date as '2/1/2022'
    Then I will verify rate card in dropdown

    Scenario: Create a Rate Card and then create a quote
    Given I open Provus's login page
    When I am perform login through crdentials
    When I am clicking on Rate Cards
    When I am clicking on New Button    
    Then I will enter Rate card name as 'Rate Card'
    Then I will check active checkbox
    Then I will enter Effective date as '2/1/2022'
    Then I will enter Expiration date as '2/28/2022'
    Then I will click on save button
    When I will click on Quotes button
    When I am clicking on New Button
    Then I will enter Quote name as 'Quote'
    Then I will enter Service start date as '2/1/2022'
    Then I will enter Service end date as '2/28/2022'
    Then I will verify rate card in dropdown
    Then I will select the rate card in dropdown
    Then I will select Time Periods Alignmnet value as 'Calendar'
    Then I will select Time Periods value as 'months'
    Then I will select Time Periods Group Method value as 'Quarter'
    Then I will click on quote pop up save button

    Scenario: Effective date should be less than expiration date in New Rate card
    Given I open Provus's login page
    When I am perform login through crdentials
    When I am clicking on Rate Cards
    When I am clicking on New Button    
    Then I will enter Rate card name as 'Rate Card'
    Then I will check active checkbox
    Then I will enter Effective date as '2/28/2022'
    Then I will enter Expiration date as '2/15/2022'
    Then I will click on save button
    Then I will verify error as "The Rate Card's effective date cannot be greater than Rate Card's expiration date"

    Scenario: Error message should be display in absensence of effective date and expiration dates value in New Rate card
    Given I open Provus's login page
    When I am perform login through crdentials
    When I am clicking on Rate Cards
    When I am clicking on New Button    
    Then I will enter Rate card name as 'Rate Card'
    Then I will check active checkbox
    Then I will click on save button
    Then I will verify We hit a snag error as 'We hit a snag.'

    Scenario: Error message should be display in absensence of expiration dates value missing in New Rate card
    Given I open Provus's login page
    When I am perform login through crdentials
    When I am clicking on Rate Cards
    When I am clicking on New Button    
    Then I will enter Rate card name as 'Rate Card'
    Then I will check active checkbox
    Then I will enter Effective date as '2/20/22'
    Then I will click on save button
    Then I will verify We hit a snag error as 'We hit a snag.'

    Scenario: Error message should be display in absensence of effective dates value missing in New Rate card
    Given I open Provus's login page
    When I am perform login through crdentials
    When I am clicking on Rate Cards
    When I am clicking on New Button    
    Then I will enter Rate card name as 'Rate Card'
    Then I will check active checkbox
    Then I will enter Expiration date as '2/15/22'
    Then I will click on save button
    Then I will verify We hit a snag error as 'We hit a snag.'

    Scenario: Verify when user entered incorrect effective date in Rate card error message should be displayed
    Given I open Provus's login page
    When I am perform login through crdentials
    When I am clicking on Rate Cards
    When I am clicking on New Button    
    Then I will enter Rate card name as 'Rate Card'
    Then I will check active checkbox
    Then I will enter Effective date as '2/1/22'
    Then I will enter Expiration date as '2/28/22'
    Then I will click on save button
    Then I will verify error as 'Your entry does not match the allowed format M/d/yyyy.'

    Scenario: Display the Effective Date and Expiration Date field in New Rate card as mandatory
    Given I open Provus's login page
    When I am perform login through crdentials
    When I am clicking on Rate Cards
    When I am clicking on New Button    
    Then I will enter Rate card name as 'Rate Card'
    Then I will check active checkbox
    Then I will click on save button
    Then I will verify error as 'Complete this field.'
    Then I will verify expiration date error as 'Complete this field.'

    Scenario: Verify to check if quote service start date is within the range of rate card effective dates, Actor should be able to add the rate card in quote
    Given I open Provus's login page
    When I am perform login through crdentials
    When I am clicking on Rate Cards
    When I am clicking on New Button    
    Then I will enter Rate card name as 'Rate Card'
    Then I will check active checkbox
    Then I will enter Effective date as '2/1/2022'
    Then I will enter Expiration date as '2/28/2022'
    Then I will click on save button
    When I will click on Quotes button
    When I am clicking on New Button
    Then I will enter Quote name as 'Quote'
    Then I will enter Service start date as '2/1/2022'
    Then I will enter Service end date as '2/28/2022'
    Then I will verify rate card in dropdown
    Then I will select the rate card in dropdown

Scenario: Verify if No service start date is selected while creating quote, user should not be able to add any rate card
    Given I open Provus's login page
    When I am perform login through crdentials
    When I will click on Quotes button
    When I am clicking on New Button
    Then I will enter Quote name as 'Quote'    
    Then I will verify "New Rate Card" should be displayed in dropdown

    Scenario: Verify if service start date in quote is less than the effective date on rate card, the rate card should not be allowed to be used in quote
    Given I open Provus's login page
    When I am perform login through crdentials
    When I am clicking on Rate Cards
    When I am clicking on New Button    
    Then I will enter Rate card name as 'Rate Card'
    Then I will check active checkbox
    Then I will enter Effective date as '3/30/2022'
    Then I will enter Expiration date as '3/31/2022'
    Then I will click on save button
    When I will click on Quotes button
    When I am clicking on New Button
    Then I will enter Quote name as 'Quote'
    Then I will enter Service start date as '3/29/2022'    
    Then I will verify "New Rate Card" should be displayed in dropdown

    Scenario: Verify if service start date in quote is greater than the expiration date on rate card, the rate card should not be allowed to be used in quote
    Given I open Provus's login page
    When I am perform login through crdentials
    When I am clicking on Rate Cards
    When I am clicking on New Button    
    Then I will enter Rate card name as 'Rate Card'
    Then I will check active checkbox
    Then I will enter Effective date as '3/30/2022'
    Then I will enter Expiration date as '3/31/2022'
    Then I will click on save button
    When I will click on Quotes button
    When I am clicking on New Button
    Then I will enter Quote name as 'Quote'
    Then I will enter Service start date as '4/1/2022'    
    Then I will verify "New Rate Card" should be displayed in dropdown

    Scenario: Verify if rate card expiration date is same as service start date in quote, user should be able to add the rate card    
    Given I open Provus's login page
    When I am perform login through crdentials
    When I am clicking on Rate Cards
    When I am clicking on New Button    
    Then I will enter Rate card name as 'Rate Card'
    Then I will check active checkbox
    Then I will enter Effective date as '4/11/2022'
    Then I will enter Expiration date as '4/12/2022'
    Then I will click on save button
    When I will click on Quotes button
    When I am clicking on New Button
    Then I will enter Quote name as 'Quote'
    Then I will enter Service start date as '4/12/2022'    
    Then I will verify "New Rate Card" should be displayed in dropdown