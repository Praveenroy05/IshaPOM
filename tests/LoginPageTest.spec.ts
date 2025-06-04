import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'

const url = "https://rahulshettyacademy.com/client"
const username :string  = "test7lYM@gmail.com"
const password = "Test@123"
const incorrectPassword = "Test"

let loginPage
let dashboardPage
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.launchURL(url)
})
test("Valid Login Scenario", async ()=>{
    await loginPage.validLogin(username, password)
    await expect(dashboardPage.homePageIdentifier).toBeVisible()
})

test("Invalid Login Scenario", async ()=>{
    await loginPage.invalidLogin(username, incorrectPassword)
    await expect(loginPage.errMessage).toBeVisible()
})