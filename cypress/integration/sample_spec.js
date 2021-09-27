describe('Tests for search-wiki', () => {
    it('Visits the Ahsoka Wiki Browser', () => {
        cy.visit('/');
        cy.get('.home-page-container').should('be.visible');
    });

    it('Show an input and an image', () => {
        cy.get('[alt="./Ahsoka_Tano.png"]').should('be.visible');
        cy.get('.input-field').as('mainInput').should('be.visible')
        cy.get('@mainInput').invoke('attr', 'placeholder').should('equal', 'Input a search term:');
    });

    it('Show type a search term and show a list of 10 results', () => {
        cy.get('.input-field').as('mainInput');
        cy.get('@mainInput').type('Testament');
        cy.wait(1000);

        cy.get('.input-suggestions').as('results').should('be.visible');
        cy.get('@results').find('div').should('have.length', 10);
        cy.get('@results').find('div').eq(0).should('have.text', 'Testament');
        cy.get('@results').find('div').eq(9).should('have.text', 'Testament (1983 film)');

        cy.scrollTo(0, 500);

        cy.get('@results').find('a').invoke('attr', 'href').should('equal', '/search?query=Testament');
    });

    it('Show navigate to a new page when "See all results is clicked"', () => {
        cy.get('.input-suggestions').find('a').click();
        cy.wait(1000);

        cy.url().should('contains', '/search?query=Testament');
        cy.get('.input-field').as('mainInput').invoke('attr', 'placeholder').should('equal', 'Input a search term:');

        cy.get('.list-item').should('have.length', 80);
        
        // Check for elements in each list-item
        cy.get('.list-item').eq(0).find('a').invoke('attr', 'href').should('equal', 'https://en.wikipedia.org/wiki/Testament');
        cy.get('.list-item').eq(0).find('p').should('have.text', 'https://en.wikipedia.org/wiki/Testament');

        cy.scrollTo('bottom');

        cy.get('.list-item').eq(79).find('a').invoke('attr', 'href').should('equal', 'https://en.wikipedia.org/wiki/The_Testament_(Lustbader_novel)');
        cy.get('.list-item').eq(79).find('p').should('have.text', 'https://en.wikipedia.org/wiki/The_Testament_(Lustbader_novel)');
    });

    it('Shows a not found page when applies', () => {
        cy.visit('/search?query=djshdgasfgdiasgfhjgshdf');
        cy.get('.input-field').as('mainInput').invoke('attr', 'placeholder').should('equal', 'Input a search term:');
        cy.get('h3').should('be.visible').should('have.text', 'No articles found');
    });
})