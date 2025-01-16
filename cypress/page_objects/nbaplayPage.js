import 'cypress-xpath';
import {randomInt as rand} from 'mathjs';

/**
 * NBA Play page for the website. Contains elements and methods belonging to this page.
 */
class nbaPlayPage{
    elements = {
        game_title_cards: () => cy.xpath("//div[contains(@class, 'latest__Wrapper')]"),
        trending_games_links: () => cy.xpath("//div[contains(@class, 'trending__List')]//a[@data-id]"),
        start_play_btn: () => cy.xpath("//div[contains(@class, 'start-view__Buttons')]/button"),
    };

    enterDailyGame(game=""){
        this.elements.game_title_cards()
        .xpath(".//a")
        .should('be.visible');
        
        this.elements.game_title_cards()
        .xpath(".//a")
        .should('have.length', 6);

        if(game != ""){
            this.elements.game_title_cards()
            .xpath(`.//a[@title='${game}']`)
            .should('be.visible')
            .click();
        } else {
            let rand_i = rand(0,5);
            this.elements.game_title_cards()
            .xpath(".//a")
            .each(($el, index) => {
                if(index == rand_i){
                    cy.wrap($el)
                    .click();
                }
            })
        };
    };

    enterTrendingGame(){
        this.elements.trending_games_links()
        .should('have.length', 4);

        let rand_i = rand(0,3);
        this.elements.trending_games_links()
        .each(($el, index) => {
            if(index == rand_i){
                cy.wrap($el)
                .click();
            }
        })
    };

    //validate that start button exists in the game
    validateStartButton(){
        this.elements.start_play_btn()
        .should('be.visible');
    };
}   

module.exports = new nbaPlayPage();
