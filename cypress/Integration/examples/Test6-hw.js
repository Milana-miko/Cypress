describe("Testin Parma", function() {
    
    it("Adding an item to the shopping cart with using 'each' functionality", function() {
        cy.visit("https://parma.am/");
        cy.get("#search-box").type("պանիր");
        cy.wait(5000);
        cy.get(".search_product_result").invoke('show').each(($el, $index) => {
            const productName = $el.find(".search__name").text();
            if(productName.includes("Պանիր «Ayg Dairy» գյուղական")) {
                cy.get('.search_product_result').find('.shopping-cart-link').eq($index).click();
                //cy.wrap($el).find('.shopping-cart-link').click();
            }
        });
    });
    
    /*
    it("Adding an item to the shopping cart with using 'each' functionality YerevanCity", async () => {
        cy.visit("https://yerevan-city.am/");
        cy.get(".P-content").find("span").contains("Չեղարկել").click();
        cy.get(".P-search").type("պանիր");
        cy.wait(5000);
       // cy.get("a").contains("Ցույց տալ բոլոր արդյունքները").click();
        cy.get(".P-product-item").each(($el) => {
            const productName = $el.find(".G-mt-1.P-text").text();
            
            if(productName.includes("Պանիր հալած «Հոխլանդ» տեսականի")) {
                $el.find('input[type="checkbox"]').click();
            }
        });
    });
    */
});