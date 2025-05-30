import LoginPage from "../pages/loginPage"
import userData from "../fixtures/userData.json"
import ProductPage from "../pages/productPage"
import CartPage from "../pages/cartPage"
import CheckoutPage from "../pages/checkoutPage"


const loginPage = new LoginPage()
const productPage = new ProductPage()
const cartPage = new CartPage()
const checkoutPage = new CheckoutPage()



  describe('Product Test', () => {
    it('Select Product - Sucess', () => {
      cy.visit('https://www.saucedemo.com/')
  
        loginPage.loginWithUser(userData.userSuccess.userName, userData.userSuccess.password)
        loginPage.loginButton()
        loginPage.homeAlert()

        productPage.selectProduct(userData.descriptionProduct.itemName, userData.descriptionProduct.itemPrice, userData.descriptionProduct.itemDescription)
        productPage.clickAddToCartButton()

        cartPage.openCartButton()
        cartPage.verifyCartItem(userData.descriptionProduct.itemName, userData.descriptionProduct.itemPrice)
        cartPage.clickCheckoutButton()


        checkoutPage.fillCheckoutForm(userData.checkoutData.firstName, userData.checkoutData.lastName, userData.checkoutData.postalCode)
        checkoutPage.verifyCheckoutForm(userData.checkoutData.firstName, userData.checkoutData.lastName, userData.checkoutData.postalCode)
        checkoutPage.clickContinueButton()


        checkoutPage.clickFinishButton()
    })

})