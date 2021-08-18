import {Selector, t} from 'testcafe'

class RegistrationPage{

    constructor(){
        this.titleLabel= Selector('main h2').withText("Register with Buggy Cars Rating")
        this.loginInput = Selector('#username');;
        this.firstNameInput = Selector('#firstName');
        this.lastNameInput = Selector('#lastName');
        this.password= Selector('#password');
        this.confirmPass= Selector('#confirmPassword');
        this.register = Selector('header a').withText('Register')
        this.registerBtn = Selector('.btn-default')
        
        //validation messages
        this.messageAlertExisting= Selector('main div').withText("UsernameExistsException: User already exists").nth(2);
        this.messageAlertPasswords= Selector('main div').withText("Passwords do not match").nth(3);
        this.messageAlertMatch= Selector('main div').withText("InvalidPasswordException: Password did not conform with policy: Password must have symbol characters").nth(3);
        this.messageSucess= Selector('.alert-success');
        
    }
    async registerNewLogin(login,password,confpassword){
        await t
        .typeText(this.loginInput, login ,{replace:true})
        .typeText(this.firstNameInput, login,{replace:true})
        .typeText(this.lastNameInput, "Balvin",{replace:true})
        .typeText(this.password, password,{replace:true})
        .typeText(this.confirmPass, confpassword,{replace:true})
        .click(this.registerBtn)
    }

    async saveInfo(){
        await t.click(this.saveBtn);
    }

}

export default new RegistrationPage();