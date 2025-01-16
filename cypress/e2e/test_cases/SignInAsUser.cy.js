import homePage from "../../page_objects/homePage.js";
import loginPage from "../../page_objects/loginPage.js";

describe('Sign In As Existing User', () => {
  let _user_data;
  before("load fixture", function(){
    cy.fixture("userData.json").then((data)=>
    {
      _user_data = data;
    })
  });
  
  //Expected result: should be able to sign in
  it('Recaptcha not required: Existing User Should Be Able to Sign In', () => {
    //go to sign in page
    cy.visit(_user_data.baseUrl);
    homePage.declineTracking();
    homePage.clickSignIn();

    //input email and password to login
    loginPage.signIn(_user_data.email, _user_data.password);

    //A recaptcha may appear after login
    homePage.elements.nav_profile_icon_hover_item().should('be.visible');
  });

  //Expected result: should not be able to sign in without recaptcha
  it('Recaptcha failed: Existing User Should Not Be Able to Sign In', () => {
    //go to sign in page
    cy.visit(_user_data.baseUrl);
    homePage.declineTracking();
    homePage.clickSignIn();

    //input email and password to login
    loginPage.signIn(_user_data.email, _user_data.password);

    //A recaptcha may appear after login
    cy.xpath(loginPage.elements.sign_in_error_text, {timeout:15000}).should('be.visible');
  });

  //Expected result: should not be able to sign in as a new user
  it('New User Should Not Be Able to Sign In', ()=>{
    //go to sign in page
    cy.visit(_user_data.baseUrl);
    homePage.declineTracking();
    homePage.clickSignIn();

    //input email and password to login
    loginPage.signIn("invalidemail@invalid.com", "12345678");
    cy.xpath(loginPage.elements.sign_in_error_text).should('have.text', 
      'Invalid email or password. Please try again.')
  });
})