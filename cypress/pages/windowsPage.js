class windowsPage {
    elements = {
        click_here_a: () => cy.get('[href="/windows/new"]')
    }
    clickLink() {
        this.elements.click_here_a().click()
    }
}
module.exports = new windowsPage()