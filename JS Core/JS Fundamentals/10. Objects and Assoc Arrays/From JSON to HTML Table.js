function jsonToHtml(input) {
    let html = "<table>\n";
    let arr = JSON.parse(input);
    html += "  <tr>";
    let keyWord = Object.keys(arr[0]);

    for (let key of Object.keys(arr[0])) {
        html += `<th>${key}</th>`;
    }
    html += "</tr>\n";

    for (let obj of arr) {
        html += `  <tr><td>${escapeName(obj[`${keyWord[0]}`])}</td>`;
        for (let i = 1; i < keyWord.length; i++) {
            html += `<td>${obj[`${keyWord[i]}`]}</td>`;
        }
        html += '</tr>\n';

    }
    return html + "</table>";

    function escapeName (text) {
        return text.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
    }
}
// console.log(jsonToHtml('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'));
console.log(jsonToHtml('[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},    {"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}, {"Name":"hipi <div>-a","Age":15,"City":"Pruch"}]'));