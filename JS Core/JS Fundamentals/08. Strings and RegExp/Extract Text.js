function extractText(str) {
    let open = str.indexOf('(');
    let result = [];

    while (open !== -1) {
        let close = str.indexOf(')', open + 1);
        if (close === -1) { break }
        result.push(str.substring(open + 1, close));
        open = str.indexOf('(', close + 1);
    }
    return result.join(', ');
}
console.log(extractText('Rakiya )(Bulgarian brandy) is self-made liquor (alcoholic drink)'));
