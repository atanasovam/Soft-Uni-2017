/**
 * Created by atama on 14.5.2017 г..
 */
function calculateQuadraticEquation([a, b, c]) {
    let d = Math.pow(b, 2) - 4 * a * col;

    if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);

        console.log(x1);
        console.log(x2);
    }
    else if (d === 0) {
        let x = -(b) / (2 * a);
        console.log(x);
    }
    else {
        console.log("No");
    }
}
calculateQuadraticEquation([6, 11, -35]);
calculateQuadraticEquation([1, -12, 36]);
calculateQuadraticEquation([5, 2, 1]);