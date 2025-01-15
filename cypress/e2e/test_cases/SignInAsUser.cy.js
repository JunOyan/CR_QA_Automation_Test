import homePage from "../../page_objects/homePage.js";
import loginPage from "../../page_objects/loginPage.js";

describe('Sign In As Existing User', () => {
  let user_data;
  before("load fixture", function(){
    cy.fixture("userData.json").then((data)=>
    {
      user_data = data;
    })
  });
  
  //Expected result: should not be able to sign in without recaptcha
  it('Existing User Should Be Able to Sign In', () => {
    //go to sign in page
    cy.visit(user_data.baseUrl);
    homePage.declineTracking();
    homePage.clickSignIn();

    //input email and password to login
    loginPage.signIn(user_data.email, user_data.password);

    //A recaptcha may appear after login
    cy.xpath(loginPage.elements.sign_in_error_text, {timeout:15000}).then(($element) => {
        if(!$element.is(':visible') && !$element.length > 0){
          homePage.elements.nav_profile_icon_hover_item().should('be.visible');
        }
    });
  });
})