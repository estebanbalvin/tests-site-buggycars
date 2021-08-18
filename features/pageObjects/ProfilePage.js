import {Selector, t} from 'testcafe'

class ProfilePage{

    constructor(){
        //general selectors
        this.loginInput = Selector('#username');;
        this.firstNameInput = Selector('#firstName');
        this.lastNameInput = Selector('#lastName');
        this.genderList = Selector('#gender')
        this.ageInput = Selector('#age')
        this.addressInput = Selector('#address')
        this.phoneInput = Selector('#phone')
        this.hobbyList= Selector('#hobby')
        this.currentPassInput= Selector('#currentPassword');
        this.newPassInput= Selector('#newPassword');
        this.newPassConfirmationInput= Selector('#newPasswordConfirmation');
        this.saveBtn= Selector('.btn-default');
        this.profileLink=Selector('.nav-item').withText("Profile")

        //validation messages
        this.messageAlert= Selector('.alert-danger');
        this.alertPassword= Selector('main div').withText("Passwords do not match").nth(7);
        this.alertPassword2= Selector('main div').withText("InvalidPasswordException: Password did not conform with policy: Password must have symbol characters").nth(3);
        this.messageSucess= Selector('.alert-success');

    }
    
    async setBasicInfo(firstName,lastName){
        await t
        .typeText(this.firstNameInput,firstName, {replace:true})
        .typeText(this.lastNameInput, lastName, {replace:true})
    }

    async setAdditionalInfo(gender,age,address,phone){
        await t
        .typeText(this.genderList, gender,{replace:true})
        .typeText(this.ageInput, age,{replace:true})
        .typeText(this.addressInput, address,{replace:true})
        .typeText(this.phoneInput, phone,{replace:true})
    }
    async saveInfo(){
        await t.click(this.saveBtn);
    }
    
    async changePassword(currentPass,newPass,confPass){
        await t
        .typeText(this.currentPassInput, currentPass,{replace:true})
        .typeText(this.newPassInput, newPass,{replace:true})
        .typeText(this.newPassConfirmationInput, confPass,{replace:true})
    }

    
}

export default new ProfilePage();