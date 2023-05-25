describe('@REST_PROD_BOX', () => {
    it('@REST_PROD_BOX', () => {
        cy.visit("https://app.perfectforms.com/player.htm?f=0b2GAgsJ");

        cy.xpath('/html[1]/body[1]/div[1]/form[1]/div[1]/div[1]/button[3]')
            .click();

        cy.xpath('/html[1]/body[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/form[1]/div[1]/div[1]/div[1]/input[1]')
            .type('r2d2@perfectforms.ro');

        cy.xpath('/html[1]/body[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/form[1]/div[1]/div[1]/div[2]/input[1]')
            .type('Qplates99');

        cy.xpath('/html[1]/body[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/form[1]/div[1]/div[2]/input[1]')
            .click();

        cy.xpath('/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/button[1]/span[1]')
            .click();

        cy.xpath('/html[1]/body[1]/div[1]/form[1]/div[1]/div[1]/button[2]')
            .click();

        cy.xpath('/html[1]/body[1]/div[1]/form[1]/div[1]/div[1]/button[4]')
            .click();

        cy.xpath('/html[1]/body[1]/div[1]/form[1]/div[1]/div[1]/div[8]/div[1]/div[3]/div[3]/div[1]/table[1]/tbody[1]/tr[2]/td[2]/span[1]/input[1]')
            .invoke('val')
            .should('equal', 'Alex Marius');

        cy.xpath('/html[1]/body[1]/div[1]/form[1]/div[1]/div[1]/button[6]')
            .click();

        cy.xpath('/html[1]/body[1]/div[1]/form[1]/div[1]/div[1]/button[5]')
            .click();

        cy.xpath('/html[1]/body[1]/div[1]/form[1]/div[1]/div[1]/div[8]/div[1]/div[3]/div[3]/div[1]/table[1]/tbody[1]/tr[2]/td[2]/span[1]/input[1]')
            .invoke('val')
            .should('equal', 'r2 d2');

        cy.xpath('/html[1]/body[1]/div[1]/form[1]/div[1]/div[1]/button[1]')
            .click();
    });
});