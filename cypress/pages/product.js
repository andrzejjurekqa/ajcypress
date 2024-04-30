class ProductPage {

    elements = {
        addToCart: () => cy.get('.add-to-cart-wrapper > #add-to-cart')
    }
}

export default ProductPage;