/**
 * Created by atama on 8.5.2017 г..
 */

function colorfulNums(input) {
    let n = input[0];

    console.log("<ul>\n");
    for (row = 1; row <= num; row++) {
        let color = 'green';
        if (row % 2 === 0) {
            color = 'blue';
        }
        console.log(`<li><span style='color:${color}'>${row}</span></li>\n`);
    }
    console.log("</ul>");
}
colorfulNums(["10"]);
