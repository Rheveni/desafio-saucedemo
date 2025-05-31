// Page Object para interações na tela de produtos

class ProductPage{

    selectorsList(){

        const selectors = {
            productName: "[data-test='inventory-item-name']",
            productPrice: "[data-test='inventory-item-price']",
            productDescription: "[data-test='inventory-item-desc']",
            addToCartButton: "[name='add-to-cart']",

        }
        return selectors
    }


// Seleciona um produto e valida seus dados
    selectProduct(itemName, itemPrice, itemDescription) {
        cy.get(this.selectorsList().productName).contains(itemName)
        cy.get(this.selectorsList().productName).contains(itemName).click()
        
        cy.get(this.selectorsList().productName).should('contain', itemName)
        cy.get(this.selectorsList().productPrice).should('contain', itemPrice)
        cy.get(this.selectorsList().productDescription).should('contain', itemDescription)
        
    }

// Clica no botão para adicionar produto ao carrinho
    clickAddToCartButton() {
       cy.get(this.selectorsList().addToCartButton).click()
    }
}
export default ProductPage