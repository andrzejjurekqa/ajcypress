import CookiesModal from '../pages/cookies';
import RegisterPage from '../pages/register';
import LoginSidebar from '../pages/loginSidebar';
import MainPage from '../pages/mainPage';

import orderData from '../fixtures/electronics.data.json';
const data = JSON.parse(JSON.stringify(orderData));

describe('Register, Login, Select and Order', () => {
    let username;
    let creds;
    let password;
    let name;
    beforeEach(function () {
        cy.visit(Cypress.env("url"))
        const cookiesModal = new CookiesModal();
        cookiesModal.acceptCookies()
        cookiesModal.elements.cookies().should('not.be.visible');
    })
    it('Register and Login', () => {
        const mainPage = new MainPage();
        const loginSidebar = new LoginSidebar();
        const registerPage = new RegisterPage();
        mainPage.elements.accountButton().click();
        username = loginSidebar.newUser();
        creds = registerPage.register()
        password = creds[0];
        name = cred[1];
        cy.visit(Cypress.env("url"))
        mainPage.elements.accountButton().click();
        loginSidebar.login()
    })
})