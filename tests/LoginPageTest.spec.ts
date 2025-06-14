import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'
import { ENV } from '../utils/env'

const incorrectPassword = "Test"

test.describe.configure({mode: 'serial', retries : 4, timeout: 60000})

let loginPage
let dashboardPage
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.launchURL(ENV.baseUrl)
})
test("@smoke @regression Valid Login Scenario", async ()=>{
    await test.step("Login with valid credentials", async () => {
        await loginPage.validLogin(ENV.username, ENV.password)
    })
    await test.step("Verify successful login", async () => {
    await expect(dashboardPage.homePageIdentifier).toBeVisible()
    })
})

test("@regression Invalid Login Scenario", async ()=>{
    await loginPage.invalidLogin(ENV.username, incorrectPassword)
    await expect(loginPage.errMessage).toBeVisible()
})

// Tags - smoke, regression
// 2 ways - we can directly include the tags in the test or we can use the annotation
// 



// allure report - 
// GitHub - 
// Jenkins - 

// Playwright MCP - AI - GitHub Actions