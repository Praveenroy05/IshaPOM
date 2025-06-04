import { Locator, Page } from "playwright"

export class ProductViewPage{

    page :Page
    productDetail_name : Locator 

    constructor(page) {
        this.page = page
        this.productDetail_name = this.page.locator("div.col-lg-6 h2")
    }

}