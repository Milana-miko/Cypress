//2. yntrel option1 heto stugum enk vor yntrvac andamy uni Option1 texty

describe("Testing select box", () => {
    it("Testing select box", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("select").select("option1");
        cy.get("option:selected").contains("Option1").should("have.text", "Option1");
        cy.get("select").select("").should("have.value", "");
    });
});