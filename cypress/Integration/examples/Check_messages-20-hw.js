describe("Form validation", () => {
    let formData;
    before(() => {
        cy.fixture("testdata").then((data) => {
            formData = data;
        });
    });

    it(" Check that error/success message appeared and submit", () => {
        cy.visit("https://rahulshettyacademy.com/angularpractice/");

        cy.get("form input[name='name']").type("a");
        cy.get("form input[name='email']").type(formData.email);
        cy.get(".alert.alert-danger").should("be.visible");
        
        cy.get("form input[name='name']").type("aa");
        cy.get(".alert.alert-danger").should("not.exist");




        cy.get("form input[type='submit']").click();
        //cy.get("form .alert.alert-success.alert-dismissible").should("exist");
        cy.contains('Success!').should('be.visible');


    });
});

