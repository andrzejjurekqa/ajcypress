class MainPage {

    elements = {
        accountButton: () => cy.get('.profile-name', { timeout: 6000 }),
        searchBar: () => cy.get('.js-search-fake'),
        seachInput: () => cy.get('#q'),
        searchResult: () => cy.get('.search-queries-suggestion-link'),
        resultsBar: () => cy.get('.search-term-title', { timeout: 6000 }),
        productName: () => cy.get('.js-product-link', { timeout: 6000 }),
        enterdetails: () => cy.get('.js-product-container', { timeout: 12000 }),
        filters: () => cy.get('.data-refinement-id="producttype"'),
        filterBox: () => cy.get('a > .size-box'),
        availableDropdown: () => cy.get('[data-cy="plp-filter-menu-filter-searchable"] > .trigger'),
        available: () => cy.get('[data-refinement-id="searchable"]'),
        orderButton: () => cy.get('.cart-icon'),
        checkoutButton: () => cy.get('[data-cy="minicart-to-order-btn"]'),
        spinner: () => cy.get('.loader-overlay > .loader', { timeout: 12000 })
    }

    searchCategory(category) {
        this.elements.searchBar().click();
        this.elements.seachInput().type(category);
        this.elements.searchResult().each(($el, index) => {
            if ($el.text().includes(category)) {
                cy.wrap($el).eq(index).click({ force: true })
                this.elements.resultsBar().should('include.text', 'resultaten voor "' + category + '"')
            }
        })
    }

    filterProducts(filter) {
        this.elements.filterBox().each(($el, index) => {
            if ($el.parent().text().includes(filter)) {
                this.elements.filterBox().eq(index).click({ force: true });
            }
        })
    }

    selectAvailable() {
        this.elements.availableDropdown().click({ force: true });
        this.elements.available().click({ force: true });
    }

    verifyProductType(text) {
        this.genericLoop(this.productName, text);
    }

    enterProductDetails(product) {
        this.elements.enterdetails().contains(product).click({ force: true });
    }
}

export default MainPage;