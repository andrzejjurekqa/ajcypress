import { faker } from "@faker-js/faker";

class RegisterPage {
    elements = {
        passwordField: () => cy.get('#dwfrm_profile_login_password_NL'),
        firstName: () => cy.get('#dwfrm_profile_customer_name_firstname_NL'),
        lastName: () => cy.get('#dwfrm_profile_customer_name_lastname_NL'),
        birthdate: () => cy.get('#dwfrm_profile_customer_birthday_NL'),
        postalCode: () => cy.get('#dwfrm_profile_address_postal_NL'),
        houseNumber: () => cy.get('#dwfrm_profile_address_houseNumber_NL'),
        phone: () => cy.get('#dwfrm_profile_customer_phone_NL'),
        cardBox: () => cy.get('.clickable-loyalty-email-list > .form-caption'),
        newsletterBox: () => cy.get('.clickable-email-list > .form-caption'),
        signUp: () => cy.get('#RegistrationForm > .btns-wrap > .btn')
    }

    generateBirthday() {
        const day = faker.number.int({ min: 1, max: 28 });
        const month = faker.number.int({ min: 1, max: 12 });
        const year = faker.number.int({ min: 1912, max: 2006 });
        return day.toString().padStart(2, "0") + month.toString().padStart(2, "0") + year.toString();
    }

    register() {
        let password = faker.internet.password();
        let name = faker.person.firstName()
        this.elements.passwordField().type(password);
        this.elements.firstName().type(name);
        this.elements.lastName().type(faker.person.lastName());
        this.elements.birthdate().type(this.generateBirthday());
        this.elements.postalCode().type('3781 DB');
        this.elements.houseNumber().type('111');
        this.elements.phone().type(faker.string.numeric({ length: 10 }));
        this.selectCard(faker.datatype.boolean);
        this.selectNewsletter(faker.datatype.boolean);
        this.elements.signUp().click();
        return [password, name];
    }

    selectCard(checkbox) {
        if (checkbox === true) {
            this.cardBox().click();
        }
    }
    
    selectNewsletter(checkbox) {
        if (checkbox === true) {
            this.newsletterBox().click();
        }
    }
}

export default RegisterPage;