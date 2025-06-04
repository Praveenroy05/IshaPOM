// page - locators and methods related to that particular(Login) page

import { Locator, Page } from "playwright";

export class LoginPage{

    // Locators  - properties/variable of a class

    test : Page
    private username : Locator
    private password : Locator
    private loginBtn : Locator
    errMessage : Locator
    //homePageIdentifier : Locator

    constructor(page){
        // this - refer to an object of a class
        this.test = page // this.page
        this.username = this.test.getByPlaceholder("email@example.com")
        this.password = this.test.getByPlaceholder("enter your passsword")
        this.loginBtn = this.test.getByRole('button', {name: 'Login', exact : true})
        this.errMessage  = this.test.locator("#toast-container")
      //  this.homePageIdentifier = this.test.locator(".fa-sign-out")
    }

    async launchURL(url){
        await this.test.goto(url)
    }

    async validLogin(username, password){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
    }

     async invalidLogin(username, incorrectPassword){
        await this.username.fill(username)
        await this.password.fill(incorrectPassword)
        await this.loginBtn.click()
    }

}