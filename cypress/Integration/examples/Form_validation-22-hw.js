describe("Form validation", () => {
    let formData;
    before(() => {
        cy.fixture("formdata").then((data) => {
            formData = data;
        });
    });

    it("Filling in form", () => {
        cy.visit("https://prium.github.io/falcon/v3.19.0/modules/forms/wizard.html");
        cy.wait(2000);
        cy.get("#bootstrap-wizard-validation-wizard-name").type(formData.name);
        cy.get("#bootstrap-wizard-validation-wizard-email").type(formData.email);
        cy.get("#bootstrap-wizard-validation-wizard-password").type(formData.password);
        cy.get("#bootstrap-wizard-validation-wizard-confirm-password").type(formData.password);
        cy.get("#bootstrap-wizard-validation-wizard-checkbox").uncheck();
        if(formData.accept){
            cy.get("#bootstrap-wizard-validation-wizard-checkbox").check();
        }
        cy.get(".card.theme-wizard.h-100.mb-5").find("button[type='submit']").eq(0).click({force: true});
        cy.get("#bootstrap-wizard-validation-gender").select(formData.gender);
        cy.get("#bootstrap-wizard-validation-wizard-phone").type(formData.phonenumber);
        cy.get("#bootstrap-wizard-validation-wizard-datepicker").type(formData.dateOfBirth, {force: true});
        cy.get(".flatpickr-calendar.animate.arrowTop.arrowLeft.open").invoke("hide");
        cy.get("#bootstrap-wizard-validation-wizard-address").type(formData.address, {force: true});
        cy.get(".card.theme-wizard.h-100.mb-5").find("button[type='submit']").eq(0).click({force: true});
        cy.get("#form-wizard-card-number").type(formData.cardNumber, {force: true});
        cy.get("#form-wizard-card-name").type(formData.nameOnCard, {force: true});
        cy.get("#form-wizard-progress-card-holder-country").select(formData.country, {force: true});
        cy.get("#form-wizard-progress-card-holder-zip-code").type(formData.zipCode, {force: true});
        cy.get("#form-wizard-progress-card-exp-date").type(formData.expData, {force: true});
        cy.get("#form-wizard-progress-card-cvv").type(formData.cvv, {force: true});
        cy.get(".card.theme-wizard.h-100.mb-5").find("button[type='submit']").eq(0).click({force: true});
    });

});