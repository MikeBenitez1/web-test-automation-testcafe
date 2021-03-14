import {Selector, t} from 'testcafe';

// Class with Product Page elements and common methods

class ProductsPage {
    constructor(){
        this.pageTitle = Selector('div.product_label').withText('Products')
        this.hamburguerButton = Selector('#react-burger-menu-btn')
        this.logoutButton = Selector('#logout_sidebar_link')
    }

    async logoutProcess()    {
        await t
        .click(this.hamburguerButton)
        .click(this.logoutButton)
    }
}

export default new ProductsPage