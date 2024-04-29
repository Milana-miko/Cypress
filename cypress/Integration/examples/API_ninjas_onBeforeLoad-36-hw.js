describe("Testing ninjas JWT token", () => {
    let data;
    before(() => {
        cy.fixture("api_ninjas").then((userData) => {
            data = userData;
        });
    });

    it("Testing JWT token", () => {
        cy.loginNinjas(data.userEmail< data.userPassword)
            .then(() => {
                cy.visit("https://api-ninjas.com/profile", {
                //cy.visit("https://api.api-ninjas.com/op/user", {   
                    onBeforeLoad: (window) => {
                        window.localStorage.setItem("token", Cypress.env("token"));
                    }
                });
            });
    });
});