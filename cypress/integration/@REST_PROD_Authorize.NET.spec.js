describe('@REST_PROD_Authorize.NET', () => {
    it('@REST_PROD_Authorize.NET', () => {
        cy.visit("https://app.perfectforms.com/player.htm?f=S7WmgAEp");

        cy.xpath('/html[1]/body[1]/div[1]/form[1]/div[1]/div[1]/button[3]')
            .click();

        cy.xpath('/html[1]/body[1]/div[1]/form[1]/div[1]/div[1]/span[4]/input[1]')
            .invoke('val')
            .should('equal', 'Ok');

        cy.xpath('/html[1]/body[1]/div[1]/form[1]/div[1]/div[1]/span[1]/input[1]')
            .invoke('val')
            .should('equal', 'Successful.');

        cy.xpath('/html[1]/body[1]/div[1]/form[1]/div[1]/div[1]/button[2]')
            .click();

        cy.xpath('/html[1]/body[1]/div[1]/form[1]/div[1]/div[1]/span[14]/input[1]')
            .invoke('val')
            .should('equal', 'Ok');

        cy.xpath('/html[1]/body[1]/div[1]/form[1]/div[1]/div[1]/span[16]/input[1]')
            .invoke('val')
            .should('equal', 'Successful.');

        cy.xpath('/html[1]/body[1]/div[1]/form[1]/div[1]/div[1]/button[1]')
            .click();

        cy.xpath('/html[1]/body[1]/div[1]/form[1]/div[1]/div[1]/span[13]/input[1]')
            .invoke('val')
            .should('equal', 'Ok');

        cy.xpath('/html[1]/body[1]/div[1]/form[1]/div[1]/div[1]/span[15]/input[1]')
            .invoke('val')
            .should('equal', 'Successful.');

        cy.xpath('/html[1]/body[1]/div[1]/form[1]/div[1]/div[1]/button[4]')
            .click();

        cy.xpath('/html[1]/body[1]/div[1]/form[1]/div[2]/div[1]/button[1]')
            .click();

        cy.xpath('/html[1]/body[1]/div[1]/form[1]/div[2]/div[1]/button[2]')
            .click();

        cy.xpath('/html[1]/body[1]/div[1]/form[1]/div[2]/div[1]/span[21]/input[1]')
            .invoke('val')
            .should('equal', 'Successful.');

        cy.xpath('/html[1]/body[1]/div[1]/form[1]/div[2]/div[1]/button[3]')
            .click();
    });
});