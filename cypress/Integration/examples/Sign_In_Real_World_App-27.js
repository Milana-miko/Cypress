import SignInHomePage from "../pageObjects/Sign_In_Real_World_App";

describe("Testing Sign In page", () => {
    const signInhomePage = new SignInHomePage();
    beforeEach(() => {
        cy.visit("http://localhost:3000/signin");
    });

    let formData;
    before(() => {
        cy.fixture("real_world_app").then((data) => {
            formData = data;
        });
    });
    
    it("Filling in Sign In form ", () => {

        signInhomePage.submit().should("not.be.disabled").click();
        signInhomePage.getUsernameErrorMessage().should("be.visible").and("have.text", "Username is required"); 
        signInhomePage.submit().should("be.disabled");
        
        //Password error message in Sign In form
        signInhomePage.getPasswordField().type(formData.lessPassword);
        signInhomePage.getPasswordErrorMessage().should("be.visible").and("have.text", "Password must contain at least 4 characters"); 
        signInhomePage.submit().should("be.disabled");

        //Correct username incorrect password in Sign In form
        cy.login(formData.username, formData.otherPassword);
        signInhomePage.submit().should("not.be.disabled").click();
        signInhomePage.getUsernameOrPasswordInvalidErrorMessage().should("be.visible").and("have.text", "Username or password is invalid"); 
        cy.url().should("include", "http://localhost:3000/signin");

        //Incorrect username correct password in Sign In form
        cy.login(formData.invalidUsername, formData.password);
        signInhomePage.submit().should("not.be.disabled").click();
        signInhomePage.getUsernameOrPasswordInvalidErrorMessage().should("be.visible").and("have.text", "Username or password is invalid"); 
        cy.url().should("include", "http://localhost:3000/signin");

        //Type min characters in username and password in Sign In form
        signInhomePage.getUsernameField().type(formData.invalidUsername);
        signInhomePage.getPasswordField().type(formData.otherPassword);
        signInhomePage.getUsernameErrorMessage().should("not.be.exist");
        signInhomePage.getPasswordErrorMessage().should("not.be.exist"); 

        // Correct filling in Sign In form with commands
        cy.login(formData.username, formData.password);
        signInhomePage.getUsernameErrorMessage().should("not.be.exist");
        signInhomePage.getPasswordErrorMessage().should("not.be.exist"); 
        cy.visit("http://localhost:3000/");
        cy.wait(5000);
        cy.get(".MuiGrid-root.MuiGrid-item").find("h6").eq(1).contains("@Katharina_Bernier").should("have.text", "@Katharina_Bernier");
        cy.get(".MuiListItemText-root").contains("Logout").click();
        cy.url().should("include", "http://localhost:3000/signin");
    
    });    
        
    it("Correct filling in Sign In form", () => {    
        signInhomePage.getUsernameField().type(formData.username);
        signInhomePage.getUsernameErrorMessage().should("not.be.exist");
        signInhomePage.getPasswordField().type(formData.password);
        signInhomePage.getPasswordErrorMessage().should("not.be.exist");   
        if(signInhomePage.submit().should("not.be.disabled").click()){
            cy.visit("http://localhost:3000/");
            cy.get(".MuiGrid-root.MuiGrid-item").find("h6").eq(1).contains("@Katharina_Bernier").should("have.text", "@Katharina_Bernier");
            cy.get(".MuiListItemText-root").contains("Logout").click();
            cy.url().should("include", "http://localhost:3000/signin");
        }
        
    });    

    // it("Go to the Sign Up form", () => { 

    //     cy.url().should("include", "http://localhost:3000/signin");
    //     signInhomePage.goSignUp().click();
    //     cy.visit("http://localhost:3000/signup");
    //     cy.url().should("include", "http://localhost:3000/signup");
    // });    
    
});