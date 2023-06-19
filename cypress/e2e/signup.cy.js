
import Signup from "./signuppom2";
import { faker } from '@faker-js/faker';

const signup = new Signup();

describe('Signup', () => {
  // Negative test case 1 - Empty first name
  it('Negative Test Case 1: Empty First Name', () => {
    let lastname = faker.person.lastName('male');
    let password = faker.internet.password({ length: 25, memorable: false, pattern: /[A-Z0-9@#$&*_a-z]/, prefix: 'nav' });
    let email = faker.internet.exampleEmail();

    cy.visit('https://magento.softwaretestingboard.com/');
    signup.createaccount();
    signup.enterLastName(lastname);
    signup.enterEmail(email);
    signup.enterPassword(password);
    signup.ConfirmPassword(password);
    signup.createAccountButton();

  });

  // Negative test case 2 - Invalid email format
  it('Negative Test Case 2: Invalid Email Format', () => {
    let firstname = faker.person.firstName('male');
    let lastname = faker.person.lastName('male');
    let password = faker.internet.password({ length: 25, memorable: false, pattern: /[A-Z0-9@#$&*_a-z]/, prefix: 'nav' });
    let email = 'invalidemail';

    cy.visit('https://magento.softwaretestingboard.com/');
    signup.createaccount();
    signup.enterFirstName(firstname);
    signup.enterLastName(lastname);
    signup.enterEmail(email);
    signup.enterPassword(password);
    signup.ConfirmPassword(password);
    signup.createAccountButton();

  });

  // Negative test case 3 - Passwords do not match
  it('Negative Test Case 3: Passwords Do Not Match', () => {
    let firstname = faker.person.firstName('male');
    let lastname = faker.person.lastName('male');
    let password = faker.internet.password({ length: 25, memorable: false, pattern: /[A-Z0-9@#$&*_a-z]/, prefix: 'nav' });
    let email = faker.internet.exampleEmail();

    cy.visit('https://magento.softwaretestingboard.com/');
    signup.createaccount();
    signup.enterFirstName(firstname);
    signup.enterLastName(lastname);
    signup.enterEmail(email);
    signup.enterPassword(password);
    signup.ConfirmPassword('differentpassword');
    signup.createAccountButton();

  });

  // Positive test case 1 - Valid inputs
  it.only('Positive Test Case 1: Valid Inputs', () => {
    let firstname = faker.person.firstName('male');
    let lastname = faker.person.lastName('male');
    let password = faker.internet.password({ length: 25, memorable: false, pattern: /[A-Z0-9@#$&*_a-z]/, prefix: 'nav' });
    let email = faker.internet.exampleEmail();

    cy.visit('https://magento.softwaretestingboard.com/');
    signup.createaccount();
    signup.enterFirstName(firstname);
    signup.enterLastName(lastname);
    signup.enterEmail(email);
    signup.enterPassword(password);
    signup.ConfirmPassword(password);
    signup.createAccountButton();

  });

  // Positive test case 2 - Different gender
  it('Positive Test Case 2: Different Gender', () => {
    let firstname = faker.person.firstName('female');
    let lastname = faker.person.lastName('female');
    let password = faker.internet.password({ length: 25, memorable: false, pattern: /[A-Z0-9@#$&*_a-z]/, prefix: 'nav' });
    let email = faker.internet.exampleEmail();

    cy.visit('https://magento.softwaretestingboard.com/');
    signup.createaccount();
    signup.enterFirstName(firstname);
    signup.enterLastName(lastname);
    signup.enterEmail(email);
    signup.enterPassword(password);
    signup.ConfirmPassword(password);
    signup.createAccountButton();

     
  });

  
  
});




