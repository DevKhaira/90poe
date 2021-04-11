Feature: crew member container
 
  I want to make sure the crewmember container moves correctly
  
  Scenario: Crew member container has all assets
    Given I am on the homepage
    Then I should see the crewmember container with all its assets

  Scenario Outline: Crew member container moves left and right as required
    Given I am on the homepage
    When I press "<direction>" on the "<position>" section
    Then I should see that asset on "Interviewing"

    Examples:
    |direction|position             |            
    |right    |Applied              |
    |left     |Hired                |
  
  Scenario Outline: Crew member containers only shows particular arrows
    Given I am on the homepage
    Then the "<position>" assets should not show a "<direction>" button
    Examples:
    |direction |position             |            
    |left      |Applied              |
    |right     |hired                |
