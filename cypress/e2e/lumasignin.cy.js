import Lumasignin from "./lumasignin";
import { Product } from "./product";
//import { faker } from '@faker-js/faker';

const lumasignin = new Lumasignin();   
const product = new Product();


describe('lumalogin', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/');
       // const email = faker.internet.exampleEmail({ allowSpecialCharacters: false, delay: 50 });
       // const password = faker.internet.password({ length: 25, memorable: false, pattern: /[A-Z0-9@#$&*_a-z]/, prefix: 'nav' });

        
    });

    it('LoginTest', () => {
        lumasignin.signinaccount();
        lumasignin.enterEmail('ramzanahmad931@gmail.com');
        lumasignin.enterPassword('Chshan23@');
        lumasignin.signinbuttonhit();
        cy.wait(1000); // Add a small delay after login for stability

        product.selectwomencategory();
        product.selecttops();
        product.viewPict();
        cy.wait(8000);
        product.selectsize();
        product.Selectcolor();
        product.shirtAddtocart();
        cy.wait(4000);
        product.shirtShowCart();
        cy.wait(2000);
        product.checkoutOrder();
        cy.wait(12000);
        product.HitnextButton();
        cy.wait(5000);
        product.YourOrderPlace();
    });
});
