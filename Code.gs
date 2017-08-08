function onOpen() {  
  DocumentApp.getUi()
    .createAddonMenu()
    .addItem('Open Modal', 'openModal')
    .addToUi();
}

function onInstall() {
  onOpen();
}

function openModal() {
  var html = HtmlService.createTemplateFromFile('Modal')
    .evaluate()
    .setHeight(400) // how many pixels height and width
    .setWidth(600);
  
  DocumentApp.getUi().showModalDialog(html, 'Open Modal Starter');
}