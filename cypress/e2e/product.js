export class Product
{
    womencategory=('#ui-id-4 > :nth-child(2)')
    Tops = ('dd > .items > :nth-child(1) > a')
    ClickonPict = (':nth-child(3) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo')
    SizeofShirt = ('#option-label-size-143-item-168')
    ColorofShirt = ('#option-label-color-93-item-60')
    AddtoCart = ('#product-addtocart-button')
    ShowCart = ('.showcart')
    Checkout = ('#top-cart-btn-checkout')
    NextButton = ('.button')
    Placeorder = ('.payment-method-content > :nth-child(4) > div.primary > .action')

    selectwomencategory()
    {
        cy.get(this.womencategory).click();
    }
  
    selecttops = () => {
      cy.get(this.Tops).click();
    };
  
    viewPict = () => {
      cy.get(this.ClickonPict).click();
    };
  
    selectsize = () => {
      cy.get(this.SizeofShirt).click();
    };
  
    Selectcolor = () => {
      cy.get(this.ColorofShirt).click();
    };
  
    shirtAddtocart = () => {
      cy.get(this.AddtoCart).click();
    };
  
    shirtShowCart = () => {
      cy.get(this.ShowCart).click();
    };
  
    checkoutOrder = () => {
      cy.get(this.Checkout).click();
    };
  
    HitnextButton = () => {
      cy.get(this.NextButton).click();
    };
  
    YourOrderPlace = () => {
      cy.get(this.Placeorder).click();
    };
}