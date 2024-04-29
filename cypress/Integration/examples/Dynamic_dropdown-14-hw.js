describe("Testing dynamic dropdown", () => {
    it("Checking that the dynamic drop-down lists indicate exactly France", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("#autocomplete").type("Fr");
        cy.get(".ui-menu-item").each(($el) => {
            const text = $el.find(".ui-menu-item-wrapper").text();
            if(text === "France") {
                cy.wrap($el).click();
            }
        });

        cy.get("#autocomplete").should("have.value", "France");
    });
});