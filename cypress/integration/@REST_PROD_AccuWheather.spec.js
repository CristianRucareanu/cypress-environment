describe('@REST_PROD_Authorize.NET', () => {
    it('@REST_PROD_Authorize.NET', () => {
        cy.visit("https://app.perfectforms.com/player.htm?f=v7WGggYo");

        cy.xpath('/html[1]/body[1]/div[1]/form[1]/div[1]/div[1]/span[2]/input[1]')
            .type('Constanta');

        cy.xpath('/html[1]/body[1]/div[1]/form[1]/div[1]/div[1]/button[1]')
            .click();

        cy.xpath('/html[1]/body[1]/div[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[3]/div[3]/div[1]/table[1]/tbody[1]/tr[2]/td[2]/span[1]/input[1]')
            .invoke('val')
            .should('equal', 'Constanta');

        cy.xpath('/html[1]/body[1]/div[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[3]/div[3]/div[1]/table[1]/tbody[1]/tr[2]/td[6]/span[1]/button[1]')
            .click();

        cy.xpath('/html[1]/body[1]/div[1]/form[1]/div[1]/div[1]/span[3]/input[1]')
            .invoke('val')
            .should('equal', 'C');
    });
});