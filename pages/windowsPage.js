exports.WindowsPage = class WindowsPage {
    constructor(page) {
        this.page = page
        this.click_here_a = page.locator('//a[contains(., "Click Here")]')
    }
    async clickOnLink(context) {
        return await Promise.all([
            context.waitForEvent('page'),
            this.click_here_a.click()
        ]);
    }
}