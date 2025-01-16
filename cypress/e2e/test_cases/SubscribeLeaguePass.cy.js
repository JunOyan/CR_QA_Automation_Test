import homePage from "../../page_objects/homePage.js";
import leaguePassPage from "../../page_objects/leaguePassPage.js";
import loginPage from "../../page_objects/loginPage.js";

describe('League Pass Subscription', () => {
  let _user_data;
  before("load fixture", function(){
    cy.fixture("userData.json").then((data)=>
    {
      _user_data = data;
    })
  });
  
  //Expected result: Guests should be able to see the login
  it('New Users Should Login Subscribing to League Pass Premium', () => {
    //go to home page
    cy.visit(_user_data.baseUrl);
    homePage.declineTracking();
    
    //go to league pass
    homePage.goToLeaguePass();
    leaguePassPage.clickSubscribeToPremium();

    //validation
    loginPage.elements.sign_in_title_h1()
    .should('be.visible');
  });

  //Expected result: Guests should be able to see the login
  it('New Users Should Login Subscribing to Standard League Pass', () => {
    //go to home page
    cy.visit(_user_data.baseUrl);
    homePage.declineTracking();
    
    //go to league pass
    homePage.goToLeaguePass();
    leaguePassPage.clickSubscribeToStdPass();

    //validation
    loginPage.elements.sign_in_title_h1()
    .should('be.visible');
  });
})