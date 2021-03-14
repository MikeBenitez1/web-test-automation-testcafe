//Fixture with E2E test scenarios for https://www.saucedemo.com/

import { CREDENTIALS } from '../data/Data'
import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import CartPage from '../pages/CartPage'
import ProductDetailsPage from '../pages/ProductDetailsPage'

fixture("E2E Test Cases Session 1")
    .page("https://www.saucedemo.com/");

test.meta("testID","TC-01")('Login with a valid user', async t =>{
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_DATA.VALID_USERNAME, CREDENTIALS.VALID_DATA.PASSWORD)
    await t.expect(ProductsPage.pageTitle.exists).ok()
})

test.meta("testID","TC-02")('Login with invalid user', async t =>{
    await LoginPage.submitLoginForm(CREDENTIALS.INVALID_DATA.INVALID_USERNAME, CREDENTIALS.VALID_DATA.PASSWORD)
    await t.expect(LoginPage.errorMessage.exists).ok()
})

test.meta("testID","TC-03")('Logout from products page', async t =>{
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_DATA.VALID_USERNAME, CREDENTIALS.VALID_DATA.PASSWORD)
    await t.expect(ProductsPage.pageTitle.exists).ok()
    await ProductsPage.logoutProcess()
    await t.expect(LoginPage.loginButton.exists).ok()
})

test.meta("testID","TC-04")('Navigate to shopping cart', async t =>{
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_DATA.VALID_USERNAME, CREDENTIALS.VALID_DATA.PASSWORD)
    await ProductsPage.goToCart()
    await t.expect(CartPage.pageTitle.exists).ok()
})

test.meta("testID","TC-05")('Add a single item to the shopping cart', async t =>{
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_DATA.VALID_USERNAME, CREDENTIALS.VALID_DATA.PASSWORD)
    await ProductsPage.addSauceLabsBackpackToCart()
    await ProductsPage.goToCart()
    await t.expect(CartPage.pageTitle.exists).ok()
    await CartPage.verifySauceLabsBackpackOnCart()
})

test.meta("testID","TC-06")('Add multiple items to the shopping cart', async t =>{
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_DATA.VALID_USERNAME, CREDENTIALS.VALID_DATA.PASSWORD)
    await ProductsPage.addSauceLabsBackpackToCart()
    await ProductsPage.addSauceLabsBikeLightToCart()
    await ProductsPage.goToCart()
    await t.expect(CartPage.pageTitle.exists).ok()
    await CartPage.verifySauceLabsBackpackOnCart()
    await CartPage.verifySauceLabsBikeLightOnCart()
});