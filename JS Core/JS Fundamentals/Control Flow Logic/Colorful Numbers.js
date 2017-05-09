/**
 * Created by atama on 8.5.2017 г..
 */

function colorfulNums(input) {
    let n = input[0];

    console.log("<ul>\n");
    for (i = 1; i <= num; i++) {
        let color = 'green';
        if (i % 2 === 0) {
            color = 'blue';
        }
        console.log(`<li><span style='color:${color}'>${i}</span></li>\n`);
    }
    console.log("</ul>");
}
colorfulNums(["10"]);
