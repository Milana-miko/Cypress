import SignUpHomePage from "../pageObjects/Sign_Up_Real_World_App";

describe("Testing Sign In page", () => {
    const signUphomePage = new SignUpHomePage();
    beforeEach(() => {
        cy.visit("http://localhost:3000/signup");
    });

    let formData;
    before(() => {
        cy.fixture("real_world_app").then((data) => {
            formData = data;
        });
    });

    it("Filling in Sign Up form", () => {

        // Username error message in Sign Up form
        signUphomePage.submit().should("not.be.disabled").click();
        signUphomePage.getFirstNameErrorMessage().should("be.visible").and("have.text", "First Name is required"); 
        signUphomePage.submit().should("be.disabled");

        // Lastname error message in Sign Up form
        signUphomePage.getLastNameField().click();
        signUphomePage.getUsernameField().click();
        signUphomePage.getLastnameErrorMessage().should("be.visible").and("have.text", "Last Name is required"); 
        signUphomePage.submit().should("be.disabled");

        // Username error message in Sign Up form
        signUphomePage.getPasswordField().click();
        signUphomePage.getUsernameErrorMessage().should("be.visible").and("have.text", "Username is required"); 
        signUphomePage.submit().should("be.disabled");

        // Password error message in Sign Up form
        signUphomePage.getPasswordField().click();
        signUphomePage.getConfirmPasswordField().click();
        signUphomePage.getPasswordErrorMessage().should("be.visible").and("have.text", "Enter your password"); 
        signUphomePage.submit().should("be.disabled");

        // Password-2 error message in Sign Up form
        signUphomePage.getPasswordField().type(formData.lessPassword);
        signUphomePage.getPasswordErrorMessage().should("be.visible").and("have.text", "Password must contain at least 4 characters"); 
        signUphomePage.submit().should("be.disabled");

        // Confirm password error message in Sign Up form
        signUphomePage.getConfirmPasswordErrorMessage().should("be.visible").and("have.text", "Confirm your password"); 
        signUphomePage.submit().should("be.disabled");

        // Confirm password-2 error message in Sign Up form
        signUphomePage.getPasswordField().type(formData.newUserPpassword);
        signUphomePage.getConfirmPasswordField().type(formData.otherPassword);
        signUphomePage.getConfirmPasswordErrorMessage().should("be.visible").and("have.text", "Password does not match"); 
        signUphomePage.submit().should("be.disabled");

        // Correct filling in Sign Up form
        signUphomePage.getFirstNameField().type(formData.newFirstname);
        signUphomePage.getFirstNameErrorMessage().should("not.be.exist");
        signUphomePage.getLastNameField().type(formData.newLastname);
        signUphomePage.getLastnameErrorMessage().should("not.be.exist");  
        signUphomePage.getUsernameField().type(formData.newUsername);
        signUphomePage.getUsernameErrorMessage().should("not.be.exist"); 
        signUphomePage.getPasswordField().clear().type(formData.newUserPpassword);
        signUphomePage.getPasswordErrorMessage().should("not.be.exist");  
        signUphomePage.getConfirmPasswordField().clear().type(formData.newUserPpassword);
        signUphomePage.getConfirmPasswordErrorMessage().should("not.be.exist"); 
        signUphomePage.submit().should("not.be.disabled").click();
        cy.visit("http://localhost:3000/signin");
        cy.url().should("include", "http://localhost:3000/signin");
    });   

    it("Go to the Sign In form", () => { 
        signUphomePage.goSignIn().click();
        cy.visit("http://localhost:3000/signin");
        cy.url().should("include", "http://localhost:3000/signin");
    });  

});