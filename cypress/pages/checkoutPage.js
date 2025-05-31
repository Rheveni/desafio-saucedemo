// Page Object para interações no processo de checkout

class CheckoutPage{

    selectorsList(){
        const selectors = {
        firstNameInput: "[name='firstName']",
        lastNameInput: "[name='lastName']",
        postalCodeInput: "[name='postalCode']",
        continueButton: "[name='continue']",
        finishButton: "[name='finish']"

    }
    return selectors
    }

    clickContinueButton() {
        cy.get(this.selectorsList().continueButton).click()
       // cy.get('body').should('contain', 'Checkout: Overview')
    }

// Preenche os dados do formulário de checkout
    fillCheckoutForm(firstName, lastName, postalCode) {
        
        cy.get(this.selectorsList().firstNameInput).type(firstName)
        cy.get(this.selectorsList().lastNameInput).type(lastName)
        cy.get(this.selectorsList().postalCodeInput).type(postalCode)
    }



  // Valida se os dados inseridos estão corretos
    verifyCheckoutForm(firstName, lastName, postalCode) {
        cy.get(this.selectorsList().firstNameInput).should('have.value', firstName)
        cy.get(this.selectorsList().lastNameInput).should('have.value', lastName)
        cy.get(this.selectorsList().postalCodeInput).should('have.value', postalCode)
    }


// Clica no botão Continue para prosseguir com o pedido
    clickContinueButton(){
        cy.get(this.selectorsList().continueButton).click()
        cy.get('body').should('contain', 'Checkout: Overview')
    }


// Clica no botão Finish para concluir o pedido
    clickFinishButton() {
        cy.get(this.selectorsList().finishButton).click()
        cy.get('body').should('contain', 'Checkout: Complete!')
    }

}
export default CheckoutPage