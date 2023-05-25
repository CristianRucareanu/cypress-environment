import 'cypress-iframe'

describe('TC_PW_Sanity', () => {
    it('Test "try it free form" - new email every time', () => {
        cy.viewport(1920, 1080);
        cy.visit("https://www.perfectapps.com/");

        let signup_email='buildnamehf16DefaultValue16hfc@blackesign.com';

        cy.xpath('//div[@class=\'elementor-element elementor-element-a3f7e3d elementor-widget-mobile__width-initial mobtitle elementor-widget elementor-widget-heading\']//div[@class=\'elementor-widget-container\']//h1[@class=\'elementor-heading-title elementor-size-xxl\'][contains(text(),\'Build web apps & automate workflows\')]')
            .invoke('text')
            .should('equal', 'Build web apps & automate workflows');

        cy.xpath('//h2[contains(text(),\'Transform Ideas Into Solutions\')]')
            .invoke('text')
            .should('equal', 'Transform Ideas Into Solutions');

        cy.xpath('//h2[contains(text(),\'Ready to Get Started?\')]')
            .invoke('text')
            .should('equal', 'Ready to Get Started?');

        cy.xpath('//span[@class=\'pp-modal-popup-button pp-modal-popup-link pp-modal-popup-link-da4b636 elementor-button elementor-size-xl elementor-animation-grow\']//span[contains(text(),\'Try it Free\')]')
            .click();

        cy.xpath('/html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[2]/div[1]/div[1]/form[1]/div[1]/div[1]/input[1]')
            .type('Bogdan');

        cy.xpath('/html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[2]/div[1]/div[1]/form[1]/div[1]/div[1]/input[2]')
            .type('Calin');

        cy.xpath('/html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[2]/div[1]/div[1]/form[1]/div[1]/div[1]/input[3]')
            .type(signup_email);

        cy.xpath('/html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[2]/div[1]/div[1]/form[1]/div[1]/div[1]/input[4]')
            .type('Hr1st0s@inv1@t');

        cy.xpath('//div[@class=\'try-form-footer\']//div[@class=\'try-it-free-container\']//form[@class=\'try-form\']//div[@class=\'formcontainer\']//input[@type=\'button\']')
            .click();

        cy.wait(8000);

        cy.xpath('/html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]/span[1]/span[1]')
            .click();

        //cy.xpath('//div[@id=\'banner\']')
            //.click();

        cy.get('body').click();

        cy.wait(32000);
        
        cy.xpath('//input[@type=\'email\']')
            .type(signup_email);
        
        cy.xpath('//div[@class=\'col-xs-12\']//input[@type=\'password\']')
            .type('Hr1st0s@inv1@t');

        cy.xpath('//button[@id=\'loginSubmit\']//span[contains(text(),\'Log In\')]')
            .click();
    });

    it('Test Request a Demo form - new email every time', () => {
        cy.viewport(1920, 1080);
        cy.visit("https://www.perfectapps.com/");

        let signup_email='buildnamehf16DefaultValue16hfc@blackesign.com';

        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/span[1]/span[1]')
            .click();

        //cy.frameLoaded('iframe[data-cy="1"]')

        //cy.iframe().find('button.JF__RKODqJxKBL1_YVHy:nth-child(2)').click();

        cy.iframe('/html/body/div[2]/div/div[1]/div/div[3]/iframe').xpath('/html/body/div[2]/div/div/div/div[2]/div/div[1]/div/div/div[1]/div[1]/div[1]/button[2]').click();

        cy.xpath('/html/body/div[2]/div/div/div/div[2]/div/div[1]/div/div/div[1]/div[1]/div[1]/button[2]/span')
            .click();

        cy.xpath('/html/body/div[2]/div/div/div/div[2]/div/div[1]/div/div/div[1]/div[2]/table/tbody[2]/tr[2]/td[1]/button/span')
            .click();

        cy.xpath('/html/body/div[2]/div/div/div/div[2]/div/div[1]/div[2]/div/div/div[1]/button[1]')
            .click();

        cy.xpath('/html/body/div[2]/div/div/div/div[2]/div/div[1]/div[2]/div/div/div[1]/button[2]')
            .click();

        cy.xpath('//*[@id="LMUB6c3iGncYNn1py5_Q6"]')
            .type('Bogdan');

        cy.xpath('//*[@id="Mz-v0gYeXz7qhiYi3VA7L"]')
            .type('Calin');

        cy.xpath('//*[@id="email_input"]')
            .type(signup_email);

        cy.xpath('/html/body/div[2]/div/div/div/div[2]/div/div/form/button/div')
            .click();

        cy.xpath('/html/body/div[2]/div/div[1]/div/div[2]')
            .click();
    });

    it('Verify each section was loaded properly (verify the text in each section) Open menu links and open the page then verify each section was loaded correctly', () => {
        cy.viewport(1920, 1080);
        cy.visit("https://www.perfectapps.com/");

        let signup_email='buildnamehf16DefaultValue16hfc@blackesign.com';

        cy.xpath('/html[1]/body[1]/div[1]/header[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/nav[1]/ul[1]/li[1]/a[1]')
            .dblclick();

        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/h1[1]')
            .invoke('text')
            .should('equal', 'Deliver Fast and Flexible Solutions - Without Coding');

        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/section[5]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/h2[1]')
            .invoke('text')
            .should('equal', 'No-Code Platform Features');

        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/section[11]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/h2[1]')
            .invoke('text')
            .should('equal', 'Ready to Get Started?');

        //cy.xpath('/html[1]/body[1]/div[1]/header[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/nav[1]/ul[1]/li[1]/a[1]')
            //.trigger('mouseover');
        /*cy.wait(8000);
        cy.xpath('/html[1]/body[1]/div[1]/header[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/nav[1]/ul[1]/li[1]/ul[1]/li[2]/a[1]')
            .click();*/

        cy.get('.elementor-element-73ea900 > div:nth-child(1) > nav:nth-child(1)')
            .find('#menu-1-73ea900 > li:nth-child(1)')
            .contains('Integrations').then($ele => {
                // Confirm again correct option
                cy.wrap($ele).contains('Integrations');
                $ele[0].click();
        })

        //cy.contains('Integrations').trigger('mouseover').click()
        //cy.contains('Integrations').click();

        //cy.xpath('/html[1]/body[1]/div[1]/header[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/nav[1]/ul[1]/li[1]/a[1]').select('Integrations')

        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/h1[1]')
            .invoke('text')
            .should('equal', 'Integrate PerfectApps\' Solutions With Your Favorite Apps - Without Coding.');
    });

    it('Verify each section was loaded properly (verify the text in each section) Open menu links and open the page then verify each section was loaded correctly', () => {
        cy.viewport(1920, 1080);
        cy.visit("https://www.perfectapps.com/");

        let signup_email='buildnamehf16DefaultValue16hfc@blackesign.com';

        cy.xpath('/html[1]/body[1]/div[1]/header[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/nav[1]/ul[1]/li[4]/a[1]')
            .dblclick();

        cy.xpath('//*[@id="PF_129"]')
            .type('Automation Test');
    });
});