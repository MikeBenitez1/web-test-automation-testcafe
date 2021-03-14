import {Selector, t} from 'testcafe';

// Class with Product Details Page elements and common methods

class ProductDetailsPage {
    constructor(){
        this.addToCartButton = Selector('button.btn_primary.btn_inventory').withExactText('ADD TO CART')
        this.backToProductsButton = Selector('button.inventory_details_back_button')
        this.SauceLabsBikeLightDetails = Selector('div.inventory_details_name').withExactText('Sauce Labs Bike Light')
        this.SauceLabsBackpackDetails = Selector('div.inventory_details_name').withExactText('Sauce Labs Backpack')
    }
}

export default new ProductDetailsPage

