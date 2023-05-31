//testando a biblioteca line-reader
const lineReader = require('line-reader');

const filePath = 'teste2.docx';

lineReader.eachLine(filePath, (line, last, done) => {
    console.log(`Line: ${line}`);

    if (last) {
        console.log('Finished reading the file.');
        done();
    }
});