describe('Add product to cart', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should be able to navigate to product page and add it to the cart', () => {

        //get the first tag <a> that HREF starts with /product
        cy.get('a[href^="/product"]').first().click()

        //this is another way to check if url contains /product
        //cy.location('pathname').should('include', '/product')
        cy.url().should('include', '/product')
        cy.contains('Add to Cart').click()

        cy.contains('Cart (1)').should('exist')
    })

    it('should not count duplicated products on cart', () => {
        cy.get('a[href^="/product"]').first().click()

        cy.url().should('include', '/product')
        cy.contains('Add to Cart').click()
        cy.contains('Add to Cart').click()

        cy.contains('Cart (1)').should('exist')
    })

    it('should be able to search for a product and add it to the cart', () => {
        cy.searchByQuery('sweatshirt')

        cy.get('a[href^="/product"]').first().click()

        cy.location('pathname').should('include', '/product')

        cy.contains('Add to Cart').click()

        cy.contains('Cart (1)').should('exist')
    })
})