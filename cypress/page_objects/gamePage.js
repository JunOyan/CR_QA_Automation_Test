import 'cypress-xpath';
/**
 * The game results page for the website. Contains elements and methods belonging to this page.
 */
class gamePage{
    _hide_scores = false;
    elements = {
        scores_toggle: () => cy.xpath("//span[text()='HIDE SCORES']/..//span[@data-type='toggle']"),
        scores_toggle_status: () => cy.xpath("//div/label[contains(@class, 'Toggle_toggle')][@data-is-active]"),
        all_scores_rows: "//div[contains(@class, 'GamesView_gameCardsContainer')]/div[@data-is-post]//tr",
    };
    
    //Toggle the "Hide Score" switch
    toggleScores(){
        this.elements.scores_toggle()
        .should('be.visible')
        .click();
        cy.wait(1000);
    };

    //Get the current position of the "Hide Score" toggle
    getTogglePosition(){
        this.elements.scores_toggle_status()
        .invoke('attr', 'data-is-active')
        .then(data_is_active => {
            if(data_is_active=="false"){
                this._hide_scores = false;
            }else{
                this._hide_scores = true;
            }
        });
    };

    //Check whether scores exist
    checkScoresExist(){
        this.getTogglePosition();
        //debug
        console.log("These are the hide scores toggle status: " + this._hide_scores);
        cy.xpath(this.elements.all_scores_rows)
        .find('td')
        .each(($el) => {
            if(this._hide_scores){  //if scores are hidden
                cy.wrap($el).should('have.text', '-');
            } else {
                cy.wrap($el).should('not.have.text', '-');
            }
        })
    };
}

module.exports = new gamePage();
