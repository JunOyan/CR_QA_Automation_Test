import homePage from "../../page_objects/homePage.js";
import loginPage from "../../page_objects/loginPage.js";

describe('Reset Password as Existing User', () => {
  let _user_data;
  before("load fixture", function(){
    cy.fixture("userData.json").then((data)=>
    {
      _user_data = data;
    })
  });

  //Expected result: should be able to send reset password request
  it('Existing User Should Be Able to Reset Password', () => {
    //go to sign in page
    cy.visit(_user_data.baseUrl);
    homePage.declineTracking();
    homePage.clickSignIn();

    //attempt to reset password
    loginPage.clickForgotPassword();
    loginPage.sendResetPasswordLink(_user_data.email);
    
    /*
    //if recaptcha appears, click cancel otherwise verify response
    cy.xpath(loginPage.elements.captcha_error_text, {timeout:6000}).then(($element) => {
      if($element.is(':visible') && $element.length > 0){
        loginPage.elements.cancel_btn().should('be.enabled');
        loginPage.elements.cancel_btn().click();
      }
    });
    */
  });
})