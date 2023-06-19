class LumaSignin {
   
    clicksignin = ('.panel > .header > .authorization-link > a')
    txtEmail = ('#email')
    txtPassword = ('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass')
    signinbuttonpress = ('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2')
   
  
    signinaccount = () => {
      cy.get(this.clicksignin).click();
    };
  
    enterEmail = (email) => {
      cy.get(this.txtEmail).type(email);
    };
  
    enterPassword = (password) => {
      cy.get(this.txtPassword).type(password);
    };
  
    signinbuttonhit = () => {
      cy.get(this.signinbuttonpress).click();
    };
    
  }
  
  export default LumaSignin;
  
