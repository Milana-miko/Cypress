class SignUpHomePage {
    getFirstNameField() {
        return cy.get("form input[name='firstName']");
    }

    getLastNameField() {
        return cy.get("form input[name='lastName']");
    }

    getUsernameField() {
        return cy.get("form input[name='username']");
    }

    getPasswordField() {
        return cy.get("form input[name='password']"); 
    }

    getConfirmPasswordField() {
        return cy.get("#confirmPassword"); 
    }

    submit() {
        return cy.get("button[type='submit']");
    }

    goSignIn() {
        return cy.get("a").contains("Have an account? Sign In");
    }

    getFirstNameErrorMessage() {
        return cy.get("#firstName-helper-text");
    }

    getLastnameErrorMessage() {
        return cy.get("#lastName-helper-text");
    }

    getUsernameErrorMessage() {
        return cy.get("#username-helper-text");
    }

    getPasswordErrorMessage() {
        return cy.get("#password-helper-text");
    }

    getConfirmPasswordErrorMessage() {
        return cy.get("#confirmPassword-helper-text");
    }
}

export default SignUpHomePage

