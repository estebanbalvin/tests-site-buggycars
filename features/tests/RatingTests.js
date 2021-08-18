import {ClientFunction} from 'testcafe'
import ProfilePage from '../PageObjects/ProfilePage';
import LoginPage from '../PageObjects/LoginPage'
import config  from '../utils/config'
import RatingPage from '../PageObjects/RatingPage';
import RegistrationPage from '../PageObjects/RegistrationPage';


//generation of random login
var random = require('random-name')
var random_login=random.first()+random.last().substr(3)
var rndlogin_pass=random.last().toUpperCase()+'1Ax.'

fixture('RATING TESTS')
.page(config.general.url)

.beforeEach(async t=> {
    await t.navigateTo(config.general.url+'register')
    RegistrationPage.registerNewLogin(random_login,rndlogin_pass,rndlogin_pass);
    LoginPage.setUserName(random_login);
    LoginPage.setPassword(rndlogin_pass);
    LoginPage.clickOnLoginButton();
    await t.navigateTo(config.general.url+'overall')
    await t.expect((RatingPage.containerTable).visible).ok(),{timeout: 10000};
})


test('Smoke test- Profile page is loaded successfully', async t => {

    await t
    .expect(RatingPage.containerTable.visible).ok()
    .expect(RatingPage.containerTable.visible).ok()
    .expect(RatingPage.fordwardBtn.visible).ok()   
});


test('WHEN an user types a comment and vote, THEN a msg is displayed and the comment posted', async t => {

    RatingPage.voteByModel("Huayra")
    await t.expect(RatingPage.messageSucess.visible).ok();
    await t.expect(RatingPage.messageSucess.innerText).contains("Thank you");
    RatingPage.checkCommentPosted(RatingPage.comments_post)
});


 
 