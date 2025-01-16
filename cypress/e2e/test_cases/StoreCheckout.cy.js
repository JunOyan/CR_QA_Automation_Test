import homePage from "../../page_objects/homePage.js";
import storePage from "../../page_objects/storePage.js";

describe('Checkout Items from the Store', () => {
  let _user_data;
  before("load fixture", function(){
    cy.fixture("userData.json").then((data)=>
    {
      _user_data = data;
    })
  });
  
  //Expected result: Store checkout should have the required shipping fields
  it('Validate Store Checkout Has Required Shipping Fields', () => {
    //go to home page
    cy.visit(_user_data.baseUrl);
    homePage.declineTracking();
    homePage.gotoStore();

    //add items
    storePage.gotoTShirts();
    storePage.selectProduct();
    storePage.addProductToCart('XL');
    
    //checkout
    storePage.gotoCheckout();
    storePage.validateCheckoutFields();
  });
})