import homePage from "../../page_objects/homePage.js";

describe('Validate Homepage Navigation Items', () => {
  let user_data;
  before("load fixture", function(){
    cy.fixture("userData.json").then((data)=>
    {
      user_data = data;
    })
  });
  
  //Expected result: all menu items should be present
  it('Navigation Bar Should Have Required Menu Items', () => {
    //go to sign in page
    cy.visit(user_data.baseUrl);
    homePage.declineTracking();

    //validations
    homePage.elements.nav_games_hover_item().should('exist');
    homePage.elements.nav_schedule_hover_item().should('exist');
    homePage.elements.nav_watch_hover_item().should('exist');
    homePage.elements.nav_news_hover_item().should('exist');
    homePage.elements.nav_allstar_hover_item().should('exist');
    homePage.elements.nav_stats_hover_item().should('exist');
    homePage.elements.nav_standings_hover_item().should('exist');
    homePage.elements.nav_teams_hover_item().should('exist');
    homePage.elements.nav_players_hover_item().should('exist');
    homePage.elements.nav_nba_play_hover_item().should('exist');
    homePage.elements.nav_fantasy_hover_item().should('exist');
    homePage.elements.nav_nba_bet_hover_item().should('exist');
    homePage.elements.nav_league_pass_hover_item().should('exist');
    homePage.elements.nav_store_hover_item().should('exist');
    homePage.elements.nav_tickets_hover_item().should('exist');
    homePage.elements.nav_sign_in_hover_item().should('exist');
  });
})
