import {ClientFunction} from 'testcafe'
import RegistrationPage from '../PageObjects/RegistrationPage';
import config  from '../utils/config'


//generation of random login
var random = require('random-name')
var random_login=random.first()+random.last().substr(3)
var rndlogin_pass=random.last().toUpperCase()+'1Ax.'

fixture('USER REGISTRATION TESTS ')
.page(config.general.url)

.beforeEach(async t=> {
    await t.click(RegistrationPage.register)
})
test('Smoke Test- Registration page is loaded successfully', async t => {
    await t
    .expect(RegistrationPage.loginInput.visible).ok()
    .expect(RegistrationPage.firstNameInput.visible).ok()
    .expect(RegistrationPage.registerBtn.visible).ok();
});

test('WHEN the form is filled out correctly,THEN the user is registered successfully', async t => {
  
    RegistrationPage.registerNewLogin(random_login,rndlogin_pass,rndlogin_pass);
    await t.expect(RegistrationPage.messageSucess.visible).ok()
    .expect(RegistrationPage.messageSucess.innerText).contains("Registration is successful");
});

test('WHEN the user tries to create an existing login, THEN an error should be displayed', async t => {
    
    RegistrationPage.registerNewLogin("estebillan",rndlogin_pass,rndlogin_pass);
    await t.expect(RegistrationPage.messageAlertExisting.visible).ok()
    await t.expect(RegistrationPage.messageAlertExisting.innerText).contains("User already exists");
});

test('WHEN the passwords do not match, THEN a validation error is displayed ', async t => {
    
    RegistrationPage.registerNewLogin(random_login,"PassWord1.","PassWord2.");
    await t.expect(RegistrationPage.messageAlertPasswords.innerText).contains("Passwords do not match");
});


