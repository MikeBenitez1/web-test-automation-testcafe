import {Selector, t} from 'testcafe'

// Class with Cart Page elements and common methods

class CartPage {
    constructor(){
        this.pageTitle = Selector('div.subheader').withExactText('Your Cart')
        this.checkoutButton = Selector('a.btn_action.checkout_button').withText('CHECKOUT')
    }

    async validateCartPage(){
        await t
        .expect(this.pageTitle.exists).ok()
    }

    async goToCheckout(){
        await t
        .click(this.checkoutButton)
    }

}

export default new CartPage

