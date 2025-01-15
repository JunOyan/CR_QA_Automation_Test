import 'cypress-xpath';

/**
 *  Landing page for the website. Contains elements and methods belonging to this page.
 */
class homePage{
    elements = {
        //Navigation bar main menu items with dropdown
        nav_sign_in_hover_item: () => cy.xpath("//nav[contains(@class, 'NavBar_nav')] \
        //span[text()='Sign In']/ancestor::li"),
        
        nav_nba_play_hover_item: () => cy.xpath("//nav[contains(@class, 'NavBar_nav')] \
        //span[text()='NBA Play']/ancestor::li"),
        
        nav_players_hover_item: () => cy.xpath("//nav[contains(@class, 'NavBar_nav')] \
        //span[text()='Players']/ancestor::li"),
        
        nav_stats_hover_item: () => cy.xpath("//nav[contains(@class, 'NavBar_nav')] \
        //span[text()='Stats']/ancestor::li"),
        
        nav_games_hover_item: () => cy.xpath("//nav[contains(@class, 'NavBar_nav')] \
        //span[text()='Games']/ancestor::li"),
        
        nav_nba_bet_hover_item: () => cy.xpath("//nav[contains(@class, 'NavBar_nav')] \
        //span[text()='NBA Bet']/ancestor::li"),
        
        nav_store_hover_item: () => cy.xpath("//nav[contains(@class, 'NavBar_nav')] \
        //span[text()='Store']/ancestor::li"),
        
        nav_profile_icon_hover_item: () => cy.xpath("//nav[contains(@class, 'NavBar_nav')] \
        //div[@id='nav-controls']//li[@aria-haspopup='true']").as("profile_hover"),

        nav_watch_hover_item: () => cy.xpath("//nav[contains(@class, 'NavBar_nav')] \
        //span[text()='Watch']/ancestor::li"),

        nav_schedule_hover_item: () => cy.xpath("//nav[contains(@class, 'NavBar_nav')] \
        //span[text()='Schedule']/ancestor::li"),

        nav_news_hover_item: () => cy.xpath("//nav[contains(@class, 'NavBar_nav')] \
        //span[text()='News']/ancestor::li"),

        nav_allstar_hover_item: () => cy.xpath("//nav[contains(@class, 'NavBar_nav')] \
        //span[text()='All-Star']/ancestor::li"),

        nav_standings_hover_item: () => cy.xpath("//nav[contains(@class, 'NavBar_nav')] \
        //span[text()='Standings']/ancestor::li"),

        nav_teams_hover_item: () => cy.xpath("//nav[contains(@class, 'NavBar_nav')] \
        //span[text()='Teams']/ancestor::li"),

        nav_players_hover_item: () => cy.xpath("//nav[contains(@class, 'NavBar_nav')] \
        //span[text()='Players']/ancestor::li"),

        nav_fantasy_hover_item: () => cy.xpath("//nav[contains(@class, 'NavBar_nav')] \
        //span[text()='Fantasy']/ancestor::li"),

        nav_league_pass_hover_item: () => cy.xpath("//nav[contains(@class, 'NavBar_nav')] \
        //span[text()='League Pass']/ancestor::li"),

        nav_tickets_hover_item: () => cy.xpath("//nav[contains(@class, 'NavBar_nav')] \
        //span[text()='Tickets']/ancestor::li"),

        //Navigation bar direct links
        nav_profile_icon: () => cy.xpath("@profile_hover").xpath("./span[@data-has-icon='true']"),
        nav_store_btn: () => cy.xpath("//span[text()='Store']/parent::a[@data-content='Store' \
        and @data-has-children='true']"),
        nav_sign_in_nba_id_btn: () => cy.xpath("//a[@href='/account/sign-in']"),
        nav_games_btn: () => cy.xpath("//a[@href='/games'][@data-text='Games']"),
        nav_stats101_btn: () => cy.xpath("//a[@href='/stats/help/glossary'][@data-text='Stats 101']"),
        nav_my_account_btn: () => cy.xpath("//a[@href='/account/nbaprofile'][@data-text='My Account']"),
        nav_league_pass_btn: () => cy.xpath("//a[@href='/watch/league-pass-stream'][@data-text='League Pass']"),
        nav_tickets_btn: () => cy.xpath("//span[text()='Tickets']/parent::a[@data-text='Tickets']"),

        //Tracking widget pop-up
        banner_tracking_widget: () => cy.get("#onetrust-banner-sdk", {timeout:8000}),
        banner_tracking_decline_btn: () => cy.get("#onetrust-reject-all-handler", {timeout:8000}),
    };

    declineTracking(){
        //Decline tracking preferences
        this.elements.banner_tracking_widget().should('be.visible');
        this.elements.banner_tracking_decline_btn().should('be.visible');
        this.elements.banner_tracking_decline_btn().click();
    };

    clickSignIn(){
        //Sign in button should appear after mouse hover
        this.elements.nav_sign_in_hover_item().trigger('mouseover');
        this.elements.nav_sign_in_nba_id_btn().should('be.visible');
        this.elements.nav_sign_in_nba_id_btn().click();
    };

    goToMyAccount(){
        //Enter to My Accounts after sign in
        this.elements.nav_profile_icon().should('exist');
        this.elements.nav_profile_icon_hover_item().trigger('mouseover');
        this.elements.nav_my_account_btn().should('be.visible');
        this.elements.nav_my_account_btn().click();
    };

    goToLeaguePass(){
        //Enter League Pass
        this.elements.nav_league_pass_btn().should('be.visible');
        this.elements.nav_league_pass_btn().click();
    };

    gotoGames(){
        //Enter Games
        this.elements.nav_games_btn().should('be.visible');
        this.elements.nav_games_btn().click();
    };

    gotoStore(){
        //Enter Store
        this.elements.nav_store_btn().should('be.visible');
        this.elements.nav_store_btn().click();
    };

    gotoStats101(){
        //Go to stats 101
        this.elements.nav_stats_hover_item().trigger('mouseover');
        this.elements.nav_stats101_btn().should('be.visible');
        this.elements.nav_stats101_btn().click();
    };

    gotoTickets(){
        //Enter Tickets
        this.elements.nav_tickets_btn().should('be.visible');
        this.elements.nav_tickets_btn().click();
    };
}

module.exports = new homePage();
