//File with E2E test scenarios for https://www.saucedemo.com/

import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import { CREDENTIALS } from '../data/Data'


fixture("E2E Test Cases Session 1")
    .page("https://www.saucedemo.com/")

test('Login with a valid user', async t =>{
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_DATA.VALID_USERNAME, CREDENTIALS.VALID_DATA.PASSWORD)
    await t.expect(ProductsPage.pageTitle.exists).ok()
})

test('Login with invalid user', async t =>{
    await LoginPage.submitLoginForm(CREDENTIALS.INVALID_DATA.INVALID_USERNAME, CREDENTIALS.VALID_DATA.PASSWORD)
    await t.expect(LoginPage.errorMessage.exists).ok()
})

test('Logout from products page', async t =>{
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_DATA.VALID_USERNAME, CREDENTIALS.VALID_DATA.PASSWORD)
    await t.expect(ProductsPage.pageTitle.exists).ok()
    await ProductsPage.logoutProcess()
    await t.expect(LoginPage.loginButton.exists).ok()
});