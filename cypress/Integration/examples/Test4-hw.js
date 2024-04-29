describe("Testing shope", function() {
    it("Check the number of items in shopping cart", function() {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get(".search-keyword").type("ca");
        cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click();
        cy.get(".search-keyword").type("ma").clear().type("ma");
        cy.get(".products").find(".product").eq(1).contains("ADD TO CART").click();
        cy.get(".cart-icon").click();
        cy.get(".action-block").contains("PROCEED TO CHECKOUT").click();
        cy.get(".product-name").should("have.length", 2);
    });
});
