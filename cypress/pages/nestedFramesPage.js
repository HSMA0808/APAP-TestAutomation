class nestedFramesPage {
    elements = {
        left_iframe: () => cy.get('[name="frame-top"]').its('0.contentDocument').find('[name="frameset-middle"]').find('[name="frame-left"]').its('0.contentDocument'),
        middle_iframe: () => cy.get('[name="frame-top"]').its('0.contentDocument').find('[name="frameset-middle"]').find('[name="frame-middle"]').its('0.contentDocument'),
        right_iframe: () => cy.get('[name="frame-top"]').its('0.contentDocument').find('[name="frameset-middle"]').find('[name="frame-right"]').its('0.contentDocument'),
        bottom_iframe: () => cy.get('[name="frame-bottom"]').its('0.contentDocument')
    }
    async showLeftIFrameText() {
        this.elements.left_iframe().find('body').then((node) => {
            const value = node[0].innerText
            cy.log(value)
        })
    }
    async showMiddleIFrameText() {
        this.elements.middle_iframe().find('body').then((node) => {
            const value = node[0].innerText
            cy.log(value)
        })
    }
    async showRightIFrameText() {
        this.elements.right_iframe().find('body').then((node) => {
            const value = node[0].innerText
            cy.log(value)
        })
    }
    async showBottomIFrameText() {
        this.elements.bottom_iframe().find('body').then((node) => {
            const value = node[0].innerText
            cy.log(value)
        })
    }
}
module.exports = new nestedFramesPage()