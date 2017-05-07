function setValues(args) {
    let lenght = Number(args[0]);
    let outputArr = [];
    for(let i = 1; i < lenght; i++){
        let currentLine = Number(args[i]);
        currentLine.split(' - ');
        let index = currentLine[0];
        let value = currentLine[1];
        outputArr[index] = value;
    }

    console.log(outputArr.join(' '));
}
setValues(['2', '0 - 5', '1 - 6', '2 - 7' ]);
