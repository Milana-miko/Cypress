describe("Testing API", () => {

    let apiData;
    before(() => {
        cy.fixture("api_ninjas").then((data) => {
            apiData = data;
        });
    });

    it("API positive testing", () => {
        cy.request({
            method: "GET", 
            url: `${apiData.mainURL}${apiData.positive}`, 
            headers: {
                "X-API-Key": "n2kREa3o9YwFZ/vSbZl3ug==d6iO5vkzjKNjMi5o"
            } 
        }).then((response) => {
            cy.wrap(response.status).should("eq", 200);
            console.log(response);
            cy.wrap(response.body).should("have.length.gte", 1);
            cy.wrap(response.body[0].name).should("match", /maine Coon/i);
        });

    });

    it("API negative testing", () => {
        cy.request({
            method: "GET",
            url: `${apiData.mainURL}${apiData.negative}`,
            headers: {
                "X-API-Key": "n2kREa3o9YwFZ/vSbZl3ug==d6iO5vkzjKNjMi5o"
            }
        }).then((response) => {
            cy.wrap(response.status).should("eq", 200);
            cy.wrap(response.body).should("be.empty");
        });
    });
})