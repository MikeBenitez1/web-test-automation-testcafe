import {Selector, t} from 'testcafe'

// Class with Checkout Page elements and common methods

class CheckoutPage {
    constructor(){
        this.pageTitle = Selector('div.subheader').withExactText('Checkout: Your Information Cart')
        this.errorMessage = Selector('h3').withText('First Name is required')
        this.firstNameField = Selector('#first-name')
        this.lastNameField = Selector('#last-name')
        this.PostalCodeField = Selector('#postal-code')
        this.continueButton = Selector('input.btn_primary.cart_button')
    }

    async submitUserForm(firstName, lastName, postalCode)    {
        await t
        .typeText(this.firstNameField, firstName) 
        .typeText(this.lastNameField, lastName)
        .typeText(this.PostalCodeField, postalCode)
        .click(this.continueButton)
    }

}

export default new CheckoutPage

