/*
1. yntrel en chekboxy vory uni option 3 chekboxy texty vren chek anenk
HETO eachov frum enk u tesnenk vorn e chek exac u anchek enk anum u heto stugum enk vor bolory anchek en
*/

describe("Testing Checkboxes", () => {
    it("Check to see if the checkbox is checked and if it is checked, uncheck it", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("label").contains("Option2").find("input[type='checkbox']").check();
        cy.get("label").contains("Option3").find("input[type='checkbox']").check();
        cy.get("input[type='checkbox']:checked").should("have.length", 2);
        cy.get("input[type='checkbox']:not(:checked)").should("have.length", 1);
        cy.get("input[type='checkbox']:checked").each(($el) => {
            cy.wrap($el).uncheck();
        });

        cy.get("input[type='checkbox']").should("not.be.checked");
    });
});