function censored(text, patterns) {
    for (let patt of patterns) {
        let toReplace = '-'.repeat(patt.length);

        while (text.indexOf(patt) > -1) {
            text = text.replace(patt, toReplace);
        }
    }
    return text;
}
console.log(censored('roses are red, violets are blue', [', violets are', 'red']));
