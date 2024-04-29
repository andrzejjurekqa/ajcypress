class CookiesModal {

    elements = {
        cookies: () => cy.get('.cookie-box', { timeout: 6000 }),
        accept: () => cy.get('[data-cy="cookie-accept-btn"]'),
    }

    acceptCookies() {
        this.elements.accept().click({ force: true })
    }
}

export default CookiesModal;