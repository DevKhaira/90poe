Feature: search feature
 
  I want to search certain names
  
  Scenario Outline: Search names
    Given I search "<name>" in names
    Then I should see "<fullName>"

    Examples:
    |name      |fullName             |            
    |danielle  |danielle moore       |
    |julia     |julia cunningham     |

 Scenario Outline: Search City
    Given I search "<city>" in city
    Then I should see "<fullName>"

    Examples:
    |city       |fullName       |            
    |worcester  |emma stewart   |
    |liverpool  |linda ruiz     |
  