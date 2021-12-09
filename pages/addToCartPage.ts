import { BasePage } from './basePage'
import {
	addToCartButton,
	successMessage,
	cartAddedMessage,
	closeBtn,
	itemCount,
	printedChiffonDress
} from '../pageobjects/selectors'
import type { Page } from '@playwright/test'

export class AddToCartPage extends BasePage {
	constructor(page: Page) {
		super(page)
	}

	async printedChiffonDress(): Promise<void> {
		await this.isElementVisible(printedChiffonDress)
	}

	async clickChiffonDress(): Promise<void> {
		await this.waitAndClick(printedChiffonDress)
	}

	async clickAddToCart(): Promise<any> {
		return await this.waitAndClick(addToCartButton)
	}

	async cartAddedMessage(): Promise<any> {
		return await this.isElementVisible(cartAddedMessage)
	}

	async cartSuccessMessage(): Promise<any> {
		return await this.isElementVisible(successMessage)
	}

	async cartCount(): Promise<any> {
		await this.waitAndClick(closeBtn)
		return await this.getText(itemCount)
	}
}
