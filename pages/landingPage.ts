import { BasePage } from './basePage'
import type { Page } from '@playwright/test'
import {
	baseUrl,
	blouse,
	fadedShortSleeveTshirts,
	printedChiffonDress,
	printedDress,
	printedDressTwo,
	printedSummerDress,
	printedSummerDressTwo
} from '../pageobjects/selectors'

export class LandingPage extends BasePage {
	constructor(page: Page) {
		super(page)
	}

	async open(): Promise<void> {
		await super.open(baseUrl)
		await super.waitForPageLoad()
	}

	async fadedShortSleeveTshirts(): Promise<LandingPage> {
		await this.isElementVisible(fadedShortSleeveTshirts)
		return this
	}

	async blouse(): Promise<LandingPage> {
		await this.isElementVisible(blouse)
		return this
	}

	async printedDress(): Promise<LandingPage> {
		await this.isElementVisible(printedDress)
		return this
	}

	async printedDressTwo(): Promise<LandingPage> {
		await this.isElementVisible(printedDressTwo)
		return this
	}

	async printedSummerDress(): Promise<LandingPage> {
		await this.isElementVisible(printedSummerDress)
		return this
	}

	async printedSummerDressTwo(): Promise<LandingPage> {
		await this.isElementVisible(printedSummerDressTwo)
		return this
	}

	async printedChiffonDress(): Promise<LandingPage> {
		await this.isElementVisible(printedChiffonDress)
		return this
	}
}
