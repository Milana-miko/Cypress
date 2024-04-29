describe("Select and add product", () => {  
    let product;
    before(() => {
        cy.fixture("productdata").then((data) => {
            product = data;
        });
    });

    it("selecting product", () => {
        cy.visit("https://rahulshettyacademy.com/angularpractice/shop");

    //     cy.get(".card").each(($el, $indx, $list) => {

    //         cy.get(".card-title").eq($indx).then(($item) => {
    //             if($item.text().includes(product.phone)) {
    //                 cy.get(".btn-info").eq($indx).click();
    //                 return false;
    //             }
    //         });
            
    // });

    //cy.addToCard(product.phone);
    //cy.addToCard("iphone X");
    for(let i = 0; i < product.products.length; i++) {
        cy.addToCard(product.products[i]);
    }

    
});

});
