/// <reference types="cypress" />
import nestedFramesPage from '../../pages/nestedFramesPage'
import tinymcePage from '../../pages/tinymcePage'
import windowsPage from '../../pages/windowsPage'

describe('Automation technical tests', () => {
  it('Modify text, fontWeigth, color and align to center', () => {
    cy.visit('https://the-internet.herokuapp.com/tinymce')
    tinymcePage.closeWarningMessage()
    tinymcePage.showCurrentEditorTextContent()
    tinymcePage.alignCenter()
    tinymcePage.modifyEditTextContentValue()
    tinymcePage.makeTextBold()
    tinymcePage.changeTextColor()
    tinymcePage.showCurrentEditorTextContent()
   })
  it('Log each iframe text', () => {
    cy.visit('https://the-internet.herokuapp.com/nested_frames')
    nestedFramesPage.showLeftIFrameText()
    nestedFramesPage.showMiddleIFrameText()
    nestedFramesPage.showRightIFrameText()
    nestedFramesPage.showBottomIFrameText()
   })
  it('Handle multiple windows', () => {
    cy.visit('https://the-internet.herokuapp.com/windows')
    windowsPage.clickLink()
   })
})