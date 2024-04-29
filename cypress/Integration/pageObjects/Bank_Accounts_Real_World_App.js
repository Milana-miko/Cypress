class BankAccountsHomePage {
    gerBankAccount() {
        return cy.get("[data-test='sidenav-bankaccounts']");
    }

    getCreate(){
        return cy.get("[data-test='bankaccount-new']");
    }

    getBankName() {
        return cy.get("[data-test='bankaccount-bankName-input']");
    }

    save() {
        return cy.get("[data-test='bankaccount-submit']");
    }

    getBankNameErrorMessage() {
        return cy.get("#bankaccount-bankName-input-helper-text");
    }

    getRoutingNumber() {
        return cy.get("[data-test='bankaccount-routingNumber-input']");
    } 

    getAccountNumber() {
        return cy.get("[data-test='bankaccount-accountNumber-input']");
    }  

    getRoutingNumberErrorMessage() {
        return cy.get("#bankaccount-routingNumber-input-helper-text");
    }

    getAccountNumberErrorMessage() {
        return cy.get("#bankaccount-accountNumber-input-helper-text");
    }   

    getcheckBankName() {
        return cy.get("[data-test='bankaccount-list-item-lJced0U07']"); //надл каждый запуск подставлять верный data-test
        //return cy.get(".MuiListItem-root.MuiListItem-gutters");
    }
}

export default BankAccountsHomePage