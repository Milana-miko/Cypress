import SignInHomePage from "../Integration/pageObjects/Sign_In_Real_World_App";


const signInhomePage = new SignInHomePage();

Cypress.Commands.add("addToCard", (productName) => {
    cy.get(".card").each(($el, $indx, $list) => {

        cy.get(".card-title").eq($indx).then(($item) => {
            if($item.text().includes(productName)) {
                cy.get(".btn-info").eq($indx).click();
                return false;
            }
        });
        
    });
});

Cypress.Commands.add("addToCart", (productName) => {
    cy.get(".card").each(($index) => {
        cy.get(".col-lg-8").eq($index).then(($item) => {
            if($item.text().includes(productName)) {
                cy.get(".btn.btn-sm.btn-primary.d-lg-block.mt-lg-2").eq($index).click();
                return false;
            }
        });
    });
});


Cypress.Commands.add("login", (user, userPassword) => {
        signInhomePage.getUsernameField().clear().type(user);
        signInhomePage.getPasswordField().clear().type(userPassword);
        signInhomePage.submit().click();
 });
 
 
 Cypress.Commands.add("loginRahul", (userEmail, userPassword) => {
    cy.request("POST", "https://rahulshettyacademy.com/api/ecom/auth/login", {userEmail, userPassword})
        .then((resp) => {
            Cypress.env("token", resp.body.token); //s odnoy peremennoy Get, s dvumya peremennymi Set (mojno menyat')
        });
 });


 Cypress.Commands.add("loginNinjas", (userEmail, userPassword) => {
    cy.request("GET", "https://api-ninjas.com/signin", {userEmail, userPassword})
        .then((resp) => {
            Cypress.env("token", resp.body.api_key);
        });
 });