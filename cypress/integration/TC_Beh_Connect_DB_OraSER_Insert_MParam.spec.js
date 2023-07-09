describe('TC_Beh_Connect_DB_OraSER_Insert_MParam', () => {
    it('TC_Beh_Connect_DB_OraSER_Insert_MParam', () => {
        cy.visit("https://testing.perfectforms.com/player.htm?f=kR9AAgoG");

        cy.get('#PF_18')
            .click();

        cy.get('#PF_19')
            .click();

        cy.get('#PF_20')
            .click();

        cy.get('#PF_21')
            .click();

        cy.get('#PF_32')
            .click();

        cy.get('#PF_33')
            .click();

        cy.get('#PF_22')
            .click();

        cy.get('#1-PF_12')
            .invoke('val')
            .should('equal', '987.65');
        
        cy.get('#2-PF_12')
            .invoke('val')
            .should('equal', '- 999.99');

        cy.get('#3-PF_12')
            .invoke('val')
            .should('equal', '0.01');

        cy.get('#1-PF_13')
            .invoke('val')
            .should('equal', '9,999,999.01');

        cy.get('#2-PF_13')
            .invoke('val')
            .should('equal', '- 111,111.11');

        cy.get('#3-PF_13')
            .invoke('val')
            .should('equal', '12.09');

        cy.get('#PF_23')
            .invoke('val')
            .should('equal', '1');

        cy.get('#PF_24')
            .invoke('val')
            .should('equal', '1');

        cy.get('#PF_27')
            .click();

        cy.get('#PF_39')
            .click();

        cy.get('#PF_42')
            .click();

        cy.get('#PF_43')
            .click();

        cy.get('#PF_44')
            .click();

        cy.get('#PF_53')
            .click();

        cy.get('#PF_54')
            .click();

        cy.get('#PF_45')
            .click();

        cy.get('#1-PF_35')
            .invoke('val')
            .should('equal', '333.33');

        cy.get('#2-PF_35')
            .invoke('val')
            .should('equal', '- 999.99');

        cy.get('#3-PF_35')
            .invoke('val')
            .should('equal', '9.99');

        cy.get('#1-PF_36')
            .invoke('val')
            .should('equal', '1,234,567.89');

        cy.get('#2-PF_36')
            .invoke('val')
            .should('equal', '- 111,111.11');

        cy.get('#3-PF_36')
            .invoke('val')
            .should('equal', '0.09');

        cy.get('#PF_46')
            .invoke('val')
            .should('equal', '1');

        cy.get('#PF_55')
            .click();

        cy.get('#PF_8')
            .click();

        cy.get('#PF_68')
            .click();

        cy.get('#PF_71')
            .click();

        cy.get('#PF_72')
            .click();

        cy.get('#PF_73')
            .click();

        cy.get('#PF_85')
            .click();

        cy.get('#PF_86')
            .click();

        cy.get('#PF_74')
            .click();

        cy.get('#1-PF_64')
            .invoke('val')
            .should('equal', '212121212');

        cy.get('#2-PF_64')
            .invoke('val')
            .should('equal', '-198765432');

        cy.get('#3-PF_64')
            .invoke('val')
            .should('equal', '999999999.99');

        cy.get('#1-PF_65')
            .invoke('val')
            .should('equal', '444444444444444444.44');

        cy.get('#2-PF_65')
            .invoke('val')
            .should('equal', '-123456789098765432.10');

        cy.get('#3-PF_65')
            .invoke('val')
            .should('equal', '123456789098765432.10');

        cy.get('#PF_78')
            .invoke('val')
            .should('equal', '1');

        cy.get('#PF_80 > option:nth-child(1)')
            .invoke('val')
            .should('equal', '1');

        cy.get('#PF_80 > option:nth-child(2)')
            .invoke('val')
            .should('equal', '2');

        cy.get('#PF_80 > option:nth-child(3)')
            .invoke('val')
            .should('equal', '3');

        cy.get('#PF_79')
            .invoke('val')
            .should('equal', '1');

        cy.get('#PF_81 > option:nth-child(1)')
            .invoke('val')
            .should('equal', '1');

        cy.get('#PF_81 > option:nth-child(2)')
            .invoke('val')
            .should('equal', '2');

        cy.get('#PF_81 > option:nth-child(3)')
            .invoke('val')
            .should('equal', '3');

        cy.get('#1-PF_76')
            .invoke('val')
            .should('equal', '212121212');

        cy.get('#2-PF_76')
            .invoke('val')
            .should('equal', '-198765432');

        cy.get('#3-PF_76')
            .invoke('val')
            .should('equal', '999999999.99');

        cy.get('#1-PF_77')
            .invoke('val')
            .should('equal', '444444444444444444.44');

        cy.get('#2-PF_77')
            .invoke('val')
            .should('equal', '-123456789098765432.10');

        cy.get('#3-PF_77')
            .invoke('val')
            .should('equal', '123456789098765432.10');

        cy.get('#PF_87')
            .click();

        cy.get('#PF_93')
            .click();

        cy.get('#PF_133')
            .click();

        cy.get('#PF_151')
            .click();

        cy.get('#PF_154')
            .click();

        cy.get('#PF_155')
            .click();

        cy.get('#PF_156')
            .click();

        cy.get('#PF_161')
            .click();

        cy.get('#PF_162')
            .click();

        cy.get('#PF_157')
            .click();

        cy.get('#1-PF_148')
            .invoke('val')
            .should('equal', 'ĂăÎîÂâŞşŢţÀÈ');

        cy.get('#2-PF_148')
            .invoke('val')
            .should('equal', 'abcdefghijklmnoprstquwvxz');

        cy.get('#2-PF_149')
            .invoke('val')
            .should('equal', '~!@#$%^&*()_+}{:\"|?><');

        cy.get('#1-PF_159')
            .invoke('val')
            .should('equal', 'ĂăÎîÂâŞşŢţÀÈ');

        cy.get('#2-PF_159')
            .invoke('val')
            .should('equal', 'abcdefghijklmnoprstquwvxz');

        cy.get('#PF_142')
            .invoke('val')
            .should('equal', '1');

        cy.get('#PF_143')
            .invoke('val')
            .should('equal', '1');

        cy.get('#PF_168')
            .click();
    });
});