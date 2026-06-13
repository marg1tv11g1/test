Feature: Margit Viigi portfolio UI
  The portfolio should introduce Margit, show her work, and provide ways to contact her.

  Scenario: Visitor sees the landing page and opens the projects page
    Given I open the portfolio home page
    Then the browser title should be "Margit Viigi - portfolio"
    And I should see the text "WELCOME"
    And I should see the text "Explore my work as a full-stack developer to-be."
    When I follow the visible link "Discover my projects"
    Then the current route should include "/projects"
    And I should see the text "My Projects"
    And I should see at least 8 project cards
    And every project card should have an image

  Scenario: Visitor navigates to About Me and sees skills
    Given I open the portfolio home page
    When I use the desktop navigation link "About Me"
    Then the current route should include "/about"
    And I should see the text "About Me"
    And I should see the text "My Skills"
    And I should see these skills:
      | React      |
      | JavaScript |
      | Cypress    |
      | Docker     |
      | WordPress  |

  Scenario: Visitor opens Contact and checks contact resources
    Given I open the portfolio home page
    When I use the desktop navigation link "Contact"
    Then the current route should include "/contact"
    And I should see the text "Contact Me"
    And I should see the text "Email: margit.viigi@voco.ee"
    And I should see the text "Phone: +372 5831 6752"
    And the footer should include a GitHub link to "https://github.com/margitviigi"
    And the footer should include a CV download link
