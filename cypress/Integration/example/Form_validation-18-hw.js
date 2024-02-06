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
        cy.get("form input[name='email']").type(formData.email);
        cy.get("#exampleInputPassword1").type(formData.password);
        cy.get("input[type='checkbox']").check();
        cy.get("#exampleFormControlSelect1").select(formData.gender);
        cy.get("form input[value='option2'").click();
        cy.get("form input[name='bday']").type(formData.dateOfBirth);

        cy.get("h4 input[name='name']").should("have.value", formData.name);
        cy.get("form input[name='name']").should("have.attr", "minlength", 2);
        cy.get("form input[value='option3']").should("be.disabled");
    });
});