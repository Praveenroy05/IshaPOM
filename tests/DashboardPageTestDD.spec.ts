import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'
import { ProductViewPage } from '../pages/ProductViewPage'
import path from 'path'
import { ExcelUtil } from '../utils/ExcelUtil'

const  filePath = path.join(__dirname, '../TestData/excel.xlsx');
const sheeetName = "Login"

let datas

try{
datas = ExcelUtil.getExcelData(filePath, sheeetName)
}
catch(e){
    console.log("Error reading Excel data: ", e);
}


let loginPage
let dashboardPage
let productViewPage

let count =0


test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    productViewPage = new ProductViewPage(page)
})

for(let data of datas){
test.describe("Dashboard Page Test", async ()=>{
test(`Add the product to the cart for ${data.productName}`, async ()=>{
    await loginPage.launchURL(data.url)
    await loginPage.validLogin(data.username, data.password)
    await expect(dashboardPage.homePageIdentifier).toBeVisible()
    await dashboardPage.searchAndAddProductToCart(data.productName)
    await expect(dashboardPage.addToCartSuccessMsg).toContainText(data.successMsg)
})
test(`Validate the product details for ${data.productName}`, async ()=>{
    await loginPage.launchURL(data.url)
    await loginPage.validLogin(data.username, data.password)
    await expect(dashboardPage.homePageIdentifier).toBeVisible()
    await dashboardPage.searchAndValidateProductDetails(data.productName)
    await expect(productViewPage.productDetail_name).toHaveText(data.productName)
})

})
 count++
 if(count ==1){
    break
 }
}
