import {Selector, t} from 'testcafe';
import ProductDetailsPage from '../pages/ProductDetailsPage'

// Class with Products Page elements and common methods

class ProductsPage {
    constructor(){
        this.pageTitle = Selector('div.product_label').withText('Products')
        this.hamburguerButton = Selector('#react-burger-menu-btn')
        this.logoutButton = Selector('#logout_sidebar_link')
        this.cartButton = Selector('#shopping_cart_container > a > svg')
        this.SauceLabsBackpackButton = Selector('div.inventory_item_name').withExactText('Sauce Labs Backpack') 
        this.SauceLabsBikeLightButton = Selector('div.inventory_item_name').withExactText('Sauce Labs Bike Light') 
    }

    async logoutProcess()    {
        await t
        .click(this.hamburguerButton)
        .click(this.logoutButton)
    }

    async goToCart() {
        await t
        .click(this.cartButton)
    }

    async addSauceLabsBackpackToCart(){
        await t
        .click(this.SauceLabsBackpackButton)
        .click(ProductDetailsPage.addToCartButton)
        .click(ProductDetailsPage.backToProductsButton)
    }

    async addSauceLabsBikeLightToCart(){
        await t
        .click(this.SauceLabsBikeLightButton)
        .click(ProductDetailsPage.addToCartButton)
        .click(ProductDetailsPage.backToProductsButton)
    }

}


export default new ProductsPage

