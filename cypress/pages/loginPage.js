class LoginPage{

    selectorsList(){

        const selectors = {
            usernameField:"[name='user-name']",
            passwordField:"[name='password']",
            loginButton:"[name='login-button']"

}
return selectors
    }
    loginWithUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username);
        cy.get(this.selectorsList().passwordField).type(password);
    }

    loginButton(){
        cy.get(this.selectorsList().loginButton).click();
    }

    homeAlert() {
        cy.get('body').should('contain', 'Products');
    }

}
export default LoginPage