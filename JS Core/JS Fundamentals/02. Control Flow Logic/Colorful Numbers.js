function colorfulNums(input) {
    let num = input[0];

    console.log("<ul>\n");
    for (let i = 1; i <= num; i++) {
        let color = 'green';
        if (i % 2 === 0) {
            color = 'blue';
        }
        console.log(`<li><span style='color:${color}'>${i}</span></li>\n`);
    }
    console.log("</ul>");
}
colorfulNums(["10"]);
