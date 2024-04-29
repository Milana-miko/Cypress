describe("Form validation", () => {
    let formData;
    before(() => {
        cy.fixture("testdata").then((data) => {
            formData = data;
        });
    });

    it("Filling in form", () => {
        cy.visit("https://rahulshettyacademy.com/angularpractice/");
        cy.get("form input[name='name']").type(formData.name);
        cy.get("#exampleFormControlSelect1").select(formData.gender);

        cy.get("h4 input[name='name']").should("have.value", formData.name);
        cy.get("form input[name='name']").should("have.attr", "minlength", 2);
        
    });

    // after(() => {

    // });

    // beforeEach(() => {

    // });

    // afterEach(() => {

    // });
});