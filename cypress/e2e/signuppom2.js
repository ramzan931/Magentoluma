class Signup {
    txtFirstName = ('#firstname');
    txtLastName = ('#lastname');
    txtEmail = ('#email_address');
    txtPassword = ('#password');
    txtConfirmPassword = ('#password-confirmation');
    CreateAccountButton = ('#form-validate > .actions-toolbar > div.primary > .action');
    clickcreateaccount=('.panel > .header > :nth-child(3) > a');
   // clickdropdown=(':nth-child(2) > .customer-welcome > .customer-name > .action');


   
    createaccount(){
      cy.get(this.clickcreateaccount).click()
    }
  
    enterFirstName(fname) {
      cy.get(this.txtFirstName).type(fname);
    }
  
    enterLastName(lname) {
      cy.get(this.txtLastName).type(lname)
    }
  
    enterEmail(email) {
      cy.get(this.txtEmail).type(email);
    }
  
    enterPassword(password) {
      cy.get(this.txtPassword).type(password)
    }
  
    ConfirmPassword(confirmpassword) {
      cy.get(this.txtConfirmPassword).type(confirmpassword)
    }
  
    createAccountButton() {
      cy.get(this.CreateAccountButton).click()

    }
   
    
  }

   
  
  export default Signup;
  