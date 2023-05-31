//$ npm install -g textract
//$ textract pathToFile
//Para extrair um docx, é necessário instalar o component antiword
//https://docs.bitnami.com/aws/apps/resourcespace/configuration/install-antiword/

var textract = require('textract');

textract.fromFileWithPath('teste.docx', function( error, text ) {
    console.log(`Text: ${text}`);
})
