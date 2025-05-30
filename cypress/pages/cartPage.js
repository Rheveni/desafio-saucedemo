class CartPage{
    selectorsList() {
        const selectors = {
            cartButton: "[data-test='shopping-cart-link']",
            cartItems: "[data-test='inventory-item']",
            cartItemName: "[data-test='inventory-item-name']",
            cartItemPrice: "[data-test='inventory-item-price']",
            checkoutButton: "[name='checkout']",
            continueShoppingButton: "[name='continue-shopping']",
            removeButton: "[name='remove-sauce-labs-bike-light']"
        }
        return selectors
    }

    openCartButton() {
        cy.get(this.selectorsList().cartButton).click()
    }

    verifyCartItem(itemName, itemPrice) {
        cy.get(this.selectorsList().cartItemName).should('contain', itemName)
        cy.get(this.selectorsList().cartItemPrice).should('contain', itemPrice)
    }

    clickCheckoutButton() {
        cy.get(this.selectorsList().checkoutButton).click()
        cy.get('body').should('contain', 'Checkout: Your Information')
    }

}
export default CartPage