/**
 * Created by atama on 14.5.2017 г..
 */
function printTriangle(input) {
    let n = Number(input[0]);
    for (row = 0; row <= n; row++) {
        console.log('$'.repeat(row));
    }
}
printTriangle([5]);
