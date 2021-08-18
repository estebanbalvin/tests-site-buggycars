import {ClientFunction} from 'testcafe'
import LoginPage from '../PageObjects/LoginPage'
import config  from '../utils/config'



fixture('LOGIN TESTS')
.page(config.general.url)


test('Smoke Test- Home page is loaded successfully', async t => {
    await t
    .expect(LoginPage.loginBtn.visible).ok()
    .expect(LoginPage.bannerHeader.visible).ok()
    .expect(LoginPage.navigationBar.visible).ok();
});

test('WHEN  valid credentials are entered, THEN  user is logged in successfully', async t => {
    
    LoginPage.loginAsDefaultUser();
    await t.expect(LoginPage.greetingLabel.innerText).contains("Hi");

});

test('WHEN wrong credentials are entered,THEN an error message is displayed', async t => {
    
    LoginPage.setUserName('invalid_user');
    LoginPage.setPassword('SuperSecretPassword!');
    LoginPage.clickOnLoginButton();
    await t.expect(LoginPage.invalidLoginLabel.innerText).contains("Invalid username/password");
});

