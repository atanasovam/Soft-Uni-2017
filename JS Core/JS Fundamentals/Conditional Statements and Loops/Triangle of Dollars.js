/**
 * Created by atama on 14.5.2017 г..
 */
function printTriangle(input) {
    let n = Number(input[0]);
    for (i = 1; i <= n; i++) {
        console.log('$'.repeat(i));
    }
}
printTriangle([3]);
