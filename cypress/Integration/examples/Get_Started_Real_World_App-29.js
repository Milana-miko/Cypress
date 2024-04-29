import StartedHomePage from "../pageObjects/Sign_In_Real_World_App";

describe("Testing Get Started pop-up", () => {
    const startedHomePage = new StartedHomePage();
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    });

    let formData;
    before(() => {
        cy.fixture("real_world_app").then((data) => {
            formData = data;
        });
    });

    it("Get Started pop-up", () => {

        // Next button in Get Started pop-up
        startedHomePage.getNextButton().should("have.text", "Next").click();
        
    }); 
});