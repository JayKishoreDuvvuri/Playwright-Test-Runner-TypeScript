import { test as baseTest } from '@playwright/test'
import { LandingPage } from '../pages/landingPage'
import { AddToCartPage } from '../pages/addToCartPage'
import { ProductPage } from '../pages/productPage'

const test = baseTest.extend<{
	landingPage: LandingPage
	addToCartPage: AddToCartPage
	productPage: ProductPage
}>({
	landingPage: async ({ page }, use) => {
		await use(new LandingPage(page))
	},
	addToCartPage: async ({ page }, use) => {
		await use(new AddToCartPage(page))
	},
	productPage: async ({ page }, use) => {
		await use(new ProductPage(page))
	}
})
export default test
