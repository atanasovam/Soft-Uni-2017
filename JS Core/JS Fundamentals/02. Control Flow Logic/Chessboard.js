/**
 * Created by atama on 8.5.2017 г..
 */

function font(input) {
    let n = input[0];

    console.log("<div class=\"chessboard\">");
    for (row = 1; row <= num; row++) {
        console.log("<div>");
        choosenColors(row, num);
        console.log("</div>");
    }
    console.log("</div>");

    function choosenColors(i, n) {
        let colorF = "";
        let colorS = "";

        if (row % 2 !== 0) {
            colorF = "black";
            colorS = "white";
        }
        else {
            colorF = "white";
            colorS = "black";
        }

        for (row = 0; row < num; row++) {
            row % 2 === 0 ? console.log(`<span class=\"` + colorF + `"></span>`) : console.log(`<span class=\"` + colorS + `"></span>`);
        }
    }
}
font(["4"]);
