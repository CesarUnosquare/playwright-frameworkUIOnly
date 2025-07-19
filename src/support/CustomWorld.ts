import { setWorldConstructor, Before, After } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';

export class CustomWorld {
    public page!: Page;
    private browser!: Browser;

    async init(): Promise<void> {
        this.browser = await chromium.launch({ 
            headless: false,
            timeout: 30000
        });
        this.page = await this.browser.newPage();
    }

    async close(): Promise<void> {
        await this.page?.close();
        await this.browser?.close();
    }
}

setWorldConstructor(CustomWorld);

Before(async function (this: CustomWorld) {
    await this.init();
});

After(async function (this: CustomWorld) {
    await this.close();
});