import CookiesModal from '../pages/cookies';
import RegisterPage from '../pages/register';
import LoginSidebar from '../pages/loginSidebar';
import MainPage from '../pages/mainPage';
import AccountSidebar from '../pages/account';
import OrderPage from '../pages/order';
import ProductPage from '../pages/product';

describe('Register, Login, Select and Order', function () {
    let cookiesModal;
    let mainPage;
    let registerPage;
    let accountSidebar;
    let loginSidebar;
    let orderPage;
    let productPage;
    beforeEach(function () {
        cy.fixture('electronics.data').then((data) => {
            this.data = data
        })
        mainPage = new MainPage();
        registerPage = new RegisterPage();
        accountSidebar = new AccountSidebar();
        loginSidebar = new LoginSidebar();
        orderPage = new OrderPage();
        productPage = new ProductPage();
        cy.visit(Cypress.env("url"))
        cy.on('uncaught:exception', (err, runnable) => { return false })
        cookiesModal = new CookiesModal();
        cookiesModal.acceptCookies();
    })
    it('Register and Login', function () {
        mainPage.elements.accountButton().click({ force: true })
        const username = loginSidebar.newUser()
        const creds = registerPage.register()
        const password = creds[0];
        const name = creds[1];
        accountSidebar.elements.greeting().should('include.text', 'hoi ' + name)
        mainPage.elements.accountButton().click()
        accountSidebar.elements.logoutBtn().click({ force: true })
        cy.visit(Cypress.env("url"))
        mainPage.elements.accountButton().click()
        loginSidebar.login(username, password)
        mainPage.elements.accountButton().should('include.text', name)
    });
    it('Search and Verify', function () {
        mainPage.searchCategory(this.data.category)
        mainPage.selectAvailable()
        mainPage.filterProducts(this.data.type)
        mainPage.elements.productName().should('include.text', this.data.type)
    });
    it.only('Order and Verify', function () {
        mainPage.searchCategory(this.data.category)
        mainPage.selectAvailable()
        mainPage.filterProducts(this.data.type)
        mainPage.enterProductDetails(this.data.product)
        productPage.elements.addToCart().click()
        mainPage.elements.orderButton().click()
        mainPage.elements.checkoutButton().click()
        orderPage.elements.itemInfo().should('include.text', this.data.product)
    });
})