import { faker } from "@faker-js/faker"

export class RegisterPage {
    elements = {
        passwordField: () => cy.get('#dwfrm_profile_login_password_NL'),
        firstName: () => cy.get('voornaam*'),
        lastName: () => cy.get('achternaam*'),
        birthdate: () => cy.get('geboortedatum*'),
        postalCode: () => cy.get('postcode*'),
        houseNumber: () => cy.get('huisnummer*'),
        phone: () => cy.get('telefoonnummer optioneel'),
        cardBox: () => cy.get('.clickable-loyalty-email-list > .form-caption'),
        newsletterBox: () => cy.get('.clickable-email-list > .form-caption'),
        signUp: () => cy.get('button', { name: 'meld je aan' }),
    }

    generateBirthday() {
        const day = faker.number.int({ min: 1, max: 28 });
        const month = faker.number.int({ min: 1, max: 12 });
        const year = faker.number.int({ min: 1912, max: 2006 });
        return day.toString().padStart(2, "0") + '-' + month.toString().padStart(2, "0") + '-' + year.toString();
    }

    register() {
        let password = faker.internet.password();
        let name = faker.person.firstName()
        this.elements.passwordField().fill(password);
        this.elements.firstName().fill(name);
        this.elements.lastName().fill(faker.person.lastName());
        this.elements.birthdate().fill(this.generateBirthday());
        this.elements.postalCode().fill('3781 DB');
        this.elements.houseNumber().fill('111');
        this.elements.phone().fill(faker.string.numeric({ length: 10 }));
        this.elements.selectCard(faker.datatype.boolean);
        this.elements.selectNewsletter(faker.datatype.boolean);
        this.elements.signUp().click();
        return [password, name];
    }

    selectCard(checkbox) {
        if (checkbox === true) {
            this.cardBox.click();
        }
    }
    selectNewsletter(checkbox) {
        if (checkbox === true) {
            this.newsletterBox.click();
        }
    }
}

export default RegisterPage;