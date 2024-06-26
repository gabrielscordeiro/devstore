describe('Search products', () => {

    it('should be able to search for products', () => {
        cy.searchByQuery('sweatshirt')

        cy.location('pathname').should('include', '/search')
        cy.location('search').should('include', 'q=moletom')

        cy.get('a[href^="/product"]').should('exist')
    })


    it('should not be able to visit search page without a search query', () => {
        //ignore all exceptions during this process
        cy.on('uncaught:exception', () => {
            return false
        })

        cy.visit('/search')

        cy.location('pathname').should('equal', '/')
    })
})