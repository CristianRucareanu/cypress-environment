describe('TC_Beh_Int_CopyFields_Checkbox_InputChkBox', () => {
    it('TC_Beh_Int_CopyFields_Checkbox_InputChkBox', () => {
        cy.visit("https://testing.perfectforms.com/player.htm?f=oe2AgAwH");

        cy.get('#PF_19')
            .click();

        cy.get('#PF_20')
            .invoke('val')
            .should('equal', 'Check');

        cy.get('#PF_22')
            .invoke('val')
            .should('equal', 'Check');

        cy.get('#PF_21')
            .invoke('val')
            .should('equal', 'Checbox True');

        cy.get('#PF_23')
            .invoke('val')
            .should('equal', 'Checbox False');

        cy.wait(2000);

        cy.get('#PF_17')
            .click();

        cy.wait(2000);

        cy.get('#PF_24')
            .invoke('val')
            .should('equal', 'Checbox True');

        cy.get('#PF_25')
            .invoke('val')
            .should('equal', 'Checbox False');

        cy.get('#PF_27')
            .click();

        cy.get('#PF_20')
            .invoke('val')
            .should('equal', 'Check');

        cy.get('#PF_22')
            .invoke('val')
            .should('equal', 'Check');

        cy.get('#PF_21')
            .invoke('val')
            .should('equal', 'Checbox True');

        cy.get('#PF_23')
            .invoke('val')
            .should('equal', 'Checbox False');

        cy.wait(2000);

        cy.get('#PF_17')
            .click();

        cy.wait(2000);

        cy.get('#PF_24')
            .invoke('val')
            .should('equal', 'Checbox True');

        cy.get('#PF_25')
            .invoke('val')
            .should('equal', 'Checbox False');
    });
});