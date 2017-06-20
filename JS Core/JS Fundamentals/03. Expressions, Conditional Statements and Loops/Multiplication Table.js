function printTable(num) {
    let n = Number(num);
    let table = '<table border="1">\n';
    table += '\t<tr><th>x</th>';

    for (let i = 1; i <= n; i++) {
        table += `<th>${i}</th>`;
    }

    table += '</tr>\n';

    for (let i = 1; i <= n; i++) {
        table += `\t<tr><th>${i}</th>`;

        for (let j = 1; j <= n; j++) {
            table += `<td>${i * j}</td>`
        }

        table += '</tr>\n';
    }

    table += '</table>\n';

    return table
}
console.log(printTable([5]));
