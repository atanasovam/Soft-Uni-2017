/**
 * Created by atama on 9.5.2017 г..
 */

function stringOfNums([n]) {
    let result = '';

    for (i = 1; i <= n; i++) {
        result += i;
    }
    console.log(result);
}

stringOfNums(["11"]);