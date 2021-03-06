import {Selector, t} from 'testcafe';

// Class with Login Page elements and common methods

class LoginPage {
    constructor(){
        this.usernameField = Selector('#user-name')
        this.passwordField = Selector('#password')
        this.loginButton = Selector('#login-button')
        this.errorMessage = Selector('h3').withText('Username and password do not match any user in this service')
    };
    
    async submitLoginForm(username, password)    {
        await t
        .typeText(this.usernameField, username) 
        .typeText(this.passwordField, password)
        .click(this.loginButton)
    };

    async validateLoginPage() {
        await t
        .expect(this.loginButton.exists).ok()
    };
};

export default new LoginPage

