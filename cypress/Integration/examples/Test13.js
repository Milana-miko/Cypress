describe("Testing dynamic dropdown", () => {
    // it("Selecting and checking dynamic dropdowns", () => {
    //     cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    //     cy.get("#autocomplete").type("Fra");
    //     cy.get(".ui-autocomplete").find(".ui-menu-item").eq(1).click();
    //     cy.get("#autocomplete").should("have.value", "France Metropolitan");
    // });

    // it("Testing dropdown option", () => {
    //     cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    //     cy.get("#dropdown-class-example").contains("Option2").select();
    // });

    it("Testing radios", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("input[value='radio2']").click();
        cy.get("[value='radio2']").should("be.checked");
    });
});