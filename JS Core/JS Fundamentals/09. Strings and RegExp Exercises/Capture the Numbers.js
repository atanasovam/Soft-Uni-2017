function matchNumbers(input) {
    let res = [];
    for (let i of input) {
        let currMatch = i.match(/[0-9]+/g);
        if (currMatch !== null) { currMatch.forEach(e => res.push(e))}
    }
    return res.join(' ')
}
console.log(matchNumbers(['The300', 'What is that?', 'I think it’s the 3rd movie.', 'Lets watch it at 22:45']));
