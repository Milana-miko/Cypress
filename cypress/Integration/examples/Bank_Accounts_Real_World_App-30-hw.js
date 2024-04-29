import BankAccountsHomePage from "../pageObjects/Bank_Accounts_Real_World_App";

describe("Testing Bank Account", () => {
    const bankAccounts = new BankAccountsHomePage();
    beforeEach(() => {
        //cy.visit("http://localhost:3000/");
        cy.visit("http://localhost:3000/signin");
    });

    let formData;
    before(() => {
        cy.fixture("real_world_app").then((data) => {
            formData = data;
        });
    });

    it("Create new Bank Account", () => {

        cy.login(formData.username, formData.password);
        bankAccounts.gerBankAccount().click();
        cy.url().should("include", "http://localhost:3000/bankaccounts");

        bankAccounts.getCreate().click({force: true});
        cy.url().should("include", "http://localhost:3000/bankaccounts/new");

        bankAccounts.save().should("not.be.disabled").click().click();
        bankAccounts.getBankNameErrorMessage().should("be.visible").and("have.text", "Enter a bank name"); 
        bankAccounts.save().should("be.disabled");
        
        bankAccounts.getBankName().type(formData.lessBankName);
        bankAccounts.getBankNameErrorMessage().should("be.visible").and("have.text", "Must contain at least 5 characters"); 
        bankAccounts.save().should("be.disabled");

        bankAccounts.getRoutingNumber().click();
        bankAccounts.getAccountNumber().click();
        bankAccounts.getRoutingNumberErrorMessage().should("be.visible").and("have.text", "Enter a valid bank routing number"); 
        bankAccounts.save().should("be.disabled");

        bankAccounts.getRoutingNumber().type(formData.lesscardNumber);
        bankAccounts.getRoutingNumberErrorMessage().should("be.visible").and("have.text", "Must contain a valid routing number"); 
        bankAccounts.save().should("be.disabled");

        bankAccounts.getRoutingNumber().type(formData.moreCardNumber);
        bankAccounts.getRoutingNumberErrorMessage().should("be.visible").and("have.text", "Must contain a valid routing number"); 
        bankAccounts.save().should("be.disabled");

        bankAccounts.getAccountNumberErrorMessage().should("be.visible").and("have.text", "Enter a valid bank account number"); 
        bankAccounts.save().should("be.disabled");

        bankAccounts.getAccountNumber().type(formData.lesscardNumber);
        bankAccounts.getAccountNumberErrorMessage().should("be.visible").and("have.text", "Must contain at least 9 digits"); 
        bankAccounts.save().should("be.disabled");

        bankAccounts.getAccountNumber().type(formData.moreCardNumber);
        bankAccounts.getAccountNumberErrorMessage().should("be.visible").and("have.text", "Must contain no more than 12 digits"); 
        bankAccounts.save().should("be.disabled");

        bankAccounts.getBankName().clear().type(formData.bankName);
        bankAccounts.getBankNameErrorMessage().should("not.be.exist");
        bankAccounts.save().should("be.disabled");
        bankAccounts.getRoutingNumber().clear().type(formData.routingNumber);
        bankAccounts.getRoutingNumberErrorMessage().should("not.be.exist");
        bankAccounts.save().should("be.disabled");
        bankAccounts.getAccountNumber().clear().type(formData.accountNumber);
        bankAccounts.getAccountNumberErrorMessage().should("not.be.exist");
        bankAccounts.save().should("not.be.disabled").click();
        cy.url().should("include", "http://localhost:3000/bankaccounts");

        bankAccounts.getcheckBankName().contains(formData.bankName).should("be.exist"); 

        bankAccounts.getcheckBankName().find("[data-test='bankaccount-delete']").click().should("not.be.exist");
        bankAccounts.getcheckBankName().contains(formData.bankName).should("have.text", formData.bankNameDeleted); 
    });  
});