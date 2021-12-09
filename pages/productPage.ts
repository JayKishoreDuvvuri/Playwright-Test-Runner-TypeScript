import {
	colourBlack,
	printedSummerDress,
	imagePicture,
	colourOrange,
	colourBlue,
	colourYellow,
	colourSelected,
	headerLogo,
	quantityWanted,
	numberOfItems,
	checkout,
	productPrice
} from '../pageobjects/selectors'
import { BasePage } from './basePage'
import type { Page } from '@playwright/test'

export class ProductPage extends BasePage {
	constructor(page: Page) {
		super(page)
	}

	async printedSummerDress(): Promise<any> {
		return await this.waitAndClick(printedSummerDress)
	}

	async verifyTitle(): Promise<any> {
		return await this.getTitle()
	}

	async blackColour(): Promise<any> {
		await this.waitAndClick(colourBlack)
		return this.blackColourResult()
	}

	async blackColourImageUpdated(): Promise<any> {
		await this.isElementVisible(imagePicture)
		return await this.ColourImageUpdated()
	}

	async orangeColour(): Promise<any> {
		await this.waitAndClick(colourOrange)
		return await this.orangeColourResult()
	}
	async orangeColourImageUpdated(): Promise<any> {
		await this.isElementVisible(imagePicture)
		return await this.ColourImageUpdated()
	}

	async blueColour(): Promise<any> {
		await this.waitAndClick(colourBlue)
		return await this.blueColourResult()
	}

	async blueColourImageUpdated(): Promise<any> {
		await this.isElementVisible(imagePicture)
		return await this.ColourImageUpdated()
	}

	async yellowColour(): Promise<any> {
		await this.waitAndClick(colourYellow)
		return await this.yellowColourResult()
	}

	async yellowColourImageUpdated(): Promise<any> {
		await this.isElementVisible(imagePicture)
		return await this.ColourImageUpdated()
	}

	async colourSelected(): Promise<any> {
		return await this.isElementVisible(colourSelected)
	}

	async navigateToHomePage(): Promise<any> {
		return await this.waitAndClick(headerLogo)
	}

	async verifyTotalPrice(): Promise<any> {
		const result = await this.getText(productPrice)
		return result
	}
}
