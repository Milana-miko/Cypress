class SignInHomePage {
    getUsernameField() {
        return cy.get("form input[name='username']");
    }

    getPasswordField() {
        return cy.get("form input[name='password']"); 
    }

    getCheckbox() {
        return cy.get("form input[type='checkbox']");
    }

    submit() {
        return cy.get("button[type='submit']");
    }

    goSignUp() {
        return cy.get("a").contains("Don't have an account? Sign Up");
    }

    getUsernameErrorMessage() {
        return cy.get("#username-helper-text");
    }

    getPasswordErrorMessage() {
        return cy.get("#password-helper-text");
    }

    getUsernameOrPasswordInvalidErrorMessage() {
        return cy.get(".MuiAlert-message");
    }

}

export default SignInHomePage

