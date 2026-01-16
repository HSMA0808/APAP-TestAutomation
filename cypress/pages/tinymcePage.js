
class tinymcePage {
    elements ={
        fraimeLocator: "[title=\"Rich Text Area\"]",
        close_warning_message_button : () => cy.get('[aria-label="Close"]'),
        editor_text_iframe : () => cy.get('#mce_0_ifr').its('0.contentDocument.body'), 
    }
    closeWarningMessage(){
        this.elements.close_warning_message_button().click();
    }
    async showCurrentEditorTextContent() {
        cy.frameLoaded(this.elements.fraimeLocator);
        this.elements.editor_text_iframe().then( node => { 
            const content = node[0].innerText
            cy.log('Texto actual: ', content)
        }) 
    }
     async modifyEditTextContentValue() {
        cy.frameLoaded(this.elements.fraimeLocator);
        this.elements.editor_text_iframe().find('p').then((node) => {
            node[0].innerText = 'Nuevo valor ingresado'
        }) 
    }
    async alignCenter() {
        cy.frameLoaded(this.elements.fraimeLocator);
        this.elements.editor_text_iframe().then((node) => {
            node[0].style.textAlign = 'center'
        }) 
    }
    async alignRight() {
        cy.frameLoaded(this.elements.fraimeLocator);
        this.elements.editor_text_iframe().then((node) => {
            node[0].style.textAlign = 'right'
        }) 
    }
    async alignLeft() {
        cy.frameLoaded(this.elements.fraimeLocator);
        this.elements.editor_text_iframe().then((node) => {
            node[0].style.textAlign = 'left'
        }) 
    }
    async makeTextBold() {
         cy.frameLoaded(this.elements.fraimeLocator);
        this.elements.editor_text_iframe().then((node) => {
            node[0].style.fontWeight = 'bold'
        }) 
    }
    async changeTextColor() {
         cy.frameLoaded(this.elements.fraimeLocator);
        this.elements.editor_text_iframe().then((node) => {
            node[0].style.color = 'red'
        }) 
    }   
}
module.exports = new tinymcePage();