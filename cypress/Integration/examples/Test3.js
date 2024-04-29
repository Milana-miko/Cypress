describe("Testing shope", function() {
    /*
    it("Check the functionality of the plus button", function() {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get(".search-keyword").type("ca");
        cy.get(".products").find(".product").eq(2).contains("+").click().click();
        cy.get(".products").find(".product").eq(2).find(".quantity").should("have.value", 3);
    });
*/
    it("Check shopping cart", function() {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get(".search-keyword").type("ca");
        cy.get(".products").find(".product").eq(3).contains("ADD TO CART").click();
        cy.get(".cart-icon").click();
        cy.get(".action-block").contains("PROCEED TO CHECKOUT").click();
    });
});