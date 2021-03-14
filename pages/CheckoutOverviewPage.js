import {Selector, t} from 'testcafe'

// Class with Checkout Overview Page elements and common methods

class CheckoutOverviewPage {
    constructor(){
        this.pageTitle = Selector('div.subheader').withExactText('Checkout: Overview')
    }

}

export default new CheckoutOverviewPage

