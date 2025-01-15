import 'cypress-xpath';
import base64 from 'base-64';

/**
 *  Login page for the website. Contains elements and methods belonging to this page.
 */
class loginPage{
    elements = {
        sign_in_title_h1: () => cy.xpath("//h1[contains(@class, 'SignIn_title')]"),
        input_email_textfield: () => cy.get("input#email"),
        input_pwd_textfield: () => cy.get("input#password"),
        forgot_password_link: () => cy.xpath("//a[@href='/account/forgot-password']"),
        sign_in_btn: () => cy.get("button#submit"),
        sign_up_link: () => cy.xpath("//a[@href='/account/sign-up']"),
        send_pwd_reset_btn: () => cy.xpath("//button[contains(@class, 'ForgotPasswordView')][@id='submit']"),
        cancel_btn: () => cy.get('button#cancel'),
        //recaptcha_checkbox: () => cy.get("#signin_captcha", {timeout:15000}),
        reset_link_sent_text: () => cy.xpath("//p[text()='Reset Link Sent']"),
        
        //For assertions
        sign_in_error_text: "//p[contains(@class, 'SubmitErrorText_errorText')]",
        captcha_error_text: "//p[text()='Captcha validation required.']"
    };
    
    inputEmail(email){
        //Input email
        this.elements.input_email_textfield().should('be.visible');
        this.elements.input_email_textfield().type(email);
    };

    signIn(email, password){
        this.inputEmail(email);
        
        //Input password
        this.elements.input_pwd_textfield().should('be.visible');
        this.elements.input_pwd_textfield().type(base64.decode(password));

        //Click to sign in
        this.elements.sign_in_btn().should('be.enabled');
        this.elements.sign_in_btn().click();
    };

    clickForgotPassword(){
        this.elements.forgot_password_link().should('be.visible');
        this.elements.forgot_password_link().click();
    };

    sendResetPasswordLink(email){
        this.inputEmail(email);
        this.elements.send_pwd_reset_btn().should('be.enabled');
        this.elements.send_pwd_reset_btn().click();
    };

    clickRegister(){
        //Clicks "Don't have an NBA ID?"
        this.elements.sign_up_link().should('be.visible');
        this.elements.sign_up_link().click();
    };
}

module.exports = new loginPage();
