import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly title: Locator;

    constructor(page: Page) {
        if (!page) {
            throw new Error('Page is required');
        }
        this.page = page;
        this.title = page.locator('h1');
    }

    async navigate(url: string = 'https://example.com'): Promise<void> {
        await this.page.goto(url);
    }
}