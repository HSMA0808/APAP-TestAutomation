import { test } from '@playwright/test';
import { TinymcePage } from '../pages/tinymcePage'
import { NestedFramesPage } from '../pages/nestedFramesPage'
import { WindowsPage } from '../pages/windowsPage'

test('Texts test', {tags: ['@componente', '@regression']}, async ({ page },) => {
  const tinymcePage = new TinymcePage(page)
  await page.goto('https://the-internet.herokuapp.com/tinymce');
  await tinymcePage.closeWarningMessage()
  let currentText = await tinymcePage.getEditorTextContent()
  console.log(currentText)
  await tinymcePage.eraseText()
  await tinymcePage.setText()
  await tinymcePage.makeTextBold()
  await tinymcePage.alignCenter()
  await tinymcePage.changeTextColor()
  currentText = await tinymcePage.getEditorTextContent()
  console.log(currentText)
});
test('iframes test', {tags: ['@smoke', '@regression']}, async ({ page }) => {
  const nestedFramesPage = new NestedFramesPage(page)
  await page.goto('https://the-internet.herokuapp.com/nested_frames');
  let currentText = await nestedFramesPage.leftFrameText()
  console.log(currentText)
  currentText = await nestedFramesPage.middleFrameText()
  console.log(currentText)
  currentText = await nestedFramesPage.rightFrameText()
  console.log(currentText)
  currentText = await nestedFramesPage.bottomFrameText()
  console.log(currentText)
});
test('Multiple pages test', {tags: ['@smoke', '@regression']}, async ({ page, context }) => {
  const windowsPage = new WindowsPage(page)
  await page.goto('https://the-internet.herokuapp.com/windows');
  const newPage = await windowsPage.clickOnLink(context)
  const newPageText = await newPage[0].locator('//h3[contains(., "New Window")]').evaluate(node => node.innerText)
  console.log(newPageText)
  await page.close()
});