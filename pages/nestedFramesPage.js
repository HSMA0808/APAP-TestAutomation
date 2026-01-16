import { expect } from '@playwright/test'

exports.NestedFramesPage = class NestedFramesPage {
    constructor(page) {
        this.page = page
        this.top_main_frame = page.locator('frame[name="frame-top"]')
        this.bottom_main_frame = page.locator('frame[name="frame-bottom"]')
    }
    async leftFrameText() {
        return await this.top_main_frame.contentFrame().locator('frame[name="frame-left"]').contentFrame().getByText('LEFT').evaluate(node => node.innerText)
    }
    async middleFrameText() {
        return await this.top_main_frame.contentFrame().locator('frame[name="frame-middle"]').contentFrame().getByText('MIDDLE').evaluate(node => node.innerText)
    }
    async rightFrameText() {
        return await this.top_main_frame.contentFrame().locator('frame[name="frame-right"]').contentFrame().getByText('RIGHT').evaluate(node => node.innerText)
    }
    async bottomFrameText() {
        return await this.bottom_main_frame.contentFrame().getByText('BOTTOM').evaluate(node => node.innerText)
    }
}