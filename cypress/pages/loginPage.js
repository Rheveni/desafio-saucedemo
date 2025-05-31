class LoginPage{

    selectorsList(){

        const selectors = {
            usernameField:"[name='user-name']",
            passwordField:"[name='password']",
            loginButton:"[name='login-button']"

}
return selectors
    }

// Preenche os campos de login com os dados fornecidos
    loginWithUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username);
        cy.get(this.selectorsList().passwordField).type(password);
    }


 // Clica no botão de login
    loginButton(){
        cy.get(this.selectorsList().loginButton).click();
    }


// Valida se o login foi bem-sucedido
    homeAlert() {
        cy.get('body').should('contain', 'Products');
    }

}
export default LoginPage