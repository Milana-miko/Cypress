import HomePage from "../pageObjects/HomePage";

describe("Testing page objects", () => {
    const homePage = new HomePage();
    beforeEach(() => {
        cy.visit("https://rahulshettyacademy.com/angularpractice/");
    });

    let formData;
    before(() => {
        cy.fixture("testdata").then((data) => {
            formData = data;
        });
    });
    
    it("Using page object methods", () => {
        homePage.getNameField().type(formData.name);
        homePage.getEmailField().type(formData.email);
        homePage.getPasswordField().type(formData.password);
        if(formData.loveIceCreams){
            homePage.getCheckbox().check();
        }
        homePage.getGenderSelector().select(formData.gender);
        homePage.getEmploymentStatusRadio().check(formData.employmentStatus);
        homePage.getDateOfBirth().type(formData.dateOfBirth);

        homePage.getNameField().should("have.value", formData.name);
        homePage.getNameField().should("have.attr", "minlength", 2);
        homePage.getNameField2().should("have.value", formData.name);
        homePage.getEmploymentStatusRadio().should("be.disabled");
    });
});