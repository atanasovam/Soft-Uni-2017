/**
 * Created by atama on 11.6.2017 г..
 */
function matchLinks(input) {
    let res = [];
    let regex = /www\.([A-Za-z\d\-]+)(\.[a-z]+)+/g;
    // let currMatch = regex.exec(input);
    for (let line of input) {
        let currMatch = regex.exec(line);
        while (currMatch) {
            res.push(currMatch[0]);
            currMatch = regex.exec(line);

        }
    }
    return res.join('\n')
}
// matchLinks([`Join WebStars now for free, at www.web-stars.com`,
//     `You can also support our partners:`,
//     `Internet - www.internet.com.lo3`,
//     `WebSpiders - www.webspiders101.com`,
//     `Sentinel - www.sentinel.-ko `,
//     `www.web-stars.com`,
//     `www.internet.com`,
//     `www.webspiders101.com.ld`]);
console.log(matchLinks([
    'Need information about cheap hotels in London?',
    'You can check us at www.london-hotels.co.uk!',
    'We provide the best services in London.',
    'Here are some reviews in some blogs:',
    '"London Hotels are awesome!" - www.indigo.bloggers.com',
    '"I am very satisfied with their services" - ww.ivan.bg',
    '"Best Hotel Services!" - www.rebel21.sedecrem.moc'
]));