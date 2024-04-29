describe("Testing Checkboxes", () => {
    it("Test if checkbox is checked or unchecked", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //cy.get("#checkBoxOption3").check().should("be.checked").and("have.value", "option3");
        //cy.get("#checkBoxOption3").uncheck().should("not.be.checked");
        //cy.get("#checkBoxOption3").should("have.value", "option3"); // esli dva shoulda to ispolzuem and
        //cy.get("input[type='checkbox']").check(); // vse otmetil
        cy.get("input[type='checkbox']").check(["option1", "option2"]);
        cy.get("input[type='checkbox']:checked").should("have.length", 2);
        
    });
});