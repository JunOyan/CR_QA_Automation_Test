import 'cypress-xpath';
import {randomInt as rand} from 'mathjs';

/**
 * Ticket page for the website. Contains elements and methods belonging to this page.
 */
class ticketPage{
    _ticket_number;
    _links = [];
    elements = {
        buy_tickets_link: () => cy.get("a[ng-if='game.ticketLink']"),
        nba_logo_link: () => cy.xpath("//a[@class='site-header__logo']")
    };

    //gets all ticket links
    getTickets(){
        this.elements.buy_tickets_link()
        .should('be.visible')
        .each(($el, i, list) => {
            cy.wrap($el)
            .invoke('attr', 'href')
            .then((href) =>{
                this._links.push(href);
            });
        })
        .then(() => {
            this._ticket_number = rand(0,this._links.length);
        })
    };

    //click a random ticket
    clickBuyTickets(){
        this.getTickets();
        this.elements.buy_tickets_link()
        .each(($el, i) => {
            if(i == this._ticket_number){
                cy.wrap($el)
                .should('include.text', 'Buy Tickets')
                .invoke('removeAttr', 'target')
                .click();
            }
        });
        cy.wait(2000);
    };

    //validates the url
    validateUrl(){
        cy.url().should('not.include', 'nba');
    };
}

module.exports = new ticketPage();
