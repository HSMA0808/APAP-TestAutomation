import { expect } from '@playwright/test'

exports.TinymcePage = class TinymcePage {
    constructor(page) {
        this.page = page
        this.close_warning_message_button = page.getByRole('button', { name: 'Close' });
        this.editor_text_iframe = page.locator('iframe[title="Rich Text Area"]')
    }
    async closeWarningMessage() {
        await this.close_warning_message_button.click()
    }

    async getEditorTextContent() {
        const iframeContent = await this.editor_text_iframe.contentFrame()
        const p = await iframeContent.locator('//body[@id="tinymce"]/p')
        return await p.evaluate(node => node.innerText)
    }
    async eraseText() {
        const iframeContent = await this.editor_text_iframe.contentFrame()
        const p = await iframeContent.locator('//body[@id="tinymce"]/p')
        await p.evaluate(node => node.innerText = '')
    }
    async setText() {
        const iframeContent = await this.editor_text_iframe.contentFrame()
        const p = await iframeContent.locator('//body[@id="tinymce"]/p')
        await p.evaluate(node => node.innerText = 'Texto de prueba')
    }
    async alignCenter() {
        const body = await this.editor_text_iframe.contentFrame().locator('//body[@id="tinymce"]')
        await body.evaluate(async (node) => {
            node.style.textAlign = 'center'
        })
    }
    async makeTextBold() {
        const body = await this.editor_text_iframe.contentFrame().locator('//body[@id="tinymce"]')
        await body.evaluate(async (node) => {
            node.style.fontWeight = "bold"
        })
    }
    async changeTextColor() {
        const body = await this.editor_text_iframe.contentFrame().locator('//body[@id="tinymce"]')
        await body.evaluate(async (node) => {
            node.style.color = 'red'
        })
    }
}