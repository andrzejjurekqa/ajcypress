export class MainPage {

    elements = {
        accountButton: () => cy.get('.profile-name'),
        searchBar: () => cy.get('.js-search-fake'),
        seachInput: () => cy.get('[id="q"]'),
        searchResult: () => cy.get('link'),
        productName: () => cy.get('js-product-link'),
        enterdetails: () => cy.get('.js-product-container'),
        filters: () => cy.get('[data-refinement-id="producttype"]'),
        availableDropdown: () => cy.get('.dropdown-item-accordion').filter({ hasText: 'online op voorraad' }).first(),
        available: () => cy.get('[data-refinement-id="searchable"]'),
        productPrice: () => cy.get('.js-price'),
        orderButton: () => cy.get('.cart-icon'),
        greeting: () => cy.get('.acc-name-title'),        
    }

    searchCategory(category) {
        this.elements.searchBar().click();
        this.elements.seachInput().fill(category);
        this.elements.searchResult().filter({ hasText: category }).first().click();
    }

    filterProducts(filter) {
        this.elements.filters().filter({ hasText: filter }).first().click();
    }

    selectAvailable() {
        this.elements.availableDropdown().click()
        this.elements.available().click();
    }

    verifyProductType(text) {
        this.genericLoop(this.productName, text)
    }

    enterProductDetails(product) {
        this.elements.enterdetails().filter({ hasText: product }).click();
    }
}

export default MainPage;