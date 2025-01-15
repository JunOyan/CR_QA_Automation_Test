import 'cypress-xpath';

/**
 * 
 */
class statsPage{
    elements = {
        input_email_textfield: () => cy.get("input#email"),
    };
    action(){
        this.elements
    }

}

module.exports = new statsPage();
