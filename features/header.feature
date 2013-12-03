Feature: Header

  Scenario: The header is always at the top
    When I visit the home page
    Then I should see the header
    And I scroll down
    Then the header should be at the top

  Scenario: The header shrinks as I scroll down
    When I visit the home page
    And I scroll down
    Then the header height should be smaller

  Scenario: The header returns to its normal size when I scroll back up
    When I visit the home page
    And I scroll down
    And I scroll up
    Then the header should be the original height