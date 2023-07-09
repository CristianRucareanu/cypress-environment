describe('TC_Beh_Int_Funct_Count_Table_Checkbox', () => {
    it('TC_Beh_Int_Funct_Count_Table_Checkbox', () => {
        cy.visit("https://testing.perfectforms.com/player.htm?f=wF3AgAwF");

        cy.get('#PF_16')
            .click();

        cy.get('#PF_19')
            .click();

        cy.get('#PF_18')
            .invoke('val')
            .should('equal', '10.00');

        cy.get('#PF_4')
            .click();
    });
});