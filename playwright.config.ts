import { devices } from 'playwright'

module.exports = {
	testDir: 'tests',
	timeout: 90000,
	retries: 1,
        reporter: [['junit', { outputFile: 'results.xml' }]],
	projects: [
		{
			name: `Chrome`,
			use: {
				browserName: `chromium`,
				channel: `chrome`,
				headless: true,
				viewport: { width: 1720, height: 850 },
				screenshot: `only-on-failure`,
				video: `retain-on-failure`,
				trace: `retain-on-failure`
			}
		},
		{
			name: `Firefox`,
			use: {
				browserName: `firefox`,
				headless: true,
				viewport: { width: 1720, height: 850 },
				screenshot: `only-on-failure`,
				video: `retain-on-failure`,
				trace: `retain-on-failure`,
				launchOptions: {
					slowMo: 200
				}
			}
		},
		{
			name: `Safari`,
			use: {
				browserName: `webkit`,
				viewport: { width: 1720, height: 850 },
				screenshot: `only-on-failure`,
				video: `retain-on-failure`,
				trace: `retain-on-failure`,
				launchOptions: {
					slowMo: 100
				}
			}
		},
		{
			name: `Android`,
			use: {
				...devices[`Pixel 5`],
				browserName: `chromium`,
				headless: false,
				screenshot: `only-on-failure`,
				video: `retain-on-failure`,
				trace: `retain-on-failure`
			}
		},
		{
			name: `iOS`,
			use: {
				...devices[`iPhone 12`],
				browserName: `chromium`,
				headless: false,
				screenshot: `only-on-failure`,
				video: `retain-on-failure`,
				trace: `retain-on-failure`
			}
		},
		{
			name: `Edge`,
			use: {
				browserName: `chromium`,
				channel: `msedge`,
				headless: false,
				viewport: { width: 1720, height: 850 },
				screenshot: `only-on-failure`,
				video: `retain-on-failure`,
				trace: `retain-on-failure`,
				launchOptions: {
					slowMo: 100
				}
			}
		}
	]
}
