import { faker } from "@faker-js/faker";

class LoginSidebar {
    elements = {
        usernameField: () => cy.get('#dwfrm_login_username_default'),
        passwordField: () => cy.get('#dwfrm_login_password_default'),
        loginBtn: () => cy.get('#dwfrm_login > .btn'),
        emailField: () => cy.get('#dwfrm_preregister_username_default', { timeout: 10000 }),
        registerBtn: () => cy.get('.form-row-button > .btn')
    }

    login(username, password) {
        this.elements.usernameField().type(username);
        this.elements.passwordField().type(password);
        this.elements.loginBtn().click();
    }

    newUser() {
        let username = faker.internet.email();
        this.elements.emailField().type(username);
        this.elements.registerBtn().click();
        return username;
    }
}

export default LoginSidebar;
