describe("Testing API", () => {
    it("Check body and name in the comments of any post", () => {
        cy.request("GET", "https://jsonplaceholder.typicode.com/comments/2").then((response) => {
            cy.wrap(response.status).should("eq", 200);
            cy.log(response.body);
            cy.wrap(response.body.name).should("eq", "quo vero reiciendis velit similique earum");
            cy.wrap(response.body.body).should("eq", "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et");
        });
    });
});