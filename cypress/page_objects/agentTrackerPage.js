import 'cypress-xpath';
import {randomInt as rand} from 'mathjs';

/**
 *  Players > Agent tracker page for the website. 
 *  Contains elements and methods belonging to this page.
 */
class agentTrackerPage{
    _player_names = [];
    _player_name = "";

    elements = {
        search_bar_textfield: () => cy.xpath("//div[contains(@class, 'FreeAgentList_block')] \
        //input[@type='search']"),
        player_results_table: () => cy.xpath("//table[contains(@class, 'Crom_table')]//tbody//td[1]"),
    };

    //selects a random player name from the table
    getRandomPlayerName(){
        this.elements.player_results_table()
        .should('be.visible')
        //creates an array of player names
        .each(($el) => {
            cy.wrap($el)
            .invoke('text')
            .then((text) => {
                this._player_names.push(text);
            });
        })
        //choose a random one from the array
        .then(()=>{
            let random = rand(0,this._player_names.length);
            this._player_name = this._player_names[random];
            //debug
            console.log("Chosen player: " + this._player_name);
        });
    };

    //search for a specific player
    searchforPlayer(name=""){
        //this element has a "display:none" ancestor
        this.elements.search_bar_textfield().should('exist');
        //so the attribute is programmatically changed
        cy.get("div#search-container-mobile")
        .invoke("css", "display", "inline");
        
        if (name.length == 0 || name == "random"){
            this.getRandomPlayerName();
            this.elements.search_bar_textfield().should('be.visible').then(($el)=>{
                cy.wrap($el).type(this._player_name);
            });
        } else {
            this._player_name = name;
            this.elements.search_bar_textfield().should('be.visible')
            .type(name);
        }
        cy.wait(1000);

        //validation
        this.elements.player_results_table().should('have.length', 1);
        this.elements.player_results_table().xpath(".//a")
        .should('have.attr', 'data-content')
        .then((data_content) => {
            expect(data_content).to.eql(this._player_name);
        });
    };
}

module.exports = new agentTrackerPage();
