Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return true;
  });

describe('Form pactice', () => {
    before(() => {
        cy.visit('https://demoqa.com/automation-practice-form');
    });

    it('fill in form and submit', () => {
       cy.get('#userNumber')
    });
});