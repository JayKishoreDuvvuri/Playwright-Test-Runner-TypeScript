import { Page, expect } from '@playwright/test'

export class BasePage {
	readonly page: Page

	constructor(page: Page) {
		this.page = page
	}

	async getTitle(): Promise<string> {
		return await this.page.title()
	}

	async open(url: string): Promise<void> {
		await this.page.goto(url)
	}

	async getUrl(): Promise<string> {
		return this.page.url()
	}

	//Wait for the Page to Load
	async waitForPageLoad(): Promise<BasePage> {
		await this.page.waitForLoadState('networkidle')
		return this
	}

	//wait and find a specific element with it's Selector and return Visible
	async isElementVisible(selector: string): Promise<Boolean> {
		await this.page.waitForSelector(selector)
		const element = this.page.locator(selector)
		return await element.isVisible()
	}

	// wait and type for the element
	async waitAndType(selector: string, text: string): Promise<void> {
		await this.page.waitForSelector(selector)
		await this.page.click(selector, { clickCount: 3 })
		await this.page.keyboard.press('Backspace')
		await this.page.type(selector, text)
	}

	// wait and fill for the element
	async waitAndFill(selector: string, text: string): Promise<void> {
		await this.page.waitForSelector(selector)
		await this.page.fill(selector, text)
	}

	// wait and click the element
	async waitAndClick(selector: string): Promise<BasePage> {
		await this.page.waitForSelector(selector)
		await this.page.click(selector)
		return this
	}

	// Get text of the element
	async getText(selector: string): Promise<string> {
		await this.page.waitForSelector(selector)
		const text = await this.page.$eval(
			selector,
			(element: HTMLElement) => element.innerHTML
		)
		return text
	}

	// Get Count of the elements
	async getCount(selector: string): Promise<Number> {
		await this.page.waitForSelector(selector)
		const count = await this.page.$$eval(selector, elements => elements.length)
		return count
	}

	// Get Result for Black colour
	async blackColourResult(): Promise<any> {
		const result = await this.page.evaluate(
			'document.querySelector("#color_11").getAttribute("class")'
		)
		return result
	}

	// Get Result for Orange colour
	async orangeColourResult(): Promise<any> {
		const result = await this.page.evaluate(
			'document.querySelector("#color_13").getAttribute("class")'
		)
		return result
	}

	// Get Result for Blue colour
	async blueColourResult(): Promise<any> {
		const result = await this.page.evaluate(
			'document.querySelector("#color_14").getAttribute("class")'
		)
		return result
	}

	// Get Result for yellow colour
	async yellowColourResult(): Promise<any> {
		const result = await this.page.evaluate(
			'document.querySelector("#color_16").getAttribute("class")'
		)
		return result
	}

	// Get Result for black, blue, orange and yellow colour image updated
	async ColourImageUpdated(): Promise<any> {
		const result = await this.page.evaluate(
			'document.querySelector("#bigpic").getAttribute("src");'
		)
		return result
	}
}
