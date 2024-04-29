describe("Testing shope", function() {
    beforeEach(() => {
        cy.visit("https://rahulshettyacademy.com/angularpractice/shop");
    });

    it("Testing 'as, contains, eq, find, first, get, last' queries", function() {
        cy.get("app-card").find(".card-footer").as("addProduct");
        cy.get("@addProduct").eq(1).contains("Add").click();
        cy.get("@addProduct").first().contains("Add").click();
        cy.get("@addProduct").last().contains("Add").click(); 
    });

    // it("Testing 'children' querie", function() {
    //     cy.debug(cy.get("app-card").children()); //vozvrashaet massiv, esli net nichego, to vozvrashaet pustoy massiv
    // });

    // it("Testing 'closest' querie", function() {
    //     cy.get(".card-title").closest(".card");
    // });

    // it("Testing 'document' querie", function() {
    //     cy.document();
    // });

    // it("Testing 'filter' querie", function() {
    //     cy.get("app-card-list").filter(".card-title");
    // });

    // it("Testing 'hash' querie", function() {
    //     console.log(cy.hash()); 
    // });
});