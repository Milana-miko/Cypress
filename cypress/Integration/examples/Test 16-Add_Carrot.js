describe("Add carrot", () => {
    it("Find carrot", () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get(".search-keyword").type("carrot");
        cy.wait(2000);
        cy.get(".products").find(".product").contains("ADD TO CART").click();
        cy.get(".cart-icon").click();
        //cy.get(".cart-preview.active").find(".cart-item").find(".product-name").contains('Carrot', { matchCase: false }).should("have.text", "Carrot");
        //cy.get(".cart-preview.active").find(".cart-item").find(".product-name:visible").should("have.length", 1);
        //cy.get(".cart-preview.active").find(".cart-item").find(".product-name").should('have.text', text => {
            // Convert both the actual and expected text to lowercase
           // const actualText = text.toLowerCase();
          //  const expectedText = 'CaRrot'.toLowerCase();
          
            // Use the include assertion to check if the actual text contains the expected text
            //expect(actualText).to.include("carrot");
            //actualText.should("contain", "carrot");
          //});

          cy.get('.cart-preview.active')
            .find('.cart-item')
            .invoke('text')
            .then((text) => {
                const lowercaseText = text.toLowerCase();
                expect(lowercaseText).to.include('carrot');

            });

        cy.get(".cart-preview.active").find(".cart-item").find(".product-name:visible").should("have.length", 1);
    });
});

