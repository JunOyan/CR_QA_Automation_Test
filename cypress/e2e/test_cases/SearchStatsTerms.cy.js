import homePage from "../../page_objects/homePage.js";
import statsPage from "../../page_objects/statsPage.js";

describe('Search for a Glossary Term', () => {
  let _user_data;
  before("load fixture", function(){
    cy.fixture("userData.json").then((data)=>
    {
      _user_data = data;
    })
  });
  
  //Expected result: User should be able to find an existing term
  it('User Should Be Able to Search for a Glossary Term', () => {
    //go to home page
    cy.visit(_user_data.baseUrl);
    homePage.declineTracking();
    homePage.gotoStats101();
    
    statsPage.searchForTerms("%FTM");
  });
})
