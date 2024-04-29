describe("Select and add product", () => {
    let product;
    before(() => {
        cy.fixture("falcon_productdata").then((data) => {
            product = data;
        });
    });

    it("selecting product", () => {
        cy.visit("https://prium.github.io/falcon/v3.19.0/app/e-commerce/product/product-list.html?#!");
        cy.get(".form-control.search-input.fuzzy-search").type("Apple");
        //cy.get(".navbar.navbar-light.navbar-glass.navbar-top.navbar-expand").click();

        for(let i = 0; i <product.products.length; i++) {
            cy.addToCart(product.products[i]);
        }
    });
});