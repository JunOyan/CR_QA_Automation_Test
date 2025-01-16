import homePage from "../../page_objects/homePage.js";
import ticketPage from "../../page_objects/ticketPage.js";

describe('Purchase a Game Ticket', () => {
  let _user_data;
  before("load fixture", function(){
    cy.fixture("userData.json").then((data)=>
    {
      _user_data = data;
    })
  });
  
  //Expected result: Buying a ticket should redirect to an external vendor
  it('Users Buying Tickets Should Redirect to a Third Party Vendor', () => {
    //go to home page
    cy.visit(_user_data.baseUrl);
    homePage.declineTracking();
    homePage.gotoTickets();
    
    ticketPage.clickBuyTickets();
    ticketPage.validateUrl();
  });
})