import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'
import { ENV } from '../utils/env'

const incorrectPassword = "Test"

let loginPage
let dashboardPage
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.launchURL(ENV.baseUrl)
})
test("Valid Login Scenario", async ()=>{
    await loginPage.validLogin(ENV.username, ENV.password)
    await expect(dashboardPage.homePageIdentifier).toBeVisible()
})

test("Invalid Login Scenario", async ()=>{
    await loginPage.invalidLogin(ENV.username, incorrectPassword)
    await expect(loginPage.errMessage).toBeVisible()
})