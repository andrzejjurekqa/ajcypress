class CookiesModal {

    elements = {
        accept: () => cy.get('[data-cy="cookie-accept-btn"]'),
        cookies: () => cy.get('.cookie-box', { timeout: 7000 })
    }

    acceptCookies() {
        this.elements.accept().click({ force: true});
        this.elements.cookies().should('not.be.visible');
    }
}

export default CookiesModal;