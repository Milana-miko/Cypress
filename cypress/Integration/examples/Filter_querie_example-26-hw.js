describe("Testing shope", function() {
    beforeEach(() => {
        cy.visit("https://prium.github.io/falcon/v3.19.0/app/e-commerce/product/product-list.html?#!");
    });

    it("Testing 'filter' querie", function() {
        cy.get(".card").find(".col-sm-7.col-md-8").filter("del");
    });
});