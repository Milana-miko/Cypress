describe("Testing SAS", function() {
    it("Add Capsicum", function() {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get(".search-keyword").type("ca");
        cy.wait(2000);
        cy.get(".products").find(".product").eq(2).find("a[href='#']").eq(0).contains("–").click();
    });
})