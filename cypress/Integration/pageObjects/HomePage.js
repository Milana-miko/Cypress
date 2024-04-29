class HomePage {
    getNameField() {
        return cy.get("form input[name='name']");
    }

    getEmailField() {
        return cy.get("form input[name='email']");
    }

    getPasswordField() {
        return cy.get("#exampleInputPassword1");
    }

    getCheckbox() {
        return cy.get("input[type='checkbox']");
    }

    getGenderSelector() {
        return cy.get("#exampleFormControlSelect1");
    }

    getEmploymentStatusRadio() {
        return cy.get("form input[name='inlineRadioOptions']");
    }

    getDateOfBirth() {
        return cy.get("form input[name='bday']");
    }

    getNameField2() {
        return cy.get("h4 input[name='name']");
    }

    submit() {
        return cy.get("form input[type='submit']");
    }
}

export default HomePage