const { readFileSync , writeFileSync } = require('fs');

const first = readFileSync('./content/subfolder2/first.txt','utf-8');
const second = readFileSync('./content/subfolder2/second.txt','utf-8');

console.log(first, second);

writeFileSync(
    './content/subfolder2/result-sync.txt',
    `Here is the result: ${first}, ${second}.`, 
    { flag: 'a' }
);