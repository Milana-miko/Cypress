describe("Testing shope", function() {
    it("Check the number of items in shopping cart", function() {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get(".products").find(".product").as("product");
        cy.get("@product").eq(2).contains("ADD TO CART").click();
        cy.get("@product").eq(6).contains("ADD TO CART").click();
        cy.get("@product").eq(8).contains("ADD TO CART").click();
        cy.get(".cart-icon").click();
        cy.get(".cart-items").find(".product-name:visible").should("have.length", 3);
    });

    it("Check each functionality", function() {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get(".search-keyword").type("ca");
        cy.get(".products").find(".product").each(($el, $index, $list) => {
            const productName = $el.find(".product-name").text();
            if(productName.includes("Cashews")) {
                $el.find("button").click();
            }
        });
    });
});
