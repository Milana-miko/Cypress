describe("Testing select box", () => {
    it("Checking that the selected option contains 'Option2' text and the check that select value is option2", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        let textValue = "";
        cy.get("#dropdown-class-example").find("option").each(($el) => {
            const optionName = $el.text();
            if(optionName.includes("Option2")) {
                textValue = $el.val();
                //cy.wrap($el).click();
            }
        });
        cy.get("select").select(textValue);
        cy.get("#dropdown-class-example").should("have.value", "option2");
    });
});