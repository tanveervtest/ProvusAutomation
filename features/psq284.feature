
Feature: Quotes Functionality

    Verify Quotes Functionality 

    Scenario: Ability to apply quote level discounts    
    Given I open Provus's login page
    When I am perform login through crdentials
    When I am clicking on Rate Cards
    When I am clicking on New Button    
    Then I will enter Rate card name as 'Rate Card'
    Then I will check active checkbox
    Then I will enter Effective date as '3/1/2022'
    Then I will enter Expiration date as '3/28/2022'
    Then I will click on save button
    When I will click on Quotes button
    When I am clicking on New Button
    Then I will enter Quote name as 'Quote'
    Then I will enter Service start date as '3/1/2022'
    Then I will enter Service end date as '3/28/2022'
    Then I will verify rate card in dropdown
    Then I will select the rate card in dropdown
    Then I will select Time Periods Alignmnet value as 'Calendar'
    Then I will select Time Periods value as 'months'
    Then I will select Time Periods Group Method value as 'Quarter'
    Then I will click on quote pop up save button
    Then I will click on add resource cancel button
    # Then I will verify Quote Header name
    Then I will click on discount button


