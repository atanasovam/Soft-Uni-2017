function occurrenceCalc(str, patt) {
    let count = 0;
    let regex = new RegExp(`\\b(` + patt + `)\\b`, 'gi');
    let matches = regex.exec(str);
    while (matches !== null && matches !== undefined) {
        count++;
        matches = regex.exec(str);
    }
    return count;
}
console.log(occurrenceCalc('There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there'));
console.log(occurrenceCalc('How do you plan on achieving that? How? How can you even think of that?', 'how'));
console.log(occurrenceCalc('The waterfall was so high, that the child couldn’t see its peak.', 'the'));