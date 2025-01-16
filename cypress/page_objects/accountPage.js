import 'cypress-xpath';

/**
 *  Accounts page for the website. Contains elements and methods belonging to this page.
 *  Currently blocked by recaptcha.
 */
class accountPage{
    elements = {
        first_name_label: () => cy.xpath("//span[contains(@class, 'ProfileDisplayBlock_label')][text()='First Name']"),
        first_name_textfield: () => this.elements.first_name_label().xpath("./following-sibling::span")
    };
};

module.exports = new accountPage();
