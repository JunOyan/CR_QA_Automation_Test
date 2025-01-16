import homePage from "../../page_objects/homePage.js";

describe('NBA Play Daily Games', () => {
  let user_data;
  before("load fixture", function(){
    cy.fixture("userData.json").then((data)=>
    {
      user_data = data;
    })
  });
  
  //Expected result: Guests should be able to enter games
  it('Guests Should Be Able to Enter Games Without Login', () => {
    //go to home page
    cy.visit(user_data.baseUrl);
    homePage.declineTracking();
    homePage.gotoNBAPlay();
    
  });
})