describe('Text box with max charcters', () => {
    it('dispays the appropiate remaining characters count', () => {
        cy.visit("http://localhost:3000/example-2");

        cy.get('span')
            .invoke('text')
            .should('equal','15');

        cy.get('input').type('hello');

        cy.get('span')
            .invoke('text')
            .should('equal','10');

        cy.get('input').type(' my friend');

        cy.get('span')
            .invoke('text')
            .should('equal','0');
    });

    it('prevents the user from typing more characters one max is exceded', () => {
        cy.visit('http://localhost:3000/example-2');

        cy.get('input').type('abcdefghijklmnopqrstuvwxyz');

        cy.get('input')
            .should('have.attr', 'value', 'abcdefghijklmno');
    });
});