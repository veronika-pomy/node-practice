const { readFile , writeFile } = require('fs');
// console.log("start");
readFile('./content/subfolder2/first.txt', 'utf8', ( err, result )=> {
    if (err) {
        console.log(err);
        return;
    } 
    const firstTxtFile = result;
    readFile('./content/subfolder2/second.txt', 'utf8', ( err, result )=> {
        if (err) {
            console.log(err);
            return;
        } 
        const secondTxtFile = result;
    writeFile(
        './content/subfolder2/result-async.txt',
        `Here is the result: ${firstTxtFile}, ${secondTxtFile}.`
    ,(err,result)=> {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
        // console.log("done with this task");
    })
    });
});
// console.log("starting next task");