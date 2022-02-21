Feature: Testing Provus

  Testing Provus Application

  # Scenario: Login into Provus
  #   Given I open Provus's login page
  #   When I am perform login through crdentials
  #   When I am clicking on Rate Cards
  #   When I am clicking on New Button    
  #   Then I will enter Rate card name as 'Rate card 1'
  #   Then I will enter aasigned to account as 'account one'
  #   Then I will verify error as 'Complete this field.'

    Scenario: Create a Rate Card
    Given I open Provus's login page
    When I am perform login through crdentials
    When I am clicking on Rate Cards
    When I am clicking on New Button    
    Then I will enter Rate card name as 'Rate Card'
    Then I will enter Effective date as '2/21/2022'
    Then I will enter Expiration date as '3/21/2022'
    Then I will click on save button