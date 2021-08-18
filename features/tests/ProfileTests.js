import {ClientFunction} from 'testcafe'
import ProfilePage from '../PageObjects/ProfilePage';
import LoginPage from '../PageObjects/LoginPage'
import config  from '../utils/config'

//generation of random login
var random = require('random-name')


fixture('USER PROFILE TESTS')
.page(config.general.url)

.beforeEach(async t=> {
    LoginPage.loginAsDefaultUser();
    await t.click(ProfilePage.profileLink)
})

test('Smoke test- Profile page is loaded successfully', async t => {

    await t
    .expect(ProfilePage.firstNameInput.visible).ok()
    .expect(ProfilePage.currentPassInput.visible).ok()
    .expect(ProfilePage.saveBtn.visible).ok();
});

test('WHEN valid information is set in the form, THEN the users profile is updated sucessfully', async t => {

    ProfilePage.setBasicInfo(random.first(),random.last());
    ProfilePage.setAdditionalInfo("Male","25",random.place(),"0221221122");
    ProfilePage.saveInfo();
    await t.expect(ProfilePage.messageSucess.innerText).contains("The profile has been saved successful");
});

test('WHEN I set null passwords and I click save,THEN an error validation should be displayed ', async t => {

    ProfilePage.setBasicInfo(" "," ");
    ProfilePage.saveInfo();
    await t.expect(ProfilePage.messageAlert.visible).ok("Assertions fails: the alert message was not displayed");
});

test('WHEN the password set does not meet the password rules, THEN an error should be displayed ', async t => {

    ProfilePage.changePassword(config.user.defaultPassword,"Monday1","Friday");
    await t.expect(ProfilePage.alertPassword.visible).ok();
});
