import 'cypress-xpath';

/**
 * Registration page for the website. Contains elements and methods belonging to this page.
 * Blocked by recaptcha from completing register.
 */
class registerPage{
    elements = {
        //Registration fields
        input_email_textfield: () => cy.get("input#email"),
        input_pwd_textfield: () => cy.get("input#password"),
        input_first_name_textfield: () => cy.get("input#firstName"),
        input_last_name_textfield: () => cy.get("input#lastName"),
        select_bd_month_dropdown: () => cy.xpath("//select[@data-testid='dobMonth']"),
        select_bd_year_dropdown: () => cy.xpath("//select[@data-testid='dobYear']"),
        select_country_dropdown: () => cy.xpath("//div[contains(@class, 'country')] \
        //select[@name='country']"),
        input_privacy_consent_checkbox: () => cy.xpath("//input[@id='privacyConsent']/.. \
        /div[contains(@class, 'Checkbox_checkbox')]"),
        input_email_consent_checkbox: () => cy.xpath("//input[@id='emailConsent'] \
        /div[contains(@class, 'Checkbox_checkbox')]"),
        create_account_btn: () => cy.get("button#submit[data-text='Create Account']"),
        captcha_error_text: () => cy.xpath("//p[text()='Captcha validation required.']"),
    };
    
    createNewAccount(email, 
        password, 
        first_name, 
        last_name, 
        birth_month, 
        birth_year, 
        country, 
        check_privacy=true, 
        check_ad=true){
        //Input email
        this.elements.input_email_textfield().should('be.visible');
        this.elements.input_email_textfield().type(email);

        //Input password
        this.elements.input_pwd_textfield().should('be.visible');
        this.elements.input_pwd_textfield().type(password);

        //Input first name
        this.elements.input_first_name_textfield().should('be.visible');
        this.elements.input_first_name_textfield().type(first_name);

        //Input last name
        this.elements.input_last_name_textfield().should('be.visible');
        this.elements.input_last_name_textfield().type(last_name);

        //Select birthdate month
        this.elements.select_bd_month_dropdown().should('be.visible');
        this.elements.select_bd_month_dropdown().select(birth_month);

        //Select birthdate year
        this.elements.select_bd_year_dropdown().should('be.visible');
        this.elements.select_bd_year_dropdown().select(birth_year);

        //Select birthdate year
        this.elements.select_country_dropdown().should('be.visible');
        this.elements.select_country_dropdown().select(country);
        
        //check privacy checkbox
        if(check_privacy){
            this.elements.input_privacy_consent_checkbox().should('be.visible');
            this.elements.input_privacy_consent_checkbox().click();
        }

        //check ads checkbox
        if(check_ad){
            this.elements.input_email_consent_checkbox().should('be.visible');
            this.elements.input_email_consent_checkbox().click();
        }

        //Click create account button
        this.elements.create_account_btn().should('be.visible');
        this.elements.create_account_btn().click();
    }
}

module.exports = new registerPage();
