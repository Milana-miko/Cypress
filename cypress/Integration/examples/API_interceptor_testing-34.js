describe("Starting with interceptors", () => {
    // it("Changing response params", () => {
    //     cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
    //     cy.intercept({
    //         method: "GET",
    //         url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"
    //     }, 
    //     {
    //         statusCode: 200,
    //         body: [
    //             {
    //                 "book_name": "RestAssured with Java",
    //                 "isbn": "BSG",
    //                 "aisle": "2302"
    //             }
    //         ]
    //     }).as("bookresponse");

    //     cy.get(".btn.btn-primary").click();
    //     cy.wait("@bookresponse").then(({ request, response }) => {
    //         console.log("AAAAAAAAAAA", response); 
    //         cy.wrap(response.body).should("have.length", 1);
    //         cy.get("h2").next().should("have.text", "Oops only 1 Book available");
    //         cy.get("tr").should("have.length", response.body.length + 1);

    //     });
    // });

    it("Test response", () => {
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
        cy.intercept({
            method: "GET",
            url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"
        }, 
        {
            statusCode: 404,
            body: []
        }).as("emptyData");
        cy.get(".btn.btn-primary").click();
        cy.wait("@emptyData").then(({ request, response }) => { 
            cy.wrap(response.body).should("be.empty");
            cy.get("tr").should("have.length", 1);
            cy.wrap(response.statusCode).should("eq", 404);
        
    });
});
});