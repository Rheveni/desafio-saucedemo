import LoginPage from "../pages/loginPage"
import userData from "../fixtures/userData.json"


const loginPage = new LoginPage()


describe('Login Test', () => {
  it('Login - Sucess', () => {
    cy.visit('https://www.saucedemo.com/')

    loginPage.loginWithUser(userData.userSuccess.userName, userData.userSuccess.password)
    loginPage.loginButton()
    loginPage.homeAlert()

  })
})