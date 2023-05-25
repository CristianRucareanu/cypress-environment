describe('Text box with max charcters', () => {
    it('dispays the appropiate remaining characters count', () => {
        cy.visit("http://localhost:3000/example-3");

        cy.get('[data-cy="last-name-chars-left-count"]')
            .as('charsLeftSpan');
        cy.get('[data-cy="input-last-name"]')
            .as('charInput');

        cy.get('@charsLeftSpan')
            .then($charsLeftSpan => {
                expect($charsLeftSpan.text()).to.equal('15'); //daca vrem sa folosim rezultatul, sa avem o referinta la element
            });

        cy.get('@charInput').type('hello');

        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal','10');

        cy.get('@charInput').type(' my friend');

        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal','0');
    });

    it('prevents the user from typing more characters one max is exceded', () => {
        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy="input-last-name"]')
            .as('charInput');

        cy.get('@charInput').type('abcdefghijklmnopqrstuvwxyz');

        cy.get('@charInput')
            .should('have.attr', 'value', 'abcdefghijklmno');
    });
});