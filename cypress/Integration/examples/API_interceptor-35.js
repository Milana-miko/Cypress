describe("JWT token", () => {

    let data;
    before(() =>{
        cy.fixture("api_rahul").then((userData) => {
            data = userData;
        });
    });

    it("Testing JWT token", () => {
        cy.loginRahul(data.userEmail, data.userPassword)
            .then(() => {
                cy.visit("https://rahulshettyacademy.com/client", {
                    onBeforeLoad: (window) => {
                        window.localStorage.setItem("token", Cypress.env("token"));
                    }
                });
            });
        cy.get(".btn.w-10.rounded").eq(1).click();
        cy.get(".btn.btn-custom").contains("Cart").click();
        cy.get(".infoWrap").find("h3").should("have.text", "ADIDAS ORIGINAL").should("have.length", 1);
        cy.get(".btn.btn-primary").contains("Buy Now").click();
        cy.get(".user__address").type("A");
        cy.get(".ta-results.list-group.ng-star-inserted").find("button").contains("Armenia").click();
        //cy.get(".user__address").should("have.text", "Armenia"); 
        cy.get(".input.ddl").eq(1).select("28");
        cy.get(".field.small").find("input").eq(0).type("123");
        cy.get(".field").find("input").eq(2).type("MIL");
        cy.get(".btnn.action__submit.ng-star-inserted").contains("Place Order").click();
        cy.wait(2000);
        cy.get("button").contains("Click To Download Order Details in CSV").click();

        cy.readFile(Cypress.config("fileServerFolder") + "/cypress/downloads/order-invoice_amelyan.milana.csv")
        .then((text) => {
            console.log(text);
        });

    
        

    });
});