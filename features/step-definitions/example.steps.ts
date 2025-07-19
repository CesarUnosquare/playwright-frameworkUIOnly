import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { HomePage } from '../../src/page/homePage';
import { CustomWorld } from '../../src/support/CustomWorld';


declare module '@cucumber/cucumber' {
    interface World extends CustomWorld {}
}

Given('el usuario navega a la página de inicio', async function (this: CustomWorld) {
    const homePage = new HomePage(this.page);
    await homePage.navigate();
});

Then('el título debe ser {string}', async function (this: CustomWorld, expectedTitle: string) {
    const homePage = new HomePage(this.page);
    await expect(homePage.title).toHaveText(expectedTitle);
});