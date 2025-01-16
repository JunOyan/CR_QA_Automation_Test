import homePage from "../../page_objects/homePage.js";
import agentTrackerPage from "../../page_objects/agentTrackerPage.js";

describe('Search a Player Profile', () => {
  let user_data;
  before("load fixture", function(){
    cy.fixture("userData.json").then((data)=>
    {
      user_data = data;
    })
  });
  
  //Expected result: User should be able to find a player
  it('User Should Be Able to Search for a Player Profile', () => {
    //go to home page
    cy.visit(user_data.baseUrl);
    homePage.declineTracking();

    //search for player
    homePage.goToFreeAgentTracker();
    //can type a specific player's name or leave empty
    agentTrackerPage.searchforPlayer("random");
  });
})