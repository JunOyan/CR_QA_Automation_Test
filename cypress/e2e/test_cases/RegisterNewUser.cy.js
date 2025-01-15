import homePage from "../../page_objects/homePage.js";
import loginPage from "../../page_objects/loginPage.js";
import registerPage from "../../page_objects/registerPage.js";

describe('Create a New Account', () => {
  let user_data;
  before("load fixture", function(){
    cy.fixture("userData.json").then((data)=>
    {
      user_data = data;
    })
  });

  //Expected result: should not be able to create an account
  it('Recaptcha Failed: User Should NOT Be Able to Create an Account', () => {
    //go to sign in page
    cy.visit(user_data.baseUrl);
    homePage.declineTracking();
    homePage.clickSignIn();

    //register new account
    loginPage.clickRegister();
    registerPage.createNewAccount(
        'testermail@yopmail.com',
        'password123',
        'John',
        'Doe',
        'January',
        '1980',
        'United States',
        true,
        false
    );

    //Recaptcha validation
    registerPage.elements.captcha_error_text().should('exist');
  });
})