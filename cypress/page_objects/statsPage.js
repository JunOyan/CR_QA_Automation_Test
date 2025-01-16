import 'cypress-xpath';

/**
 * Stats page for the website. Contains elements and methods belonging to this page.
 */
class statsPage{
    elements = {
        input_search_term_textfield: () => cy.xpath("//input[contains(@class, 'glossary_searchInput')]"),
        search_result_article: () => this.elements.input_search_term_textfield().xpath("./following-sibling::article"),
    };

    //input a term in the search field
    searchForTerms(search_term){
        this.elements.input_search_term_textfield().should('be.visible');
        this.elements.input_search_term_textfield().type(search_term);
        this.validateSearchResult(search_term);
    }

    //validate the search result
    validateSearchResult(validate_term, expected_number_results=1){
        this.elements.search_result_article().should('have.length', expected_number_results);
        this.elements.search_result_article().within(() => {
            cy.xpath('.//abbr').should('have.text', validate_term);
        });
    }
}

module.exports = new statsPage();
