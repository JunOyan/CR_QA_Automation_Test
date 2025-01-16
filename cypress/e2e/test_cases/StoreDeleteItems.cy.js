import homePage from "../../page_objects/homePage.js";
import storePage from "../../page_objects/storePage.js";

describe('Cancel Items from the Store Cart', () => {
  let _user_data;
  before("load fixture", function(){
    cy.fixture("userData.json").then((data)=>
    {
      _user_data = data;
    })
  });
  
  //Expected result: User should be able to delete an item in the cart
  it('Delete an Existing Item from Cart', () => {
    //go to home page
    cy.visit(_user_data.baseUrl);
    homePage.declineTracking();
    homePage.gotoStore();

    //add items
    storePage.gotoTShirts();
    storePage.selectProduct();
    storePage.addProductToCart('L');

    //delete the item from cart
    storePage.deleteProductInCart();
    storePage.validateCartEmpty();
  });
})