import homePage from "../../page_objects/homePage.js";
import storePage from "../../page_objects/storePage.js";

describe('Add Items from Store', () => {
  let _user_data;
  before("load fixture", function(){
    cy.fixture("userData.json").then((data)=>
    {
      _user_data = data;
    })
  });
  
  //Expected result: User should be able to add items from the store
  it('User Adds Items in Store', () => {
    //go to home page
    cy.visit(_user_data.baseUrl);
    homePage.declineTracking();
    homePage.gotoStore();

    //add items
    storePage.gotoTShirts();
    storePage.selectProduct();
    storePage.addProductToCart('L', 1);
  });
})