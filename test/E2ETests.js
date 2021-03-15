//Fixture with E2E test scenarios for https://www.saucedemo.com/

import { CREDENTIALS, USER_INFO } from '../data/Data'
import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import CartPage from '../pages/CartPage'
import ProductDetailsPage from '../pages/ProductDetailsPage'
import CheckoutPage from '../pages/CheckoutPage'
import CheckoutOverviewPage from '../pages/CheckoutOverviewPage'
import FinishPage from '../pages/FinishPage'


fixture("E2E Test Cases Session 1")
    .page("https://www.saucedemo.com/");

test.meta("testID","TC-01")('Login with a valid user', async t =>{
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_DATA.VALID_USERNAME, CREDENTIALS.VALID_DATA.PASSWORD)
    await ProductsPage.validateProductsPage()
})

test.meta("testID","TC-02")('Login with invalid user', async t =>{
    await LoginPage.submitLoginForm(CREDENTIALS.INVALID_DATA.INVALID_USERNAME, CREDENTIALS.VALID_DATA.PASSWORD)
    await t.expect(LoginPage.errorMessage.exists).ok()
})

test.meta("testID","TC-03")('Logout from products page', async t =>{
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_DATA.VALID_USERNAME, CREDENTIALS.VALID_DATA.PASSWORD)
    await ProductsPage.validateProductsPage()
    await ProductsPage.logoutProcess()
    await LoginPage.validateLoginPage()
})

test.meta("testID","TC-04")('Navigate to shopping cart', async t =>{
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_DATA.VALID_USERNAME, CREDENTIALS.VALID_DATA.PASSWORD)
    await ProductsPage.goToCart()
    await CartPage.validateCartPage()
})

test.meta("testID","TC-05")('Add a single item to the shopping cart', async t =>{
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_DATA.VALID_USERNAME, CREDENTIALS.VALID_DATA.PASSWORD)
    await ProductsPage.addSauceLabsBackpackToCart()
    await ProductsPage.goToCart()
    await CartPage.validateCartPage()
    await ProductsPage.verifySauceLabsBackpackItem()
})

test.meta("testID","TC-06")('Add multiple items to the shopping cart', async t =>{
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_DATA.VALID_USERNAME, CREDENTIALS.VALID_DATA.PASSWORD)
    await ProductsPage.addSauceLabsBackpackToCart()
    await ProductsPage.addSauceLabsBikeLightToCart()
    await ProductsPage.goToCart()
    await CartPage.validateCartPage()
    await ProductsPage.verifySauceLabsBackpackItem()
    await ProductsPage.verifySauceLabsBikeLightItem()
})

test.meta("testID","TC-07")('Continue checkout with missing user information', async t =>{
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_DATA.VALID_USERNAME, CREDENTIALS.VALID_DATA.PASSWORD)
    await ProductsPage.addSauceLabsBackpackToCart()
    await ProductsPage.addSauceLabsBikeLightToCart()
    await ProductsPage.goToCart()
    await CartPage.goToCheckout()
    await t.click(CheckoutPage.continueButton)
    await t.expect(CheckoutPage.errorMessage.exists).ok()
});

test.meta("testID","TC-08")('Continue checkout filling user information', async t =>{
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_DATA.VALID_USERNAME, CREDENTIALS.VALID_DATA.PASSWORD)
    await ProductsPage.addSauceLabsBackpackToCart()
    await ProductsPage.addSauceLabsBikeLightToCart()
    await ProductsPage.goToCart()
    await CartPage.goToCheckout()
    await CheckoutPage.submitUserForm(USER_INFO.FIRST_NAME, USER_INFO.LAST_NAME, USER_INFO.POSTAL_CODE)
    await CheckoutOverviewPage.validateCheckoutOverviewPage()
});

test.meta("testID","TC-09")('Final order items', async t =>{
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_DATA.VALID_USERNAME, CREDENTIALS.VALID_DATA.PASSWORD)
    await ProductsPage.addSauceLabsBackpackToCart()
    await ProductsPage.addSauceLabsBikeLightToCart()
    await ProductsPage.goToCart()
    await CartPage.goToCheckout()
    await CheckoutPage.submitUserForm(USER_INFO.FIRST_NAME, USER_INFO.LAST_NAME, USER_INFO.POSTAL_CODE)
    await CheckoutOverviewPage.validateCheckoutOverviewPage()
    await ProductsPage.verifySauceLabsBackpackItem()
    await ProductsPage.verifySauceLabsBikeLightItem()
});

test.meta("testID","TC-10")('Complete a purchase', async t =>{
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_DATA.VALID_USERNAME, CREDENTIALS.VALID_DATA.PASSWORD)
    await ProductsPage.addSauceLabsBackpackToCart()
    await ProductsPage.addSauceLabsBikeLightToCart()
    await ProductsPage.goToCart()
    await CartPage.goToCheckout()
    await CheckoutPage.submitUserForm(USER_INFO.FIRST_NAME, USER_INFO.LAST_NAME, USER_INFO.POSTAL_CODE)
    await CheckoutOverviewPage.validateCheckoutOverviewPage()
    await ProductsPage.verifySauceLabsBackpackItem()
    await ProductsPage.verifySauceLabsBikeLightItem()
    await CheckoutOverviewPage.finishPurchase()
    await FinishPage.validateFinishPage()
});