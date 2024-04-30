class AccountSidebar {

    elements = {
        logoutBtn: () => cy.get('[data-gtm-title="account_logout"]').first(),
        greeting: () => cy.get('.vertical-spacer-5-bottom > .acc-name-title', { timeout: 12000 })
    }
}

export default AccountSidebar;