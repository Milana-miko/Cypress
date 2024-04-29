describe("Testing select box", () => {
    it("Working with select box", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("select").select("option2");
        //cy.get("select").should("have.value", "option2");
        cy.get("option:selected").should("have.value", "option2");

    });
});

/*
1. yntrel en chekboxy vory uni option 3 chekboxy texty vren chek anenk
HETO eachov frum enk u tesnenk vorn e chek exac u anchek enk anum u heto stugum enk vor bolory anchek en

2. yntrel option1 heto stugum enk vor yntrvac andamy uni Option1 texty
*/