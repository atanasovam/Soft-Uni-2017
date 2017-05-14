/**
 * Created by atama on 10.5.2017 г..
 */

function distance([v1, v2, t]) {
    [v1, v2, t] = [v1, v2, t].map(Number);

    let firstDist = v1 * (t / 60 / 60);
    let secondDist = v2 * (t / 60 / 60);
    let absDist = Math.abs(firstDist - secondDist);

    console.log(absDist * 1000);
}
distance([11, 10, 120]);