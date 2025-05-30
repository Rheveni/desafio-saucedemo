import LoginPage from "../pages/loginPage"
import userData from "../fixtures/userData.json"
import ProductPage from "../pages/productPage"


const loginPage = new LoginPage()
const productPage = new ProductPage()



  describe('Product Test', () => {
    it('Select Product - Sucess', () => {
      cy.visit('https://www.saucedemo.com/')
  
        loginPage.loginWithUser(userData.userSuccess.userName, userData.userSuccess.password)
        loginPage.loginButton()
        loginPage.homeAlert()

        productPage.selectProduct(userData.descriptionProduct.itemName, userData.descriptionProduct.itemPrice, userData.descriptionProduct.itemDescription)
        productPage.clickAddToCartButton()
   
    })

})