import {Selector, t} from 'testcafe'
import config  from '../utils/config'

class LoginPage{

    constructor(){
        this.userNameInput = Selector('.form-control').nth(0);;
        this.passwordInput = Selector('.form-control').nth(1);
        this.logoutBtn = Selector('.nav-link').nth(2);
        this.loginBtn = Selector('.btn-success').withText("Login")
        this.registerBtn = Selector('.btn-success-outline').withText("Register")
        this.bannerHeader = Selector('.jumbotron-fluid')
        this.navigationBar = Selector('.navbar-brand')
        this.invalidLoginLabel= Selector('.label-warning')
        this.greetingLabel= Selector('.nav-item').nth(0);
        this.makeTile = Selector('.img-fluid center-block').nth(0)
        this.modelTile = Selector('.img-fluid center-block').nth(1)
        this.ratingTile = Selector('.img-fluid.center-block').nth(2)
    }
    
    async setUserName(userName){
        await t
        .typeText(this.userNameInput, userName)
    }

    async setPassword(password){
        await t
        .typeText(this.passwordInput, password);
    }
    
    async clickOnLoginButton(){
        await t
        .click(this.loginBtn);
    }

    async clickOnRegistration(){
        await t
        .click(this.registerBtn);
    }
    async clickOnRegistration(){
        await t
        .click(this.registerBtn);
    }

    async loginAsDefaultUser(){
        await t
        .typeText(this.userNameInput, config.user.defaultLogin)
        .typeText(this.passwordInput, config.user.defaultPassword)
        .click(this.loginBtn);
    }

}

export default new LoginPage();