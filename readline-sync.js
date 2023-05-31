//testando biblioteca readline-sync
const fs = require('fs');
const readlineSync = require('readline-sync');

const filePath = 'teste2.docx';

const fileContent = fs.readFileSync(filePath, 'utf-8');
const lines = fileContent.split('\n');

for (const line of lines) {
    console.log(`Line: ${line}`);
}