describe("user that navigates to the application", ()=>{
 // step 2 INTERACT
    before(()=> {
        crypto.visit('/')
    })

    // Step 3 ASSERT
    it('is expected to see "Hello World"') ()=>{
        cy.get('h1').should('contain.text', "Hello Mars!")
        cy.get('h3').should('contain.text', 'My first test')
    })
});

// SETUP - INTERACT - ASSERT

// ARRANGE - ACT - ASSERT