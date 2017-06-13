/**
 * Created by atama on 12.6.2017 г..
 */
function scoreIntoHtml(input) {
    let html = '<table>\n';
    html += '   <tr><th>name</th><th>score</th></tr>\n';
    let scores = JSON.parse(input);
    let currScore;

    for (let score of scores) {
        currScore = score.score;
        html += '   <tr>';
        html += `<td>${escapeName(score.name)}</td>`;
        html += `<td>${currScore}</td>`;
        html += '</tr>\n';
    }
    function escapeName(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }

    html += '</table>';
    return html
}
console.log(scoreIntoHtml('[{"name":"<div>Pesho</div>","score":479},{"name":"Gosho","score":205}]'));
