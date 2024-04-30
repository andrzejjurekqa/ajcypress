class OrderPage {

    elements = {
        itemInfo: () => cy.get('h3 > a'),
        totalAmount: () => cy.get('.total-amount')
    }

    //loop through products and return true if found 
    // verifyItemInOrder(productName) {
    //     this.genericLoop(this.itemInfo, productName)
    // }
}

export default OrderPage;