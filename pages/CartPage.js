import {Selector, t} from 'testcafe'
import ProductsPage from '../pages/ProductsPage'

// Class with Cart Page elements and common methods

class CartPage {
    constructor(){
        this.pageTitle = Selector('div.subheader').withText('Your Cart')
    }

    async verifySauceLabsBackpackOnCart(){
        await t
        .expect(ProductsPage.SauceLabsBackpackButton.exists).ok()
    }

    async verifySauceLabsBikeLightOnCart(){
        await t
        .expect(ProductsPage.SauceLabsBikeLightButton.exists).ok()
    }

}

export default new CartPage
