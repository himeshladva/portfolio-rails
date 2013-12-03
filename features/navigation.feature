Feature: Navigation
  In order to give the user a better experience
  I want to be able to effective navigate the site

  Scenario: The navigation appears within the header
    When I visit the home page
    Then I should see the navigation bar
    And it is within the header

  Scenario: I can navigate to the About Me page
    When I visit the home page
    And I click on the "About Me" link
    Then I should be on the "About Me" page

  Scenario: I can navigate to the Portfolio page
    When I visit the home page
    And I click on the "Portfolio" link
    Then I should be on the "Portfolio" page

  Scenario: I can navigate to the Contact Me page
    When I visit the home page
    And I click on the "Contact Me" link
    Then I should be on the "Contact Me" page

  Scenario: I can navigate to the Home page
    When I visit the home page
    And I click on the "Home" link
    Then I should be on the "Home" page
