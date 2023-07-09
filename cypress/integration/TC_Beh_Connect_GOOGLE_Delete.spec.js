describe('TC_Beh_Connect_GOOGLE_Delete', () => {
    it('TC_Beh_Connect_GOOGLE_Delete', () => {
        cy.visit("https://testing.perfectforms.com/player.htm?f=NJghgAcC");

        cy.get('#PF_36')
            .click();

        cy.wait(2000);

        cy.get('#PF_37')
            .click();

        cy.wait(2000);

        cy.get('#PF_24')
            .invoke('val')
            .should('equal', '0.03');

        cy.get('#PF_25')
            .invoke('val')
            .should('equal', '1.23');

        cy.get('#PF_26')
            .invoke('val')
            .should('equal', '-1.5');

        cy.get('#PF_27')
            .invoke('val')
            .should('equal', '1.234');

        cy.get('#PF_28')
            .invoke('val')
            .should('equal', '1');

        cy.get('#PF_29')
            .invoke('val')
            .should('equal', '1200');

        cy.get('#PF_38')
            .click();

        cy.get('#PF_39')
            .click();

        cy.get('#PF_42')
            .click();

        cy.wait(2000);

        cy.get('#PF_49')
            .click();

        cy.wait(2000);

        cy.get('#PF_50')
            .invoke('val')
            .should('equal', '0.03');

        cy.get('#PF_51')
            .invoke('val')
            .should('equal', '1.23');

        cy.get('#PF_52')
            .invoke('val')
            .should('equal', '-1.50');

        cy.get('#PF_53')
            .invoke('val')
            .should('equal', '1.23');

        cy.get('#PF_54')
            .invoke('val')
            .should('equal', '1.00');

        cy.get('#PF_55')
            .invoke('val')
            .should('equal', '1,200.00');

        cy.get('#PF_56')
            .click();

        cy.get('#PF_57')
            .click();

        cy.get('#PF_84')
            .click();

        cy.wait(2000);

        cy.get('#PF_86')
            .click();

        cy.wait(2000);

        cy.get('#1-PF_78')
            .invoke('val')
            .should('equal', '0.03');

        cy.get('#1-PF_79')
            .invoke('val')
            .should('equal', '1.23');

        cy.get('#1-PF_80')
            .invoke('val')
            .should('equal', '-1.5');

        cy.get('#1-PF_81')
            .invoke('val')
            .should('equal', '1.234');

        cy.get('#1-PF_82')
            .invoke('val')
            .should('equal', '1');

        cy.get('#1-PF_83')
            .invoke('val')
            .should('equal', '1200');

        cy.get('#PF_87')
            .click();

        cy.get('#PF_88')
            .click();

        cy.get('#PF_104')
            .click();

        cy.wait(2000);

        cy.get('#PF_105')
            .click();

        cy.wait(2000);

        cy.get('#1-PF_98')
            .invoke('val')
            .should('equal', '0.03');

        cy.get('#1-PF_99')
            .invoke('val')
            .should('equal', '1.23');

        cy.get('#1-PF_100')
            .invoke('val')
            .should('equal', '-1.5');

        cy.get('#1-PF_101')
            .invoke('val')
            .should('equal', '1.234');

        cy.get('#1-PF_102')
            .invoke('val')
            .should('equal', '1');

        cy.get('#1-PF_103')
            .invoke('val')
            .should('equal', '1200');

        cy.get('#PF_106')
            .click();

        cy.get('#PF_107')
            .click();

        cy.get('#PF_8')
            .click();

        cy.get('#PF_118')
            .click();

        cy.wait(2000);

        cy.get('#PF_122')
            .click();

        cy.wait(2000);

        cy.get('#PF_123')
            .invoke('val')
            .should('equal', '123456');

        cy.get('#PF_124')
            .invoke('val')
            .should('equal', '9876543');

        cy.get('#PF_125')
            .invoke('val')
            .should('equal', '88888888');

        cy.get('#PF_126')
            .click();

        cy.get('#PF_127')
            .click();

        cy.get('#PF_135')
            .click();

        cy.wait(2000);

        cy.get('#PF_139')
            .click();

        cy.wait(2000);

        cy.get('#PF_140')
            .invoke('val')
            .should('equal', '123456');

        cy.get('#PF_141')
            .invoke('val')
            .should('equal', '9876543');

        cy.get('#PF_142')
            .invoke('val')
            .should('equal', '88888888');

        cy.get('#PF_143')
            .click();

        cy.get('#PF_144')
            .click();

        cy.get('#PF_160')
            .click();

        cy.wait(2000);

        cy.get('#PF_161')
            .click();

        cy.wait(2000);

        cy.get('#1-PF_157')
            .invoke('val')
            .should('equal', '123456');

        cy.get('#1-PF_158')
            .invoke('val')
            .should('equal', '9876543');

        cy.get('#1-PF_159')
            .invoke('val')
            .should('equal', '42423423423');

        cy.get('#PF_162')
            .click();

        cy.get('#PF_163')
            .click();

        cy.get('#PF_173')
            .click();

        cy.wait(2000);

        cy.get('#PF_174')
            .click();

        cy.wait(2000);

        cy.get('#1-PF_170')
            .invoke('val')
            .should('equal', '12312343');

        cy.get('#1-PF_171')
            .invoke('val')
            .should('equal', '23');

        cy.get('#1-PF_172')
            .invoke('val')
            .should('equal', '42423423423');

        cy.get('#PF_175')
            .click();

        cy.get('#PF_176')
            .click();

        cy.get('#PF_114')
            .click();

        cy.wait(2000);

        cy.get('#PF_195')
            .click();

        cy.wait(2000);

        cy.get('#PF_196')
            .click();

        cy.get('#PF_189')
            .invoke('val')
            .should('equal', '10/21/1962');

        cy.get('#PF_190')
            .invoke('val')
            .should('equal', '03/09/1912');

        cy.get('#PF_197')
            .click();

        cy.get('#PF_198')
            .click();

        cy.wait(2000);

        cy.get('#PF_208')
            .click();

        cy.wait(2000);

        cy.get('#PF_209')
            .click();

        cy.get('#PF_202')
            .invoke('val')
            .should('equal', '10/05/1936');

        cy.get('#PF_203')
            .invoke('val')
            .should('equal', '03/09/1956');

        cy.get('#PF_210')
            .click();

        cy.get('#PF_211')
            .click();

        cy.wait(2000);

        cy.get('#PF_221')
            .click();

        cy.wait(2000);

        cy.get('#PF_222')
            .click();

        cy.get('#PF_215')
            .invoke('val')
            .should('equal', '10.05.1936');

        cy.get('#PF_216')
            .invoke('val')
            .should('equal', '03.09.1956');

        cy.get('#PF_223')
            .click();

        cy.get('#PF_224')
            .click();

        cy.wait(2000);

        cy.get('#PF_234')
            .click();

        cy.wait(2000);

        cy.get('#PF_235')
            .click();

        cy.get('#PF_228')
            .invoke('val')
            .should('equal', '13.05.1955');

        cy.get('#PF_229')
            .invoke('val')
            .should('equal', '30.11.1998');

        cy.get('#PF_236')
            .click();

        cy.get('#PF_237')
            .click();

        cy.wait(2000);

        cy.get('#PF_245')
            .click();

        cy.wait(2000);

        cy.get('#PF_246')
            .click();

        cy.get('#PF_239')
            .invoke('val')
            .should('equal', '05/13/1955');

        cy.get('#PF_247')
            .invoke('val')
            .should('equal', '11/30/1998');

        cy.get('#PF_248')
            .click();

        cy.get('#PF_249')
            .click();

        cy.wait(2000);

        cy.get('#PF_256')
            .click();

        cy.wait(2000);

        cy.get('#PF_257')
            .click();

        cy.get('#1-PF_259')
            .invoke('val')
            .should('equal', '13/05/2006');

        cy.get('#1-PF_260')
            .invoke('val')
            .should('equal', '30/11/1906');

        cy.get('#PF_261')
            .click();

        cy.get('#PF_262')
            .click();

        cy.get('#PF_183')
            .click();

        cy.wait(2000);

        cy.get('#PF_282')
            .click();
    
        cy.wait(2000);
    
        cy.get('#PF_287')
            .click();
    
        cy.get('#PF_288')
            .invoke('val')
            .should('equal', 'ASD');
    
        cy.get('#PF_289')
            .invoke('val')
            .should('equal', '123456aa');

        cy.get('#PF_290')
            .invoke('val')
            .should('equal', '32$$%');
    
        cy.get('#PF_291')
            .invoke('val')
            .should('equal', 'A@E$%1');
    
        cy.get('#PF_292')
            .click();
    
        cy.get('#PF_293')
            .click();

        cy.wait(2000);

        cy.get('#PF_310')
            .click();
        
        cy.wait(2000);
        
        cy.get('#PF_312')
            .click();
        
        cy.get('#PF_313')
            .invoke('val')
            .should('equal', 'ASD');
        
        cy.get('#PF_314')
            .invoke('val')
            .should('equal', '123456aa');
    
        cy.get('#PF_315')
            .invoke('val')
            .should('equal', '32$$%');
        
        cy.get('#PF_316')
            .invoke('val')
            .should('equal', 'A@E$%1');
        
        cy.get('#PF_317')
            .click();
        
        cy.get('#PF_318')
            .click();

        cy.wait(2000);

        cy.get('#PF_330')
            .click();
            
        cy.wait(2000);
            
        cy.get('#PF_331')
            .click();
            
        cy.get('#1-PF_333')
            .invoke('val')
            .should('equal', 'ASD');
            
        cy.get('#1-PF_334')
            .invoke('val')
            .should('equal', '123456aa');
        
        cy.get('#1-PF_335')
            .invoke('val')
            .should('equal', '32$$%');
            
        cy.get('#1-PF_336')
            .invoke('val')
            .should('equal', 'A@E$%1');
            
        cy.get('#PF_337')
            .click();
            
        cy.get('#PF_338')
            .click();

        cy.wait(2000);

        cy.get('#PF_345')
            .click();
                
        cy.wait(2000);
                
        cy.get('#PF_346')
            .click();
                
        cy.get('#1-PF_348')
            .invoke('val')
            .should('equal', 'ASD');
                
        cy.get('#P1-F_349')
            .invoke('val')
            .should('equal', '123456aa');
            
        cy.get('#1-PF_350')
            .invoke('val')
            .should('equal', '32$$%');
                
        cy.get('#1-PF_351')
            .invoke('val')
            .should('equal', 'A@E$%1');
                
        cy.get('#PF_352')
            .click();
                
        cy.get('#PF_353')
            .click();

        cy.get('#PF_354')
            .click();
    });
});