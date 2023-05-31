//testando o módulo embutido fs
const fs = require('fs');
const readline = require('readline');

//fluxo de leitura
const fileStream = fs.createReadStream('teste2.docx');

//tratamento de eventos
const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
});

rl.on('line', (line) => {
    console.log(`Line: ${line}`);
});

rl.on('close', () => {
    console.log('Finished reading the file.');
});