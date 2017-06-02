/**
 * Created by atama on 24.5.2017 г..
 */
function printXML(input) {
    console.log("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<quiz>");

    let currQuestion = [];
    let currAnswer = [];

    for (let i = 0; i < input.length; i += 2) {
        currQuestion.push("\t<question>\n" + "\t\t" + input[i] + "\n" + "\t</question>");
        currAnswer.push("\t<answer>\n" + "\t\t" + input[i + 1] + "\n" + "\t</answer>");

        console.log(currQuestion.join(''));
        console.log(currAnswer.join(''));

        currQuestion = [];
        currAnswer = [];
    }

    console.log("</quiz>");
}
printXML(["Who was the forty-second president of the U.S.A.?", "William Jefferson Clinton"]);
console.log("--------------------------");
printXML(["Dry ice is a frozen form of which gas?", "Carbon Dioxide", "What is the brightest star in the night sky?", "Sirius"]);
