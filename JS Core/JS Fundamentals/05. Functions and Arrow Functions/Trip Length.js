/**
 * Created by atama on 29.5.2017 г..
 */
function tripLength([x1, y1, x2, y2, x3, y3]) {
    let points = [
        {x: x1, y: y1},
        {x: x2, y: y2},
        {x: x3, y: y3}
    ];

    let distance = function (x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    };

    let currDistance = 0;
    let shortestDistance = 1000000000000;
    let str;

    for (let f = 1; f <= 3; f++) {
        for (let s = 1; s <= 3; s++) {
            if (f !== s) {
                currDistance = distance(points[f - 1].x, points[f - 1].y, points[s - 1].x, points[s - 1].y);
                for (let t = 1; t <= 3; t++) {
                    if (f !== s && s !== t && t !== f) {
                        currDistance += distance(points[s - 1].x, points[s - 1].y, points[t - 1].x, points[t - 1].y);
                        let currStr = `${f}->${s}->${t}: ${currDistance}`;
                        if (currDistance < shortestDistance) {
                            shortestDistance = currDistance;
                            str = currStr;
                        }
                    }
                }
            }
        }
    }

    return str;
}
console.log(tripLength([5, 1, 1, 1, 5, 4]));
console.log(tripLength([-1, -2, 3.5, 0, 0, 2]));
console.log(tripLength([0, 0, 2, 0, 4, 0]));
