/**
 * Created by atama on 8.5.2017 г..
 */

function font(input) {
    let n = input[0];

    console.log("<div class=\"chessboard\">");
    for (i = 1; i <= num; i++) {
        console.log("<div>");
        choosenColors(i, num);
        console.log("</div>");
    }
    console.log("</div>");

    function choosenColors(i, n) {
        let colorF = "";
        let colorS = "";

        if (i % 2 !== 0) {
            colorF = "black";
            colorS = "white";
        }
        else {
            colorF = "white";
            colorS = "black";
        }

        for (i = 0; i < num; i++) {
            i % 2 === 0 ? console.log(`<span class=\"` + colorF + `"></span>`) : console.log(`<span class=\"` + colorS + `"></span>`);
        }
    }
}
font(["4"]);
