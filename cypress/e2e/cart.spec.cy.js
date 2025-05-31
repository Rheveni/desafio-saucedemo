import LoginPage from "../pages/loginPage"
import userData from "../fixtures/userData.json"
import ProductPage from "../pages/productPage"
import CartPage from "../pages/cartPage"

// Instancia os objetos das páginas para reutilização
const loginPage = new LoginPage()
const productPage = new ProductPage()
const cartPage = new CartPage()



  describe('Product Test', () => {
    it('Select Product - Sucess', () => {
      cy.visit('https://www.saucedemo.com/')

      // Realiza o login com dados válidos
        loginPage.loginWithUser(userData.userSuccess.userName, userData.userSuccess.password)
        loginPage.loginButton()
        loginPage.homeAlert()

      // Seleciona o produto desejado, valida informações e adiciona o produto ao carrinho
        productPage.selectProduct(userData.descriptionProduct.itemName, userData.descriptionProduct.itemPrice, userData.descriptionProduct.itemDescription)
        productPage.clickAddToCartButton()

      // Abre o carrinho, valida item adicionado e avança para checkout
        cartPage.openCartButton()
        cartPage.verifyCartItem(userData.descriptionProduct.itemName, userData.descriptionProduct.itemPrice)
        cartPage.clickCheckoutButton()

    })

})
