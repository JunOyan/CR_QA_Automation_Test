import homePage from "../../page_objects/homePage.js";
import storePage from "../../page_objects/storePage.js";

describe('Track Store Orders', () => {
  let user_data;
  before("load fixture", function(){
    cy.fixture("userData.json").then((data)=>
    {
      user_data = data;
    })
  });
  
  //Expected result: User should be able to delete an item in the cart
  it('User Should NOT Be Able to Track Invalid Order', () => {
    //go to home page
    cy.visit(user_data.baseUrl);
    homePage.declineTracking();
    homePage.gotoStore();

    //go to track orders
    storePage.gotoTrackOrders();
    storePage.searchForTrackOrder('INVALIDORDER123');
    storePage.validateTrackOrderInvalid();
  });
})