import {Selector, t} from 'testcafe';
import ProductDetailsPage from '../pages/ProductDetailsPage'

// Class with Products Page elements and common methods

class ProductsPage {
    constructor(){
        this.pageTitle = Selector('div.product_label').withText('Products')
        this.hamburguerButton = Selector('#react-burger-menu-btn')
        this.logoutButton = Selector('#logout_sidebar_link')
        this.cartButton = Selector('#shopping_cart_container > a > svg')
        this.SauceLabsBackpackLink = Selector('div.inventory_item_name').withExactText('Sauce Labs Backpack') 
        this.SauceLabsBikeLightLink = Selector('div.inventory_item_name').withExactText('Sauce Labs Bike Light') 
    };

    async validateProductsPage(){
        await t
        .expect(this.pageTitle.exists).ok()
    };
    
    async logoutProcess()    {
        await t
        .click(this.hamburguerButton)
        .click(this.logoutButton)
    };

    async goToCart() {
        await t
        .click(this.cartButton)
    };

    async addSauceLabsBackpackToCart(){
        await t
        .click(this.SauceLabsBackpackLink)
        .click(ProductDetailsPage.addToCartButton)
        .click(ProductDetailsPage.backToProductsButton)
    };

    async addSauceLabsBikeLightToCart(){
        await t
        .click(this.SauceLabsBikeLightLink)
        .click(ProductDetailsPage.addToCartButton)
        .click(ProductDetailsPage.backToProductsButton)
    };

    async verifySauceLabsBackpackItem(){
        await t
        .expect(this.SauceLabsBackpackLink.exists).ok()
    };

    async verifySauceLabsBikeLightItem(){
        await t
        .expect(this.SauceLabsBikeLightLink.exists).ok()
    };

};


export default new ProductsPage

