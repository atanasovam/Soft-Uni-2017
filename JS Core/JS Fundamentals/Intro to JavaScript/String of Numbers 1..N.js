/**
 * Created by atama on 9.5.2017 г..
 */

function stringOfNums([n]) {
    let result = '';

    for (row = 1; row <= n; row++) {
        result += row;
    }
    console.log(result);
}

stringOfNums(["11"]);