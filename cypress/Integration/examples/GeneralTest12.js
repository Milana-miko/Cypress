// 1. Check logo

describe("Test logo", () => {
    /*
    it("Testing logo", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get(".logoClass").should("exist").and("be.visible");
    });
    
    it("Testing 'hide' and 'show' buttons", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("#hide-textbox").click();
        cy.get("#displayed-text").should("not.be.visible");
        cy.get("#show-textbox").click();
        cy.get("#displayed-text").should("be.visible");
    });
    */

    it("Testing table", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/"); 
        cy.get("table").eq(1).find("th").as("table_column").contains("City").should("have.text", "City");
        cy.get("@table_column").should("have.length", 4);
    });
});