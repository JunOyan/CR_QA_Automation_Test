import 'cypress-xpath';

/**
 * League Pass page for the website. Contains elements and methods belonging to this page.
 */
class leaguePassPage{
    elements = {
        league_pass_premium_sub_btn: () => cy.xpath("//div[contains(@class, 'LeaguePassCard_planCard')] \
        //button[@data-pos=1]"),
        league_pass_std_sub_btn: () => cy.xpath("//div[contains(@class, 'LeaguePassCard_planCard')] \
        //button[@data-pos=0]"),
    };

    clickSubscribeToPremium(){
        this.elements.league_pass_premium_sub_btn()
        .should('be.visible')
        .click()
    };

    clickSubscribeToStdPass(){
        this.elements.league_pass_std_sub_btn()
        .should('be.visible')
        .click()
    }
}

module.exports = new leaguePassPage();
