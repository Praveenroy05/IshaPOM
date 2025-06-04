import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'
import { ProductViewPage } from '../pages/ProductViewPage'


let loginPage
let dashboardPage
let productViewPage
const productName = "IPHONE 13 PRO"
const url = "https://rahulshettyacademy.com/client"
const username :string  = "test7lYM@gmail.com"
const password = "Test@123"

test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    productViewPage = new ProductViewPage(page)
    await loginPage.launchURL(url)
    await loginPage.validLogin(username, password)
    await expect(dashboardPage.homePageIdentifier).toBeVisible()

})
test.describe("Dashboard Page Test", async ()=>{
test("Add the product to the cart", async ()=>{
    await dashboardPage.searchAndAddProductToCart(productName)
    await expect(dashboardPage.addToCartSuccessMsg).toContainText("Product Added To Cart")
})
test("Validate the product details", async ()=>{
    await dashboardPage.searchAndValidateProductDetails(productName)
    await expect(productViewPage.productDetail_name).toHaveText(productName)
})

})
