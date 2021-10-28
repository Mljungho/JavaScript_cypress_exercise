describe("user that navigates to the application", ()=>{
 // step 2 INTERACT
    before(()=> {
        cy.visit('/')
    })

    // Step 3 ASSERT
    it('is expected to see "Hello World"', ()=>{
        cy.get('h1').should('contain.text', "Hello World!")
        cy.get('h3').should('contain.text', 'My first test is going Green')
    })
});

// SETUP - INTERACT - ASSERT

// ARRANGE - ACT - ASSERT