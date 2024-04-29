describe("My Cool First Test Suite", function() {
    it("my first Test case", function() {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get(".search-keyword").type("ca");
        cy.wait(2000);
        //cy.get(".product:visible").should("have.length", 4);
        //cy.get(".products .product").should("have.length", 4);
        //cy.get(".products").find(".product");
        //cy.get(".products").find("img");
        //cy.get(".products").find(".product").eq(1);
        //cy.get(".products").find(".product").eq(1).contains("ADD TO CART");
        cy.get(".products").find(".product").eq(1).contains("ADD TO CART").click();
    

    });
/*
    it("my second Test case", function() {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get(".search-keyword").type("ma");
        cy.get(".product:visible");     
    });
*/    
})