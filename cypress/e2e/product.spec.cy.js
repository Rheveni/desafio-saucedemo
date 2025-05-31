import LoginPage from "../pages/loginPage"
import userData from "../fixtures/userData.json"
import ProductPage from "../pages/productPage"

// Instancia os objetos das páginas para reutilização
const loginPage = new LoginPage()
const productPage = new ProductPage()



  describe('Product Test', () => {
    it('Select Product - Sucess', () => {
      cy.visit('https://www.saucedemo.com/')

      // Realiza o login com dados válidos
        loginPage.loginWithUser(userData.userSuccess.userName, userData.userSuccess.password)
        loginPage.loginButton()
        loginPage.homeAlert()

      // Seleciona o produto desejado, valida informações e adiciona produto no carrinho
        productPage.selectProduct(userData.descriptionProduct.itemName, userData.descriptionProduct.itemPrice, userData.descriptionProduct.itemDescription)
        productPage.clickAddToCartButton()
   
    })

})
