import {Selector, t} from 'testcafe'

// Class with Checkout Overview Page elements and common methods

class CheckoutOverviewPage {
    constructor(){
        this.pageTitle = Selector('div.subheader').withExactText('Checkout: Overview')
        this.finishButton = Selector('a.btn_action.cart_button')
    };

    async validateCheckoutOverviewPage(){
        await t
        .expect(this.pageTitle.exists).ok()
    };

    async finishPurchase(){
        await t
        .click(this.finishButton)
    };
};

export default new CheckoutOverviewPage

