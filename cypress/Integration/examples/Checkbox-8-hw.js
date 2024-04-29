describe("Testing Checkboxes", () => {
    it("Check whether the checkbox is checked or unchecked, and if the checkbox is checked, uncheck it", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("input[type='checkbox']").check(["option1", "option3"]);
        cy.get("input[type='checkbox']:checked").each(($el) => {            
                cy.wrap($el).uncheck();
        });

            //ili
            /*
            cy.get("input[type='checkbox']").each(($el) => { 

                if($el.prop("checked")){
                    cy.wrap($el).uncheck();
                }
    
            });
            */

        cy.get("input[type='checkbox']").should("not.be.checked");
    });
});