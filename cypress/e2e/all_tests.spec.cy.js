import LoginPage from "../pages/loginPage"
import userData from "../fixtures/userData.json"
import ProductPage from "../pages/productPage"
import CartPage from "../pages/cartPage"
import CheckoutPage from "../pages/checkoutPage"

// Instancia os objetos das páginas para reutilização
const loginPage = new LoginPage()
const productPage = new ProductPage()
const cartPage = new CartPage()
const checkoutPage = new CheckoutPage()



  describe('Product Test', () => {
    it('Select Product - Sucess', () => {
      cy.visit('https://www.saucedemo.com/')

      // Realiza o login com dados válidos
        loginPage.loginWithUser(userData.userSuccess.userName, userData.userSuccess.password)
        loginPage.loginButton()
        loginPage.homeAlert()

      // Seleciona o produto desejado e valida informações
        productPage.selectProduct(userData.descriptionProduct.itemName, userData.descriptionProduct.itemPrice, userData.descriptionProduct.itemDescription)

      // Adiciona o produto ao carrinho
        productPage.clickAddToCartButton()

      // Abre o carrinho e valida item adicionado
        cartPage.openCartButton()
        cartPage.verifyCartItem(userData.descriptionProduct.itemName, userData.descriptionProduct.itemPrice)

      // Avança para checkout
        cartPage.clickCheckoutButton()

      // Preenche os dados do formulário de checkout
        checkoutPage.fillCheckoutForm(userData.checkoutData.firstName, userData.checkoutData.lastName, userData.checkoutData.postalCode)

      // Valida se os dados foram preenchidos corretamente e avança para etapa final
        checkoutPage.verifyCheckoutForm(userData.checkoutData.firstName, userData.checkoutData.lastName, userData.checkoutData.postalCode)
        checkoutPage.clickContinueButton()

      // Finaliza o pedido
        checkoutPage.clickFinishButton()
    })

})
