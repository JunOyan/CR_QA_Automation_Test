import homePage from "../../page_objects/homePage.js";
import storePage from "../../page_objects/storePage.js";

describe('Check Store Gift Card', () => {
  let _user_data;
  before("load fixture", function(){
    cy.fixture("userData.json").then((data)=>
    {
      _user_data = data;
    })
  });
  
  //Expected result: User should be able to check the balance of an invalid gift card
  it('User Should Not Be Able to Check Balance for Invalid Card', () => {
    //go to home page
    cy.visit(_user_data.baseUrl);
    homePage.declineTracking();
    homePage.gotoStore();

    //go to giftcard
    storePage.gotoGiftCards();
    storePage.searchForGiftCard('1234567890');
    storePage.validGiftCardInvalid();
  });
})