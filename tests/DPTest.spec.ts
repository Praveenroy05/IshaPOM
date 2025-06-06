import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'
import { ProductViewPage } from '../pages/ProductViewPage'

import data from '../TestData/login.json'



let loginPage
let dashboardPage
let productViewPage

test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    productViewPage = new ProductViewPage(page)
    await loginPage.launchURL(data.url)
    await loginPage.validLogin(data.username, data.password)
    await expect(dashboardPage.homePageIdentifier).toBeVisible()

})
test.describe("Dashboard Page Test", async ()=>{
test("Add the product to the cart", async ()=>{
    await dashboardPage.searchAndAddProductToCart(data.productName)
    await expect(dashboardPage.addToCartSuccessMsg).toContainText("Product Added To Cart")
})
test("Validate the product details", async ()=>{
    await dashboardPage.searchAndValidateProductDetails(data.productName)
    await expect(productViewPage.productDetail_name).toHaveText(data.productName)
})

})
