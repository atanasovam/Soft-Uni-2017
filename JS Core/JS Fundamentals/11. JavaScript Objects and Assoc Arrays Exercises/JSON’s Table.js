function performeJsonTable(input) {
    let html = `<table>\n`;

    for (let line of input) {
        html += `    <tr>\n`;
        let obj = JSON.parse(line);
        let keys = Object.keys(obj);

        let name = obj[`${keys[0]}`];
        let position = obj[`${keys[1]}`];
        let salary = obj[`${keys[2]}`];

        html += `        <td>${name}</td>\n`;
        html += `        <td>${position}</td>\n`;
        html += `        <td>${Number(salary)}</td>\n`;

        html += `    <tr>\n`;
    }
    return html += `</table>`;
}
console.log(performeJsonTable([
    `{"name": "Pesho", "position": "Promenliva", "salary": 100000}`,
    `{"name": "Teo", "position": "Lecturer", "salary": 1000}`,
    `{"name": "Georgi", "position": "Lecturer", "salary": 1000}`,
]));