describe('TC_Beh_Int_Date_IsEmpty_MB', () => {
    it('TC_Beh_Int_Date_IsEmpty_MB', () => {
        cy.visit("https://testing.perfectforms.com/player.htm?f=n7XAggEn");

        cy.get('#PF_36')
            .click();

        cy.get('#PF_7')
            .invoke('val')
            .should('equal', '1');

        cy.get('#PF_11')
            .invoke('val')
            .should('equal', '2');

        cy.get('#PF_10')
            .invoke('val')
            .should('equal', '3');

        cy.get('#PF_9')
            .invoke('val')
            .should('equal', '4');

        cy.get('#PF_8')
            .invoke('val')
            .should('equal', '5');

        cy.get('#PF_1')
            .click();

        cy.get('#PF_12')
            .click();

        cy.get('#PF_14')
            .click();

        cy.get('#PF_15')
            .click();

        cy.get('#PF_13')
            .click();

        cy.get('#PF_38')
            .click();

        cy.get('#PF_50')
            .click();

        cy.get('#PF_19')
            .invoke('val')
            .should('equal', '1');

        cy.get('#PF_17')
            .invoke('val')
            .should('equal', '2');

        cy.get('#PF_20')
            .invoke('val')
            .should('equal', '3');

        cy.get('#PF_18')
            .invoke('val')
            .should('equal', '4');

        cy.get('#PF_21')
            .invoke('val')
            .should('equal', '5');

        cy.get('#PF_22')
            .click();

        cy.get('#PF_16')
            .click();

        cy.get('#PF_23')
            .click();

        cy.get('#PF_24')
            .click();

        cy.get('#PF_25')
            .click();

        cy.get('#PF_49')
            .click();

        cy.get('#PF_37')
            .click();
    });
});