import homePage from "../../page_objects/homePage.js";
import gamePage from "../../page_objects/gamePage.js";

describe('Hide Scores from Past Games', () => {
  let user_data;
  before("load fixture", function(){
    cy.fixture("userData.json").then((data)=>
    {
      user_data = data;
    })
  });
  
  //Expected result: guests should not be able to see scores once hidden
  it('Guest Users Should NOT See Hidden Game Scores', () => {
    //go to sign in page
    cy.visit(user_data.baseUrl);
    homePage.declineTracking();
    homePage.gotoGames();
    
    //check current scores
    gamePage.checkScoresExist();
    gamePage.toggleScores();
    gamePage.checkScoresExist();
  });
})