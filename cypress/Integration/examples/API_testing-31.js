describe("API testing example", () => {
    it("Testing users API", () => {
        cy.request("GET", "https://reqres.in/api/users/").then((response) => {
            cy.wrap(response.status).should("eq", 200);
            //console.log(response.body);
            cy.wrap(response.body.data).should("have.length", 6);
            cy.wrap(response.body.data[0]).should("have.property", "email");
        });
    });

    it("Testing API", () => {
        cy.request("GET", "https://jsonplaceholder.typicode.com/posts").then((response) => {
            cy.wrap(response.status).should("eq", 200);
            console.log(response.body.length);
            cy.wrap(response.body).should("have.length", 100);
            cy.wrap(response.body[0]).should("have.property", "id");
        });
    });

    it("Testing 2 API", () => {
        cy.request("GET", "https://jsonplaceholder.typicode.com/posts/2").then((response) => {
            cy.wrap(response.status).should("eq", 200);
            console.log(response.body);
            cy.wrap(response.body.title).should("eq", "qui est esse");
        });
    });
});