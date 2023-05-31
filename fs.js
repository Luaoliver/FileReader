//testando o módulo embutido fs
const fs = require('fs');
const readline = require('readline');

//fluxo de leitura
const filePath = 'teste2.docx';

try {
    if (!fs.existsSync(filePath)) {
        throw new Error('File not found');
    }

    const fileStream = fs.createReadStream(filePath);

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

    rl.on('error', (err) => {
        console.error(`Error reading the file: ${err.message}`);
    });
} catch (err) {
    console.error(`Error: ${err.message}`);
}