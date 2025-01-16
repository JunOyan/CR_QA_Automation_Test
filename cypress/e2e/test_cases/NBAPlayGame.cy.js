import homePage from "../../page_objects/homePage.js";
import nbaPlayPage from "../../page_objects/nbaplayPage.js";

describe('NBA Play Daily Games', () => {
  let _user_data;
  before("load fixture", function(){
    cy.fixture("userData.json").then((data)=>
    {
      _user_data = data;
    })
  });
  
  //Expected result: Guests should be able to daily games
  it('Guests Should Be Able to Enter Daily Games Without Login', () => {
    //go to home page
    cy.visit(_user_data.baseUrl);
    homePage.declineTracking();
    homePage.gotoNBAPlay();

    nbaPlayPage.enterDailyGame();
    nbaPlayPage.validateStartButton();
  });

  //Expected result: Guests should be able to enter trending games
  it('Guests Should Be Able to Enter Trending Games Without Login', () => {
    //go to home page
    cy.visit(_user_data.baseUrl);
    homePage.declineTracking();
    homePage.gotoNBAPlay();

    nbaPlayPage.enterTrendingGame();
    nbaPlayPage.validateStartButton();
  });
})