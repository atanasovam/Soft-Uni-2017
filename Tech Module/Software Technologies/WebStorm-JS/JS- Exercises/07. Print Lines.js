function printLines(str) {
    for(let i = 0; i <= str.length; i++){
        let currentLine = str[i];
        if(currentLine === 'Stop'){
            break;
        } else {
            console.log(currentLine);
        }
    }
}