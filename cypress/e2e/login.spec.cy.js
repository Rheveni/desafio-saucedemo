import LoginPage from "../pages/loginPage"
import userData from "../fixtures/userData.json"

// Instancia os objetos das páginas para reutilização
const loginPage = new LoginPage()


describe('Login Test', () => {
  it('Login - Sucess', () => {
    cy.visit('https://www.saucedemo.com/')

    // Realiza o login com dados válidos
    loginPage.loginWithUser(userData.userSuccess.userName, userData.userSuccess.password)
    loginPage.loginButton()
    loginPage.homeAlert()

  })
})
